import HygieneSickMedicalForm from './HygieneSickMedicalForm.vue'
import ElderlyOneselfAssessWin from '../ElderlyOneselfAssess/ElderlyOneselfAssessWin.vue'
import ElderlyDepressionScaleWin from '../ElderlyDepressionScale/ElderlyDepressionScaleWin.vue'
import ElderlyMentalStateWin from '../ElderlyMentalState/ElderlyMentalStateWin.vue'

export default {
  name: 'hygieneSickMedicalPage',
  components: {
    HygieneSickMedicalForm,
    ElderlyOneselfAssessWin,
    ElderlyDepressionScaleWin,
    ElderlyMentalStateWin
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
      },
      rules: {
      },
      formValid: false,
      constyle: 'height: 0px;',
      title: '',
      fromDataLoading: false,
      userInfo: this.$store.state.userInfo,
      screenHeight: document.documentElement.clientHeight,
      tbHeight: document.documentElement.clientHeight
    }
  },
  props: {
    openNewTabpage: Function,
    closePanel: Function,
    openParm: Object,
    panelCode: String,
    formSaveCallback: Function
  },
  methods: {
    init (parm) {
      var me = this
      me.$refs.hygieneSickMedicalForm.$emit('open', parm)
    },
    resize (val) {
      var me = this
      me.tbHeight = val - 40
    },
    butSubmitClick () {
      var me = this
      me.$refs.hygieneSickMedicalForm.$emit('recordSubmit')
    },
    butElderlyOneseIfAssess () {
      var me = this
      var assessNo = 0
      var parm = {
        record: {
          medical_no: me.$refs.hygieneSickMedicalForm.form.medical_no,
          archive_id: me.$refs.hygieneSickMedicalForm.form.archive_id,
          assess_no: assessNo
        }
      }
      me.axiosPost(
        '/PHHygieneSickMedical/getAssessNo',
        parm
      ).then(function (response) {
        if (response.data.statusCode === 8200) {
          var obj = JSON.parse(response.data.data)
          parm.record.assess_no = obj[0].assess_no
          me.$refs.elderlyOneselfAssessWin.$emit('open', parm, function (form) {
            me.elderlyOneselfAssessWinBack(form)
          })
        }
        if (response.data.statusCode === 8501) {
          me.$refs.elderlyOneselfAssessWin.$emit('open', parm)
        }
      }).catch(function (error) {
        me.fromDataLoading = false
        me.$message({
          message: error,
          type: 'error'
        })
      })
    },
    butElderlyDepressionScale () {
      var me = this
      var reportNo = 0
      var parm = {
        record: {
          medical_no: me.$refs.hygieneSickMedicalForm.form.medical_no,
          archive_id: me.$refs.hygieneSickMedicalForm.form.archive_id,
          reprot_no: reportNo
        }
      }
      me.axiosPost(
        '/PHHygieneSickMedical/getDepressionNo',
        parm
      ).then(function (response) {
        if (response.data.statusCode === 8200) {
          var obj = JSON.parse(response.data.data)
          parm.record.reprot_no = obj[0].reprot_no
          me.$refs.elderlyDepressionScaleWin.$emit('open', parm, function (form) {
            me.elderlyDepressionScaleWinBack(form)
          })
        }
        if (response.data.statusCode === 8501) {
          me.$refs.elderlyDepressionScaleWin.$emit('open', parm)
        }
      }).catch(function (error) {
        me.fromDataLoading = false
        me.$message({
          message: error,
          type: 'error'
        })
      })
    },
    butElderlyMentalStateWin () {
      var me = this
      var reportNo = 0
      var parm = {
        record: {
          medical_no: me.$refs.hygieneSickMedicalForm.form.medical_no,
          archive_id: me.$refs.hygieneSickMedicalForm.form.archive_id,
          reprot_no: reportNo
        }
      }
      me.axiosPost(
        '/PHHygieneSickMedical/getStateNo',
        parm
      ).then(function (response) {
        if (response.data.statusCode === 8200) {
          var obj = JSON.parse(response.data.data)
          parm.record.reprot_no = obj[0].reprot_no
          me.$refs.elderlyMentalStateWin.$emit('open', parm, function (form) {
            me.elderlyMentalStateWinBack(form)
          })
        }
        if (response.data.statusCode === 8501) {
          me.$refs.elderlyMentalStateWin.$emit('open', parm)
        }
      }).catch(function (error) {
        me.fromDataLoading = false
        me.$message({
          message: error,
          type: 'error'
        })
      })
    },
    elderlyOneselfAssessWinBack (form) {
      var me = this
      me.$refs.hygieneSickMedicalForm.$emit('elderlyOneselfAssessWinBack', form)
    },
    elderlyMentalStateWinBack (form) {
      var me = this
      me.$refs.hygieneSickMedicalForm.$emit('elderlyMentalStateWinBack', form)
    },
    elderlyDepressionScaleWinBack (form) {
      var me = this
      me.$refs.hygieneSickMedicalForm.$emit('elderlyDepressionScaleWinBack', form)
    }
  },
  mounted () {
    var me = this
    me.resize(document.documentElement.clientHeight)
    window.addEventListener('resize', () => {
      return (() => {
        me.screenHeight = document.documentElement.clientHeight
      })()
    }, false)
    me.init(me.openParm)
  },
  watch: {
    screenHeight (val) {
      var me = this
      me.resize(val)
    }
  }
}
