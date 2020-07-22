<template>
  <el-select placeholder="请选择" @change="change($event)" :size="size" :value="value" clearable :disabled="this.disabled">
    <el-option
      v-for="item in items"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'ud-select',
  data () {
    return {
      items: [],
      url: this.dataUrl
    }
  },
  props: {
    dataUrl: String,
    value: Number,
    size: String,
    showAllTip: String,
    showAllTipLabel: String,
    disabled: Boolean
  },
  methods: {
    loadData: function () {
      var me = this
      var parmString = me.url.split('?', 2)
      var parmUrl = parmString[0]
      var condition = {condition: parmString[1]}
      me.axiosPost(
        parmUrl,
        condition
      ).then(function (response) {
        // if (response.data.statusCode === 8200) {
        var rpdata = response.data.rows
        me.items = rpdata
        // }
      }).catch(function (error) {
        console.log(error)
      })
    },
    change: function (val) {
      this.$emit('input', val)
    },
    setItemData (dictData) {
      var me = this
      var parmString = me.url.split('?', 2)
      var condition = parmString[1]
      var dictName = condition.split('=', 2)
      dictName = dictName[1]
      var itemData = dictData
      if (itemData !== null && itemData !== undefined) {
        var item = itemData.filter(
          (itemData) => {
            return (itemData.dict_name === dictName)
          }
        )
        me.items = item
      }
    }
  },
  mounted () {
    var me = this
    me.$on('loadData', function (parm) {
      me.url = parm
      me.loadData()
    })
    me.$on('setItemData', function (dictData) {
      me.setItemData(dictData)
    })
    // me.loadData()
  }
}
</script>

<style scoped>

</style>
