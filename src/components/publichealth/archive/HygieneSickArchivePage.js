import HygieneSickArchiveForm from './HygieneSickArchiveForm.vue'
export default {
  name: 'hygieneSickArchivePage',
  components: {
    HygieneSickArchiveForm
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
      me.$refs.hygieneSickArchiveForm.$emit('open', parm)
    },
    resize (val) {
      var me = this
      me.tbHeight = val - 40
    },
    butSubmitClick () {
      var me = this
      me.$refs.hygieneSickArchiveForm.$emit('recordSubmit')
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
