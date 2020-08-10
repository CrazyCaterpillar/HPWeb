<template>
  <el-container :style="constyle" class="list-container">
    <el-aside v-show="treeShow" width="160px" style="border-right: #eeeeee 1px solid">
      <el-button style="width: 100%;"
                 type="primary" @click="butAddClick"
                 size="medium" plain icon="el-icon-plus"
                 v-loading.fullscreen.lock="fullscreenLoading">新增</el-button>
      <el-tree ref="elTree" node-key="node_code" :load="treeDataLoad" :props="defaultProps" @node-click="handleNodeClick" lazy></el-tree>
    </el-aside>
    <el-main class="list-main" v-loading="fromDataLoading">
      <div v-for="panel in mainPanels" v-bind:key="panel.code">
        <div ref="formPage" :is="panel.content"
             v-show="panel.show"
             :openParm="panel.openParm"
             :panelCode="panel.code"
             :closePanel="closePanel"
             :formSaveCallback="formSaveCallback"
             :style="'height: ' + panelHeight + 'px;'"></div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import HygieneSickArchivePage from './HygieneSickArchivePage.vue'
import HygieneSickMedicalPage from '../medical/HygieneSickMedicalPage.vue'

export default {
  name: 'archives-synthesize-page',
  components: {
    HygieneSickArchivePage,
    HygieneSickMedicalPage
  },
  data () {
    return {
      constyle: '',
      content: 'HygieneSickArchivePage',
      archiveId: null,
      panelHeight: 0,
      treeData: null,
      defaultProps: {
        children: 'children',
        label: 'label',
        isLeaf: 'leaf'
      },
      fromDataLoading: false,
      mainPanels: [],
      activeIndex: '1',
      resolve: null,
      treeNodeCodes: [],
      treeShow: false,
      queryParm: {
        pageType: '1',
        arcId: 0,
        keyId: 0
      },
      fullscreenLoading: false
    }
  },
  props: {
    openNewTabpage: {
      type: Function
    },
    openParm: {
      type: Object
    },
    tabHeight: {
      type: Number
    }
  },
  methods: {
    init () {
      var me = this
      if (me.$route.query.pageType != null) {
        me.queryParm.pageType = me.$route.query.pageType
      }
      if (me.$route.query.idCard != null) {
        var parm = {
          record: {
            idCard: me.$route.query.idCard
          }
        }
        me.axiosPost(
          '/PHHygieneSickArchive/getArchiveId',
          parm
        ).then(function (response) {
          if (response.data.statusCode === 8200) {
            var obj = JSON.parse(response.data.data)
            me.queryParm.arcId = obj[0].archive_id
            me.initForm()
          }
          if (response.data.statusCode === 8501) {
            me.$message({
              message: response.data.message,
              type: 'error'
            })
          }
        }).catch(function (error) {
          me.fromDataLoading = false
          me.$message({
            message: error,
            type: 'error'
          })
        })
      }
    },
    initForm () {
      var me = this
      if (me.$route.query.arcId != null) {
        me.queryParm.arcId = me.$route.query.arcId
      }
      if (me.$route.query.keyId != null) {
        me.queryParm.keyId = me.$route.query.keyId
      }
      var pageCom
      if (me.queryParm.pageType === '1001') {
        pageCom = 'HygieneSickArchivePage'
        me.treeShow = false
        let panel = {
          code: me.queryParm.pageType,
          content: pageCom,
          show: true,
          openParm: {
            record: {
              archiveId: me.queryParm.arcId,
              keyId: me.queryParm.keyId
            }
          }
        }
        me.mainPanels.push(panel)
      }
      if (me.queryParm.pageType === '2001') {
        pageCom = 'HygieneSickMedicalPage'
        me.treeShow = true
        me.treeDataLoad({
          data: {
            archiveId: me.queryParm.arcId,
            nodeType: 'HygieneSickMedical',
            level: 1
          }
        })
      }
    },
    formSaveCallback (type, parm) {
      var me = this
      if (type === 'PersonalArchive') {
        if (me.openParm.record.archiveId === null) {
          me.openParm.record.archiveId = parm.archiveId
        }
      }
    },
    resize (val) {
      this.panelHeight = val - 4
    },
    handleNodeClick (data, node, com) {
      var me = this
      me.fromDataLoading = true
      // me.openParm.record = node.data
      if (node.data.url != null && node.data.url !== '') {
        me.fromDataLoading = true
        var panel = {
          code: node.data.nodeCode,
          content: node.data.url,
          show: true,
          openParm: {
            record: node.data
          }
        }
        let selectIndex = -1
        for (var i = 0; i < me.mainPanels.length; i++) {
          me.mainPanels[i].show = false
          if (panel.code === me.mainPanels[i].code) {
            selectIndex = i
          }
        }
        if (selectIndex !== -1) {
          // me.mainPanels.splice(selectIndex, 1)
          me.mainPanels[selectIndex].show = true
          me.$refs.formPage[selectIndex].init(panel.openParm)
          me.fromDataLoading = false
          return
        }
        me.mainPanels.push(panel)
        me.fromDataLoading = false
      }
      me.fromDataLoading = false
    },
    handleCommand (command) {
      var me = this
      if (command === 'a') {
        var panel = {
          code: 'M1',
          content: 'HygieneSickMedicalEdit',
          show: true,
          openParm: {
            record: {
              archiveId: me.openParm.record.archiveId
            }
          }
        }
        let selectIndex = -1
        for (var i = 0; i < me.mainPanels.length; i++) {
          me.mainPanels[i].show = false
          if (panel.code === me.mainPanels[i].code) {
            selectIndex = i
          }
        }
        if (selectIndex !== -1) {
          me.mainPanels[selectIndex].show = true
          me.$refs.formPage[selectIndex].init(panel.openParm)
          return
        }
        me.mainPanels.push(panel)
      }
    },
    loadNode (node, resolve) {
    },
    treeDataLoad (node, resolve) {
      var me = this
      if (this.resolve == null) {
        this.resolve = resolve
      }
      if (resolve === undefined) {
        resolve = this.resolve
      }
      if (node == null) {
        return
      }
      if (node.level === 0) {
        return
      }
      var parm = null
      parm = node.data
      me.axiosPost(
        '/PHHygieneSickArchiveTree/getArchiveTreeNodes',
        parm
      ).then(function (response) {
        var rpdata = JSON.parse(response.data.data)
        resolve(rpdata)
      })
      //   .catch(function (error) {
      //   me.$message({
      //     message: error,
      //     type: 'error'
      //   })
      // })
    },
    closePanel (code) {
      var me = this
      for (var i = 0; i < me.mainPanels.length; i++) {
        if (code === me.mainPanels[i].code) {
          me.mainPanels.splice(i, 1)
        }
      }
    },
    butAddClick () {
      var me = this
      // me.fromDataLoading = true
      if (me.queryParm.pageType === '2001') {
        var panel = {
          code: '2001-0',
          content: 'HygieneSickMedicalPage',
          show: true,
          openParm: {
            record: {
              archiveId: me.queryParm.arcId,
              keyId: null
            }
          }
        }
        let selectIndex = -1
        for (var i = 0; i < me.mainPanels.length; i++) {
          me.mainPanels[i].show = false
          if (panel.code === me.mainPanels[i].code) {
            selectIndex = i
          }
        }
        if (selectIndex !== -1) {
          me.mainPanels[selectIndex].show = true
          me.$refs.formPage[selectIndex].init(panel.openParm)
          return
        }
        me.mainPanels.push(panel)
        // me.fromDataLoading = false
      }
    }
  },
  mounted () {
    var me = this
    me.resize(me.tabHeight)
    me.init()
  },
  destroyed () {
  }
}
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
