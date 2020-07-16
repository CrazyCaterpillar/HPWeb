<template>
  <el-container :style="constyle" class="list-container" v-loading="fromDataLoading">
    <el-header class="list-header">
      <div style="padding: 0px">
        <span>健康档案</span>
        <div style="float: right">
          <el-button size="mini" type="primary" @click="butSubmitClick" plain icon="el-icon-edit" >保存</el-button>
        </div>
      </div>
    </el-header>
    <el-main class="list-main" :style="'height:'+(tbHeight) +'px;'">
      <HygieneSickArchiveForm ref="hygieneSickArchiveForm"></HygieneSickArchiveForm>
    </el-main>
  </el-container>
</template>
<script src="./HygieneSickArchivePage.js"></script>
<style scoped src="../../../assets/css/base-form.css"></style>
