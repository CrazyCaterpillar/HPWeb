<template>
  <el-container :style="constyle" class="list-container" v-loading="fromDataLoading">
    <el-header class="list-header">
      <div style="padding: 0px">
        <span>高血压随访</span>
        <div style="float: right">
          <el-button size="mini" type="primary" @click="butSubmitClick" icon="el-icon-edit" >保存</el-button>
        </div>
      </div>
    </el-header>
    <el-main class="list-main">
      <SickBloodFollowupForm ref="sickBloodFollowupForm"></SickBloodFollowupForm>
    </el-main>
  </el-container>
</template>
<script src="./SickBloodFollowupPage.js"></script>
<style scoped src="../../../assets/css/base-form.css"></style>
