import SickBloodFollowupForm from './SickBloodFollowupForm.vue'
export default {
  name: 'sickBloodFollowupPage',
  components: {
    SickBloodFollowupForm
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
      me.$refs.sickBloodFollowupForm.$emit('open', parm)
    },
    resize (val) {
    },
    butSubmitClick () {
      var me = this
      me.$refs.sickBloodFollowupForm.$emit('recordSubmit')
    }
  },
  mounted () {
    var me = this
    me.init(me.openParm)
  }
}
