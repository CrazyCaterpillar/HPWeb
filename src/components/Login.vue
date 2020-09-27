<template>
  <div id="loginform" style="text-align: center; margin-top: 160px">
    <el-row type="flex" justify="center">
      <!--<div style="margin-bottom: 20px; margin-top: 20px; width: 340px">-->
        <!--<img src="../assets/logo-hb.png">-->
      <!--</div>-->
    </el-row>
    <el-row type="flex" justify="center">
      <div style="color: #003aff; font-size: 20px;">
        正在登录，请稍后！
      </div>
      <!--<el-col :span="6">-->
        <!--<el-form :model="form" size="mini" label-width="60px">-->
          <!--<el-form-item label="用户名" style="width: 280px; min-width: 280px;">-->
            <!--<el-input v-model="form.login_user" auto-complete="on" placeholder="请输入用户名"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="密码" style="width: 280px; min-width: 280px;">-->
            <!--<el-input type="password" v-model="form.login_password" placeholder="请输入密码"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-button size="mini" type="primary" @click="butCommitClick">登录</el-button>-->
        <!--</el-form>-->
      <!--</el-col>-->
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      userName: null,
      userPwd: null,
      form: {
        login_user: 'hpxx300',
        login_password: 'zysoft@2018'
      }
    }
  },
  methods: {
    init () {
      var me = this
      var parm = {
        record: {
          code: null,
          state: null
        }
      }
      parm.record.code = me.$route.query.code
      parm.record.state = me.$route.query.state
      me.axiosPost('/ZyPHService/getLoginUser', parm)
        .then(function (response) {
          var rpdata = response.data
          if (rpdata.success === true) {
            me.$store.commit('setUserInfo', rpdata)
            var pageType = me.$route.query.pageType.split(',')[0]
            var idCard = me.$route.query.pageType.split(',')[1]
            me.$router.push({
              name: 'ArchivesSynthesizePage',
              query: {
                pageType: pageType,
                idCard: idCard
              }
            })
          } else {
            me.$message({
              message: rpdata.msg,
              type: 'error'
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    butCommitClick: function () {
      // var me = this
      // me.axiosPost('/CheckUser/LogOnSys', me.$data.form)
      //   .then(function (response) {
      //     var rpdata = response.data
      //     me.$store.commit('setUserInfo', rpdata)
      //     me.$router.push({name: 'ArchivesSynthesizePage'})
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })

      // me.axiosPost('/ZyPHService/MasterPage', me.$data.form)
      //   .then(function (response) {
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   }
      // var url = 'https://account.guahao-test.com/oauth/authorize?clientId=6066799ed18f47ff9ad8f079ca348988&redirectUri=http://localhost:13692/api/ZyPHService/GetAccessToken&responseType=code&scope=advance&state=3d6be0a4035d839573b04816624a415e'
      // var url = 'https://account.guahao-test.com/oauth/authorize?clientId=6066799ed18f47ff9ad8f079ca348988&redirectUri=http://localhost:13692/Login&responseType=code&scope=advance&state=3d6be0a4035d839573b04816624a415e'
      // window.location.href = url
    }
  },
  mounted () {
    var me = this
    me.init()
  }
}
</script>

<style scoped>
</style>
