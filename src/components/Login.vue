<template>
  <div id="loginform" style="text-align: center; margin-top: 160px">
    <el-row type="flex" justify="center">
      <!--<div style="margin-bottom: 20px; margin-top: 20px; width: 340px">-->
        <!--<img src="../assets/logo-hb.png">-->
      <!--</div>-->
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-form :model="form" size="mini" label-width="60px">
          <el-form-item label="用户名" style="width: 280px; min-width: 280px;">
            <el-input v-model="form.login_user" auto-complete="on" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" style="width: 280px; min-width: 280px;">
            <el-input type="password" v-model="form.login_password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button size="mini" type="primary" @click="butCommitClick">登录</el-button>
        </el-form>
      </el-col>
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
    butCommitClick: function () {
      var me = this
      // me.$router.push({name: 'FormTest'})
      me.axiosPost('/CheckUser/LogOnSys', me.$data.form)
        .then(function (response) {
          var rpdata = response.data
          me.$store.commit('setUserInfo', rpdata)
          me.$router.push({name: 'ArchivesSynthesizePage'})
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
