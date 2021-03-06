import SickGlucoseFollowupForm from './SickGlucoseFollowupForm.vue'
export default {
  name: 'sickGlucoseFollowupPage',
  components: {
    SickGlucoseFollowupForm
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
      formDataLoading: false,
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
      me.$refs.sickGlucoseFollowupForm.$emit('open', parm)
    },
    resize (val) {
    },
    butSubmitClick () {
      var me = this
      me.$refs.sickGlucoseFollowupForm.$emit('recordSubmit')
    }
  },
  mounted () {
    var me = this
    me.init(me.openParm)
  }
}
