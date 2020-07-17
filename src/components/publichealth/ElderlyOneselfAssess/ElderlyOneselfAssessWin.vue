<template>
  <el-dialog title="老年人健康评估" :visible.sync="dialogFormVisible" width="80%" :before-close="handleClose" :show-close="false" destroy-on-close="true" fullscreen="true">
    <ElderlyOneselfAssessForm ref="elderlyOneselfAssessForm"></ElderlyOneselfAssessForm>
    <div slot="footer" class="dialog-footer">
      <el-button size="mini"  @click="butCancelClick">关 闭</el-button>
      <el-button size="mini" type="primary" @click="butSubmitClick">保 存</el-button>
    </div>
  </el-dialog>
</template>
<script src="./ElderlyOneselfAssessWin.js"></script>
<style scoped src="../../../assets/css/base-form.css"></style>
