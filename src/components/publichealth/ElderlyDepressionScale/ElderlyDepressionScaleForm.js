export default {
  name: 'elderlyDepressionScaleForm',
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
        sick_id: null,
        life_satisfied: null,
        lost_interest: null,
        emptiness: null,
        boring: null,
        hope: null,
        trouble_think: null,
        energy: null,
        fear_future: null,
        happy: null,
        helpless: null,
        restlessness: null,
        indoor: null,
        worry_future: null,
        remember_problem: null,
        life_wonderful: null,
        life_no_meaning: null,
        worry_past: null,
        life_excited: null,
        study_hard: null,
        vigorous: null,
        hopeless: null,
        feel_other_better: null,
        mess_thing: null,
        cry: null,
        inattention: null,
        no_social_activity: null,
        eassy_decide: null,
        sane: null,
        like_getup: null,
        assess_score: null,
        assess_result: '',
        assess_operator: null,
        assess_time: '',
        create_operator: null,
        create_time: '',
        modify_operator: null,
        modify_time: '',
        remark: '',
        sick_name: '',
        sick_sex: null,
        birthday: '',
        listless: null
      },
      defaultForm: {
      },
      rules: {
      },
      disabledFlag: {
      },
      readonlyFlag: {
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
        '/PHHygieneSickMedical/getDepressionForm',
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
        '/PHHygieneSickMedical/saveDepressionRecord',
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
      var url = '/PHBaseDict/getDictByType?dictType=ElderlyDepressionScaleForm'
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
    changeLifeSatisfied () {
      var me = this
      me.changeAssessScore()
    },
    changeLostInterest () {
      var me = this
      me.changeAssessScore()
    },
    changeEmptiness () {
      var me = this
      me.changeAssessScore()
    },
    changeBoring () {
      var me = this
      me.changeAssessScore()
    },
    changeHope () {
      var me = this
      me.changeAssessScore()
    },
    changeTroubleThink () {
      var me = this
      me.changeAssessScore()
    },
    changeEnergy () {
      var me = this
      me.changeAssessScore()
    },
    changeFearFuture () {
      var me = this
      me.changeAssessScore()
    },
    changeHappy () {
      var me = this
      me.changeAssessScore()
    },
    changeHelpless () {
      var me = this
      me.changeAssessScore()
    },
    changeRestlessness () {
      var me = this
      me.changeAssessScore()
    },
    changeIndoor () {
      var me = this
      me.changeAssessScore()
    },
    changeWorryFuture () {
      var me = this
      me.changeAssessScore()
    },
    changeRememberProblem () {
      var me = this
      me.changeAssessScore()
    },
    changeLifeWonderful () {
      var me = this
      me.changeAssessScore()
    },
    changeLifeNoMeaning () {
      var me = this
      me.changeAssessScore()
    },
    changeWorryPast () {
      var me = this
      me.changeAssessScore()
    },
    changeLifeExcited () {
      var me = this
      me.changeAssessScore()
    },
    changeStudyHard () {
      var me = this
      me.changeAssessScore()
    },
    changeVigorous () {
      var me = this
      me.changeAssessScore()
    },
    changeHopeless () {
      var me = this
      me.changeAssessScore()
    },
    changeFeelOtherBetter () {
      var me = this
      me.changeAssessScore()
    },
    changeMessThing () {
      var me = this
      me.changeAssessScore()
    },
    changeCry () {
      var me = this
      me.changeAssessScore()
    },
    changeInattention () {
      var me = this
      me.changeAssessScore()
    },
    changeNoSocialActivity () {
      var me = this
      me.changeAssessScore()
    },
    changeEassyDecide () {
      var me = this
      me.changeAssessScore()
    },
    changeSane () {
      var me = this
      me.changeAssessScore()
    },
    changeLikeGetup () {
      var me = this
      me.changeAssessScore()
    },
    changeListless () {
      var me = this
      me.changeAssessScore()
    },
    changeAssessScore () {
      var me = this
      var assessScore = 0
      if (me.form.life_satisfied === 0) {
        assessScore = assessScore + parseFloat(me.form.life_satisfied)
      }
      if (me.form.lost_interest === 1) {
        assessScore = assessScore + parseFloat(me.form.lost_interest)
      }
      if (me.form.emptiness === 1) {
        assessScore = assessScore + parseFloat(me.form.emptiness)
      }
      if (me.form.boring === 1) {
        assessScore = assessScore + parseFloat(me.form.boring)
      }
      if (me.form.hope === 0) {
        assessScore = assessScore + parseFloat(me.form.hope)
      }
      if (me.form.trouble_think === 1) {
        assessScore = assessScore + parseFloat(me.form.trouble_think)
      }
      if (me.form.energy === 0) {
        assessScore = assessScore + parseFloat(me.form.energy)
      }
      if (me.form.fear_future === 1) {
        assessScore = assessScore + parseFloat(me.form.fear_future)
      }
      if (me.form.happy === 0) {
        assessScore = assessScore + parseFloat(me.form.happy)
      }
      if (me.form.helpless === 1) {
        assessScore = assessScore + parseFloat(me.form.helpless)
      }
      if (me.form.restlessness === 1) {
        assessScore = assessScore + parseFloat(me.form.restlessness)
      }
      if (me.form.indoor === 1) {
        assessScore = assessScore + parseFloat(me.form.indoor)
      }
      if (me.form.worry_future === 1) {
        assessScore = assessScore + parseFloat(me.form.worry_future)
      }
      if (me.form.remember_problem === 1) {
        assessScore = assessScore + parseFloat(me.form.remember_problem)
      }
      if (me.form.life_wonderful === 0) {
        assessScore = assessScore + parseFloat(me.form.life_wonderful)
      }
      if (me.form.listless === 1) {
        assessScore = assessScore + parseFloat(me.form.listless)
      }
      if (me.form.life_no_meaning === 1) {
        assessScore = assessScore + parseFloat(me.form.life_no_meaning)
      }
      if (me.form.worry_past === 1) {
        assessScore = assessScore + parseFloat(me.form.worry_past)
      }
      if (me.form.life_excited === 0) {
        assessScore = assessScore + parseFloat(me.form.life_excited)
      }
      if (me.form.study_hard === 1) {
        assessScore = assessScore + parseFloat(me.form.study_hard)
      }
      if (me.form.vigorous === 0) {
        assessScore = assessScore + parseFloat(me.form.vigorous)
      }
      if (me.form.hopeless === 1) {
        assessScore = assessScore + parseFloat(me.form.hopeless)
      }
      if (me.form.feel_other_better === 1) {
        assessScore = assessScore + parseFloat(me.form.feel_other_better)
      }
      if (me.form.mess_thing === 1) {
        assessScore = assessScore + parseFloat(me.form.mess_thing)
      }
      if (me.form.cry === 1) {
        assessScore = assessScore + parseFloat(me.form.cry)
      }
      if (me.form.inattention === 1) {
        assessScore = assessScore + parseFloat(me.form.inattention)
      }
      if (me.form.like_getup === 0) {
        assessScore = assessScore + parseFloat(me.form.like_getup)
      }
      if (me.form.no_social_activity === 1) {
        assessScore = assessScore + parseFloat(me.form.no_social_activity)
      }
      if (me.form.eassy_decide === 0) {
        assessScore = assessScore + parseFloat(me.form.eassy_decide)
      }
      if (me.form.sane === 0) {
        assessScore = assessScore + parseFloat(me.form.sane)
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
