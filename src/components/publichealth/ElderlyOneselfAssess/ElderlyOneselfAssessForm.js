export default {
  name: 'elderlyOneselfAssessForm',
  components: {
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        assess_no: null,
        org_id: null,
        archive_id: null,
        medical_no: null,
        sick_id: null,
        assess_food: null,
        assess_wash: null,
        assess_dress: null,
        assess_wc: null,
        assess_sport: null,
        assess_score: null,
        assess_result: null,
        create_operator: null,
        create_time: '',
        modify_operator: null,
        modify_time: '',
        remark: '',
        assess_operator: null,
        assess_time: '',
        assess_operator_name: ''
      },
      defaultForm: {
      },
      rules: {
        assess_operator: [
          { required: true, message: '请输入评估人', trigger: 'blur' }
        ],
        assess_time: [
          { required: true, message: '请输入评估时间', trigger: 'blur' }
        ]
      },
      disabledFlag: {
      },
      readonlyFlag: {
        readonly_assess_operator_name: true
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
      if (parm != null && parm.record != null && parm.record.assessNo != null) {
        me.recordEdit(parm.record)
      } else {
        me.recordAdd(parm.record)
      }
    },
    resetForm (formName) {
      let me = this
      this.Util.formObjectReset(me.form, me.defaultForm)
    },
    resize (val) {
    },
    setValueByDict (result) {
      if (result.columnName === 'assess_operator_name') {
        this.form.assess_operator_name = result.label
        this.form.assessOperator = result.value
        this.$forceUpdate()
      }
    },
    butSubmitClick () {
      var me = this
      me.recordSubmit()
    },
    butDelClick () {
      let me = this
      me.$confirm('确认删除？')
        .then(_ => {
          me.recordDel()
        })
        .catch(_ => {})
    },
    formInit () {
    },
    recordAdd (parm) {
      var me = this
      me.resetForm('elForm')
      me.form.archive_id = parm.archive_id
      me.form.medical_no = parm.medical_no
      me.formInit()
    },
    recordEdit (parm) {
      var me = this
      me.resetForm('elForm')
      me.fromDataLoading = true
      me.axiosPost(
        '/ElderlyOneselfAssess/getForm',
        parm
      ).then(function (response) {
        if (response.data.statusCode === 8200) {
          var rpdata = response.data.data
          me.form = rpdata
          me.fromDataLoading = false
        }
        if (response.data.statusCode === 8501) {
          me.$message({
            message: response.data.statusMess,
            type: 'error'
          })
        }
      }).catch(function (error) {
        me.fromDataLoading = false
        me.$message({
          message: error,
          type: 'error'
        })
      })
    },
    recordDel (parm, fun) {
      let me = this
      me.dialogFormVisible = true
      me.axiosPost(
        '/ElderlyOneselfAssess/deleteRecord',
        me.form
      ).then(function (response) {
        me.dialogFormVisible = false
        me.$message({
          message: '数据删除成功！！！',
          type: 'success'
        })
        me.closePanel(me.panelCode)
      }).catch(function (error) {
        console.log(error)
      })
      me.dialogFormVisible = false
    },
    recordSubmit () {
      let me = this
      me.$refs['elForm'].validate((valid) => {
        if (valid) {
          me.fomrValid = true
        } else {
          me.fomrValid = false
        }
      })
      if (me.fomrValid === false) {
        me.$message({
          message: '请按要求填写！！！',
          type: 'error'
        })
        return
      }
      me.fromDataLoading = true
      me.axiosPost(
        '/ElderlyOneselfAssess/saveRecord',
        me.form
      ).then(function (response) {
        me.fromDataLoading = false
        if (response.data.statusCode === 8500) {
          me.$message({
            message: response.data.data.text,
            type: 'error'
          })
        }
        if (response.data.statusCode === 8200) {
          if (me.form.assessNo == null || me.form.assessNo === '') {
            me.form.assessNo = response.data.data.text
          }
          if (me.formSaveCallback) {
            me.formSaveCallback('ElderlyOneselfAssess', me.form)
          }
          me.fromDataLoading = false
          me.$message({
            message: '数据保存成功！！！',
            type: 'success'
          })
        }
      }).catch(function (error) {
        me.fromDataLoading = false
        me.$message({
          message: '数据保存失败！' + error,
          type: 'error'
        })
      })
    }
  },
  mounted () {
    var me = this
    me.$on('open', function (parm) {
      me.init(parm)
    })
    me.$on('recordSubmit', function () {
      me.recordSubmit()
    })
  }
}
