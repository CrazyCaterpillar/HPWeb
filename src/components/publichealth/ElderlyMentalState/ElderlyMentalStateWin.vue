<template>
  <el-dialog title="老年人简易智力状态检查量表" :visible.sync="dialogFormVisible" width="80%" :before-close="handleClose" :show-close="false" destroy-on-close="true" :fullscreen="true">
    <ElderlyMentalStateForm ref="elderlyMentalStateForm"></ElderlyMentalStateForm>
    <div slot="footer" class="dialog-footer" >
      <el-button size="mini"  @click="butCancelClick">关 闭</el-button>
      <el-button size="mini" type="primary" @click="butSubmitClick">保 存</el-button>
    </div>
  </el-dialog>
</template>
<script src="./ElderlyMentalStateWin.js"></script>
<style scoped src="../../../assets/css/base-form.css"></style>
