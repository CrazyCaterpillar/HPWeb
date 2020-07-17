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
          { validator: this.validatorTime_year, trigger: 'blur', decimal: 0 }
        ],
        time_month: [
          { validator: this.validatorTime_month, trigger: 'blur', decimal: 0, min: 1, max: 12 }
        ],
        time_date: [
          { validator: this.validatorTime_date, trigger: 'blur', decimal: 0, min: 1, max: 31 }
        ],
        time_week: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        time_score: [
          { validator: this.validatorTime_score, trigger: 'blur', decimal: 0, min: 0, max: 5 }
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
          { validator: this.validatorPlace_score, trigger: 'blur', decimal: 0, min: 0, max: 5 }
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
          { validator: this.validatorRecall_word_score, trigger: 'blur', decimal: 0, min: 0, max: 3 }
        ],
        name_1: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        name_2: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        name_score: [
          { validator: this.validatorName_score, trigger: 'blur', decimal: 0, min: 0, max: 2 }
        ],
        language_repeat: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        language_repeat_score: [
          { validator: this.validatorLanguage_repeat_score, trigger: 'blur', decimal: 0, min: 0, max: 1 }
        ],
        comprehension_score: [
          { validator: this.validatorComprehension_score, trigger: 'blur', decimal: 0, min: 0, max: 3 }
        ],
        reading_score: [
          { validator: this.validatorReading_score, trigger: 'blur', decimal: 0, min: 0, max: 1 }
        ],
        writeing_score: [
          { validator: this.validatorWriteing_score, trigger: 'blur', decimal: 0, min: 0, max: 1 }
        ],
        painting_score: [
          { validator: this.validatorPainting_score, trigger: 'blur', decimal: 0, min: 0, max: 1 }
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
          { validator: this.validatorRecall_score, trigger: 'blur', decimal: 0, min: 0, max: 3 }
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
          { validator: this.validatorComputing_score, trigger: 'blur', decimal: 0, min: 0, max: 5 }
        ],
        assess_score: [
          { validator: this.validatorAssess_score, trigger: 'blur', decimal: 0 }
        ],
        writeing: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        painting: [
          { max: 300, message: '长度小于等于300个字符', trigger: 'blur' }
        ]
      },
      disabledFlag: {
      },
      readonlyFlag: {
        readonly_create_operator_name: true,
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
      if (parm != null && parm.record != null && parm.record.reportNo != null) {
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
      if (result.columnName === 'create_operator_name') {
        this.form.create_operator_name = result.label
        this.form.createOperator = result.value
        this.$forceUpdate()
      }
    },
    validatorTime_year (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorTime_month (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorTime_date (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorTime_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorPlace_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorRecall_word_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorName_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorLanguage_repeat_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorComprehension_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorReading_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWriteing_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorPainting_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorRecall_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorComputing_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorAssess_score (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
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
        '/ElderlyMentalState/getForm',
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
        '/ElderlyMentalState/deleteRecord',
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
        '/ElderlyMentalState/saveRecord',
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
          if (me.form.reportNo == null || me.form.reportNo === '') {
            me.form.reportNo = response.data.data.text
          }
          if (me.formSaveCallback) {
            me.formSaveCallback('ElderlyMentalState', me.form)
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