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
      me.$refs.elderlyOneselfAssessWin.$emit('open')
    },
    butElderlyDepressionScale () {
      var me = this
      me.$refs.elderlyDepressionScaleWin.$emit('open')
    },
    butElderlyMentalStateWin () {
      var me = this
      me.$refs.elderlyMentalStateWin.$emit('open')
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
