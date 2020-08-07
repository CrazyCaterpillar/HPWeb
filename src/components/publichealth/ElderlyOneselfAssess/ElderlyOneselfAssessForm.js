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
        disabled_assess_score: true,
        disabled_assess_result: true
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
    panelCode: String
    // formSaveCallback: Function
  },
  methods: {
    init (parm, formSaveCallback) {
      var me = this
      if (parm != null && parm.record != null && parm.record.assess_no !== 0) {
        me.recordEdit(parm.record)
      } else {
        me.recordAdd(parm.record)
      }
      me.formSaveCallback = formSaveCallback
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
        '/PHHygieneSickMedical/getAssessForm',
        parm
      ).then(function (response) {
        if (response.data.statusCode === 8200) {
          var rpdata = response.data.data
          var rpFormData = JSON.parse(rpdata)
          me.form = rpFormData[0]
          me.fromDataLoading = false
        }
        if (response.data.statusCode === 8501) {
          me.$message({
            message: response.data.message,
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
        '/PHHygieneSickMedical/deleteRecord',
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
        '/PHHygieneSickMedical/saveAssessRecord',
        me.form
      ).then(function (response) {
        me.fromDataLoading = false
        if (response.data.statusCode === 8501) {
          me.$message({
            message: response.data.message,

            type: 'error'
          })
        }
        if (response.data.statusCode === 8200) {
          if (me.formSaveCallback) {
            me.formSaveCallback(me.form)
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
    },
    validationNumber (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    setBaseDictByType () {
      var me = this
      var url = '/PHBaseDict/getDictByType?dictType=ElderlyOneselfAssessForm'
      var parmString = url.split('?', 2)
      var parmUrl = parmString[0]
      var condition = {condition: parmString[1]}
      me.axiosPost(
        parmUrl,
        condition
      ).then(function (response) {
        var rpdata = response.data.rows
        var eventName = 'setItemData'
        var refComs = [
          'ud_select_assess_result'
        ]
        for (var com of refComs) {
          me.$refs[com].$emit(eventName, rpdata)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    changeAssessFood () {
      var me = this
      me.changeAssessResult()
    },
    changeAssessWash () {
      var me = this
      me.changeAssessResult()
    },
    changeAssessDress () {
      var me = this
      me.changeAssessResult()
    },
    changeAssessWc () {
      var me = this
      me.changeAssessResult()
    },
    changeAssessSport () {
      var me = this
      me.changeAssessResult()
    },
    changeAssessResult () {
      var me = this
      var assessFood = 0
      var assessWash = 0
      var assessDress = 0
      var assessWc = 0
      var assessSport = 0
      var assessScore = 0
      var assessResult = 0
      if (me.form.assess_food === 1 || me.form.assess_food === 2) {
        assessFood = 0
      } else if (me.form.assess_food === 3) {
        assessFood = 3
      } else if (me.form.assess_food === 4) {
        assessFood = 5
      } else {
        assessFood = 0
      }
      if (me.form.assess_wash === 1) {
        assessWash = 0
      } else if (me.form.assess_wash === 2) {
        assessWash = 1
      } else if (me.form.assess_wash === 3) {
        assessWash = 3
      } else if (me.form.assess_wash === 4) {
        assessWash = 7
      } else {
        assessWash = 0
      }
      if (me.form.assess_dress === 1 || me.form.assess_dress === 2) {
        assessDress = 0
      } else if (me.form.assess_dress === 3) {
        assessDress = 3
      } else if (me.form.assess_dress === 4) {
        assessDress = 5
      } else {
        assessDress = 0
      }
      if (me.form.assess_wc === 1) {
        assessWc = 0
      } else if (me.form.assess_wc === 2) {
        assessWc = 1
      } else if (me.form.assess_wc === 3) {
        assessWc = 5
      } else if (me.form.assess_wc === 4) {
        assessWc = 10
      } else {
        assessWc = 0
      }
      if (me.form.assess_sport === 1) {
        assessSport = 0
      } else if (me.form.assess_sport === 2) {
        assessSport = 1
      } else if (me.form.assess_sport === 3) {
        assessSport = 5
      } else if (me.form.assess_sport === 4) {
        assessSport = 10
      } else {
        assessSport = 0
      }
      assessScore = assessFood + assessWash + assessDress + assessWc + assessSport
      me.form.assess_score = parseFloat(assessScore)
      if (assessScore >= 0 && assessScore <= 3) {
        assessResult = 1
      } else if (assessScore >= 4 && assessScore <= 8) {
        assessResult = 2
      } else if (assessScore >= 9 && assessScore <= 18) {
        assessResult = 3
      } else if (assessScore >= 19) {
        assessResult = 4
      } else {
        assessResult = 4
      }
      me.form.assess_result = parseFloat(assessResult)
    }
  },
  mounted () {
    var me = this
    me.$on('open', function (parm, formSaveCallback) {
      me.init(parm, formSaveCallback)
      me.setBaseDictByType()
    })
    me.$on('recordSubmit', function () {
      me.recordSubmit()
    })
  }
}
