<template>
  <div style="color: crimson; font-size: 20px">
    无效用户，请登录！！！
  </div>
</template>
<script>
export default {
  name: 'login-error',
  mounted () {
    this.$store.commit('setUserInfo', null)
  }
}
</script>
<style scoped>
</style>
