import ElderlyMentalStateForm from './ElderlyMentalStateForm.vue'
export default {
  name: 'elderlyMentalStateWin',
  components: {
    ElderlyMentalStateForm
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
    init (parm, funBack) {
      var me = this
      me.dialogFormVisible = true
      this.$nextTick(() => {
        me.$refs.elderlyMentalStateForm.$emit('open', parm, funBack)
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
      me.$refs.elderlyMentalStateForm.$emit('recordSubmit')
    }
  },
  mounted () {
    var me = this
    me.$on('open', function (parm, funBack) {
      me.init(parm, funBack)
    })
  }
}
