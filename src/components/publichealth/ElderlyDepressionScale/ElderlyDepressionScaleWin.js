import ElderlyDepressionScaleForm from './ElderlyDepressionScaleForm.vue'
export default {
  name: 'elderlyDepressionScaleWin',
  components: {
    ElderlyDepressionScaleForm
  },
  data () {
    return {
      dialogFormVisible: false,
      formValid: false,
      constyle: 'height: 0px;',
      title: '',
      fromDataLoading: false,
      userInfo: this.$store.state.userInfo
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
      me.dialogFormVisible = true
      this.$nextTick(() => {
        me.$refs.elderlyDepressionScaleForm.$emit('open', parm)
      })
    },
    resize (val) {
    },
    handleClose (done) {
    },
    butCancelClick () {
      let me = this
      this.$confirm('确认关闭？')
        .then(_ => {
          me.dialogFormVisible = false
        })
        .catch(_ => {})
    },
    butSubmitClick () {
      var me = this
      me.$refs.elderlyDepressionScaleForm.$emit('recordSubmit')
    }
  },
  mounted () {
    var me = this
    me.$on('open', function (parm) {
      me.init(parm)
    })
  }
}
