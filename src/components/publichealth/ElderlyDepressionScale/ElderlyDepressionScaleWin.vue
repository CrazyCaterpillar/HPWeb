<template>
  <el-dialog title="老年人抑郁量表" :visible.sync="dialogFormVisible" width="80%" :before-close="handleClose" :show-close="false" destroy-on-close="true" fullscreen="true">
    <ElderlyDepressionScaleForm ref="elderlyDepressionScaleForm"></ElderlyDepressionScaleForm>
    <div slot="footer" class="dialog-footer" >
      <el-button size="mini"  @click="butCancelClick">关 闭</el-button>
      <el-button size="mini" type="primary" @click="butSubmitClick">保 存</el-button>
    </div>
  </el-dialog>
</template>
<script src="./ElderlyDepressionScaleWin.js"></script>
<style scoped src="../../../assets/css/base-form.css"></style>
