<template>
  <el-container :style="constyle" class="list-container" v-loading="fromDataLoading">
    <el-header class="list-header">
      <div style="padding: 0px">
        <span>健康体检</span>
        <div style="float: right">
          <el-button size="mini" type="primary" @click="butSubmitClick" plain icon="el-icon-edit" >保存</el-button>
          <el-button size="mini" type="primary" @click="butElderlyOneseIfAssess" plain icon="el-icon-edit" >老年人健康评估</el-button>
          <el-button size="mini" type="primary" @click="butElderlyDepressionScale" plain icon="el-icon-edit" >老年人抑郁量表</el-button>
          <el-button size="mini" type="primary" @click="butElderlyMentalStateWin" plain icon="el-icon-edit" >简易智力状态检查</el-button>
        </div>
      </div>
    </el-header>
    <el-main class="list-main" :style="'height:'+(tbHeight) +'px;'">
      <HygieneSickMedicalForm ref="hygieneSickMedicalForm"></HygieneSickMedicalForm>
    </el-main>
    <ElderlyOneselfAssessWin ref="elderlyOneselfAssessWin"></ElderlyOneselfAssessWin>
    <ElderlyDepressionScaleWin ref="elderlyDepressionScaleWin"></ElderlyDepressionScaleWin>
    <ElderlyMentalStateWin ref="elderlyMentalStateWin"></ElderlyMentalStateWin>
  </el-container>
</template>
<script src="./HygieneSickMedicalPage.js"></script>
<style scoped src="../../../assets/css/base-form.css"></style>
