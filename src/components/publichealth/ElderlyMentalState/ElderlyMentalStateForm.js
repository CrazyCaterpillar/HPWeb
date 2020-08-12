export default {
  name: 'elderlyMentalStateForm',
  components: {
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        report_no: null,
        org_id: null,
        archive_id: null,
        medical_no: null,
        time_year: '',
        time_season: '',
        time_month: '',
        time_date: '',
        time_week: '',
        time_score: null,
        place_nation: '',
        place_city: '',
        place_city_place: '',
        place_building: '',
        place_floor: '',
        place_score: null,
        recall_word_1: '',
        recall_word_2: '',
        recall_word_3: '',
        recall_word_score: null,
        name_1: '',
        name_2: '',
        name_score: null,
        language_repeat: '',
        language_repeat_score: null,
        comprehension_score: null,
        reading_score: null,
        writeing_score: null,
        painting_score: null,
        recall_1: '',
        recall_2: '',
        recall_3: '',
        recall_score: null,
        computing_1: '',
        computing_2: '',
        computing_3: '',
        computing_4: '',
        computing_5: '',
        computing_score: null,
        sick_id: null,
        assess_score: null,
        assess_result: null,
        assess_operator: null,
        assess_time: '',
        create_operator: null,
        create_operator_name: '',
        create_time: '',
        modify_operator: null,
        modify_time: '',
        remark: '',
        sick_name: '',
        sick_sex: null,
        birthday: '',
        writeing: '',
        painting: '',
        education: null,
        education_name: '',
        place_country: '',
        place_county: ''
      },
      defaultForm: {
      },
      rules: {
        time_year: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0 }
        ],
        time_month: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 1, max: 12 }
        ],
        time_date: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 1, max: 31 }
        ],
        time_week: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        time_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 5 }
        ],
        place_nation: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        place_city: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        place_city_place: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        place_building: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        place_floor: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        place_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 5 }
        ],
        recall_word_1: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        recall_word_2: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        recall_word_3: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        recall_word_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 3 }
        ],
        name_1: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        name_2: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        name_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 2 }
        ],
        language_repeat: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        language_repeat_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 1 }
        ],
        comprehension_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 3 }
        ],
        reading_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 1 }
        ],
        writeing_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 1 }
        ],
        painting_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 1 }
        ],
        recall_1: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        recall_2: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        recall_3: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        recall_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 3 }
        ],
        computing_1: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        computing_2: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        computing_3: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        computing_4: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        computing_5: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        computing_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0, max: 5 }
        ],
        assess_score: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0 }
        ],
        writeing: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        painting: [
          { max: 300, message: '长度小于等于300个字符', trigger: 'blur' }
        ]
      },
      disabledFlag: {
        disabled_assess_score: true,
        disabled_education_name: true
      },
      readonlyFlag: {
        readonly_create_operator_name: true
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
      if (parm != null && parm.record != null && parm.record.reprot_no !== 0) {
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
      if (result.columnName === 'create_operator_name') {
        this.form.create_operator_name = result.label
        this.form.create_operator = result.value
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
        '/PHHygieneSickMedical/getStateForm',
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
        '/PHHygieneSickMedical/saveStateRecord',
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
      var url = '/PHBaseDict/getDictByType?dictType=ElderlyMentalStateForm'
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
        ]
        for (var com of refComs) {
          me.$refs[com].$emit(eventName, rpdata)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    changeTimeScore () {
      var me = this
      me.changeAssessScore()
    },
    changePlaceScore () {
      var me = this
      me.changeAssessScore()
    },
    changeRecallWordScore () {
      var me = this
      me.changeAssessScore()
    },
    changeNameScore () {
      var me = this
      me.changeAssessScore()
    },
    changeComprehensionScore () {
      var me = this
      me.changeAssessScore()
    },
    changeReadingScore () {
      var me = this
      me.changeAssessScore()
    },
    changeWriteingScore () {
      var me = this
      me.changeAssessScore()
    },
    changePaintingScore () {
      var me = this
      me.changeAssessScore()
    },
    changeRecallScore () {
      var me = this
      me.changeAssessScore()
    },
    changeComputingScore () {
      var me = this
      me.changeAssessScore()
    },
    changeAssessScore () {
      var me = this
      var assessScore = 0
      if (me.form.time_score > 0) {
        assessScore = assessScore + parseFloat(me.form.time_score)
      }
      if (me.form.place_score > 0) {
        assessScore = assessScore + parseFloat(me.form.place_score)
      }
      if (me.form.recall_score > 0) {
        assessScore = assessScore + parseFloat(me.form.recall_score)
      }
      if (me.form.computing_score > 0) {
        assessScore = assessScore + parseFloat(me.form.computing_score)
      }
      if (me.form.recall_word_score > 0) {
        assessScore = assessScore + parseFloat(me.form.recall_word_score)
      }
      if (me.form.name_score > 0) {
        assessScore = assessScore + parseFloat(me.form.recall_word_score)
      }
      if (me.form.language_repeat_score > 0) {
        assessScore = assessScore + parseFloat(me.form.language_repeat_score)
      }
      if (me.form.comprehension_score > 0) {
        assessScore = assessScore + parseFloat(me.form.comprehension_score)
      }
      if (me.form.reading_score > 0) {
        assessScore = assessScore + parseFloat(me.form.reading_score)
      }
      if (me.form.writeing_score > 0) {
        assessScore = assessScore + parseFloat(me.form.writeing_score)
      }
      if (me.form.painting_score > 0) {
        assessScore = assessScore + parseFloat(me.form.painting_score)
      }
      me.form.assess_score = parseFloat(assessScore)
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
