export default {
  name: 'sickBloodFollowupForm',
  components: {
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        followup_no: null,
        org_id: null,
        team_id: null,
        archive_id: null,
        sick_id: null,
        followup_time: '',
        followup_status: null,
        followup_way: null,
        asymptomatic: 0,
        symptom_dizziness: 0,
        symptom_nausea_vomiting: 0,
        symptom_dazzle_tinnitus: 0,
        symptom_dyspnea: 0,
        symptom_palpitation: 0,
        symptom_binv_bleeding: 0,
        symptom_hand_foot_numbness: 0,
        symptom_joint_gall: 0,
        symptom_other: 0,
        symptom_other_content: '',
        diastolic: null,
        systolic: null,
        weight: null,
        weight_type: null,
        guide_weight: null,
        height: null,
        heart_rate: '',
        heart_rate_minute: '',
        somking: '',
        somking_exp: '',
        drink: '',
        drink_exp: '',
        times_week: null,
        mins_times: null,
        guide_times_week: null,
        guide_mins_times: null,
        psychology_state: null,
        drug_state: null,
        drug_use: null,
        compliance_state: null,
        followup_content: '',
        followup_cycle: null,
        followup_nexttime: '',
        cancel_time: '',
        cancel_reasion: null,
        recovery_guide: '',
        recovery_way: null,
        cure_way: null,
        drug_suggest: '',
        recovery_suggest: null,
        physic_name1: '',
        physic_name2: '',
        physic_name3: '',
        physic_name4: '',
        physic_name5: '',
        physic_name6: '',
        frequency1: '',
        frequency2: '',
        frequency3: '',
        frequency4: '',
        frequency5: '',
        frequency6: '',
        physic_unit1: '',
        physic_unit2: '',
        physic_unit3: '',
        physic_unit4: '',
        physic_unit5: '',
        physic_unit6: '',
        physic_dose1: '',
        physic_dose2: '',
        physic_dose3: '',
        physic_dose4: '',
        physic_dose5: '',
        physic_dose6: '',
        times_week_exp: null,
        mins_times_exp: null,
        salt_situation: null,
        guide_salt_situation: null,
        acrotarsium_artery: null,
        fasting_blood_glucose: '',
        hbalc: null,
        hbalc_date: '',
        remark2: '',
        hypoglycemia: null,
        adr: 0,
        adr_remark: '',
        followup_kind: null,
        transfer_reson: '',
        transfer_org_dept: '',
        symptom_polydipsia: null,
        symptom_polyphagia: null,
        symptom_polyuria: null,
        symptom_blurred_vision: null,
        symptom_infection: null,
        symptom_quadriplegia: null,
        symptom_weight_loss: null,
        check_fee_type: null,
        staple_food_weight: '',
        bmi: null,
        create_operator: null,
        create_time: '',
        modify_operator: null,
        modify_time: '',
        remark: '',
        qualified_flag: null,
        add_flag: 0,
        guide_bmi: null,
        guide_drink: '',
        examine_info: '',
        followup_doctor: null,
        syndrome: 0,
        untoward_effect: 0,
        audit_status: null,
        next_add_flag: 0,
        eating_habits: null,
        county: '',
        zone_code: '',
        zone_code_zx: '',
        zone_code_qx: '',
        org_id_upper: null,
        transfer_reson_drug: 0,
        transfer_reson_serious: 0,
        transfer_reson_blood: 0,
        ef_upload_flag: null,
        birthday: '',
        team_id_name: '',
        followup_doctor_name: '',
        create_operator_name: ''
      },
      defaultForm: {
        default_asymptomatic: 0,
        default_symptom_dizziness: 0,
        default_symptom_nausea_vomiting: 0,
        default_symptom_dazzle_tinnitus: 0,
        default_symptom_dyspnea: 0,
        default_symptom_palpitation: 0,
        default_symptom_binv_bleeding: 0,
        default_symptom_hand_foot_numbness: 0,
        default_symptom_joint_gall: 0,
        default_symptom_other: 0,
        default_adr: 0,
        default_add_flag: 0,
        default_syndrome: 0,
        default_untoward_effect: 0,
        default_next_add_flag: 0,
        default_transfer_reson_drug: 0,
        default_transfer_reson_serious: 0,
        default_transfer_reson_blood: 0
      },
      rules: {
        followup_time: [
          { required: true, message: '请输入随访日期', trigger: 'blur' }
        ],
        symptom_other_content: [
          { max: 250, message: '长度小于等于250个字符', trigger: 'blur' }
        ],
        diastolic: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 30, max: 150 }
        ],
        systolic: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 70, max: 300 }
        ],
        weight: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 10, max: 150 }
        ],
        guide_weight: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 10, max: 150 }
        ],
        height: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 40, max: 250 }
        ],
        heart_rate: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 40, max: 180 }
        ],
        somking: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        somking_exp: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        drink: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        drink_exp: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        times_week: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        mins_times: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        guide_times_week: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        guide_mins_times: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        followup_content: [
          { max: 500, message: '长度小于等于500个字符', trigger: 'blur' }
        ],
        followup_nexttime: [
          { required: true, message: '请输入下一次随访时间', trigger: 'blur' }
        ],
        recovery_guide: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
        ],
        physic_name1: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_name2: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_name3: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_name4: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_name5: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_name6: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        frequency1: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        frequency2: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        frequency3: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        frequency4: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        frequency5: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        frequency6: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_unit1: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_unit2: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_unit3: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_unit4: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_unit5: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_unit6: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physic_dose1: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        physic_dose2: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        physic_dose3: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        physic_dose4: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        physic_dose5: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        physic_dose6: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        times_week_exp: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        mins_times_exp: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        transfer_reson: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        transfer_org_dept: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        bmi: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        remark: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
        ],
        guide_bmi: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        followup_doctor: [
          { required: true, message: '请输入随访医生', trigger: 'blur' }
        ],
        team_id_name: [
          { required: true, message: '请输入全科团队名称', trigger: 'blur' }
        ]
      },
      disabledFlag: {
        disabled_symptom_dizziness: true,
        disabled_symptom_nausea_vomiting: true,
        disabled_symptom_dazzle_tinnitus: true,
        disabled_symptom_dyspnea: true,
        disabled_symptom_palpitation: true,
        disabled_symptom_binv_bleeding: true,
        disabled_symptom_hand_foot_numbness: true,
        disabled_symptom_joint_gall: true,
        disabled_symptom_other: true,
        disabled_symptom_other_content: true
      },
      readonlyFlag: {
        readonly_team_id_name: true,
        readonly_followup_doctor_name: true,
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
    panelCode: String,
    formSaveCallback: Function
  },
  methods: {
    init (parm) {
      var me = this
      if (parm != null && parm.record != null && parm.record.followup_no != null) {
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
      if (result.columnName === 'physic_name1') {
        this.form.physic_name1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_name2') {
        this.form.physic_name2 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_name3') {
        this.form.physic_name3 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_name4') {
        this.form.physic_name4 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_name5') {
        this.form.physic_name5 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_name6') {
        this.form.physic_name6 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_unit1') {
        this.form.physic_unit1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_unit2') {
        this.form.physic_unit2 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_unit3') {
        this.form.physic_unit3 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_unit4') {
        this.form.physic_unit4 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_unit5') {
        this.form.physic_unit5 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'physic_unit6') {
        this.form.physic_unit6 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'team_id_name') {
        this.form.team_id_name = result.label
        this.form.teamId = result.value
        this.$forceUpdate()
      }
      if (result.columnName === 'followup_doctor_name') {
        this.form.followup_doctor_name = result.label
        this.form.followupDoctor = result.value
        this.$forceUpdate()
      }
      if (result.columnName === 'create_operator_name') {
        this.form.create_operator_name = result.label
        this.form.createOperator = result.value
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
      var me = this
      var userInfo = me.Util.getUserInfo()
      me.form.org_id = userInfo.orgId
      me.form.team_id = userInfo.teamId
      me.form.team_id_name = userInfo.teamName
      me.form.create_operator = userInfo.staffCode
      me.form.create_operator_name = userInfo.staffName
      me.form.followup_doctor = userInfo.staffCode
      me.form.followup_doctor_name = userInfo.staffName
    },
    recordAdd (parm) {
      var me = this
      me.resetForm('elForm')
      me.form.archive_id = parm.archive_id
      me.formInit()
    },
    recordEdit (parm) {
      var me = this
      me.resetForm('elForm')
      me.fromDataLoading = true
      me.axiosPost(
        '/PHSickBloodFollowup/getForm',
        parm
      ).then(function (response) {
        if (response.data.statusCode === 8200) {
          var rpdata = response.data.data
          var rpFormData = JSON.parse(rpdata)
          me.form = rpFormData[0]
          // me.initFormControls()
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
        '/PHSickBloodFollowup/deleteRecord',
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
        '/PHSickBloodFollowup/saveRecord',
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
          if (me.form.followup_no == null || me.form.followup_no === '') {
            me.form.followup_no = response.data.data.text
          }
          if (me.formSaveCallback) {
            me.formSaveCallback('SickBloodFollowup', me.form)
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
      var url = '/PHBaseDict/getDictByType?dictType=0'
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
          'ud_select_followup_way',
          'ud_select_weight_type',
          'ud_select_psychology_state',
          'ud_select_drug_state',
          'ud_select_compliance_state',
          'ud_select_salt_situation',
          'ud_select_guide_salt_situation',
          'ud_select_followup_kind'
        ]
        for (var com of refComs) {
          me.$refs[com].$emit(eventName, rpdata)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    changeAsymptomatic () {
      var me = this
      if (me.form.asymptomatic === 1) {
        me.disabledFlag.disabled_symptom_dizziness = false
        me.disabledFlag.disabled_symptom_nausea_vomiting = false
        me.disabledFlag.disabled_symptom_dazzle_tinnitus = false
        me.disabledFlag.disabled_symptom_dyspnea = false
        me.disabledFlag.disabled_symptom_palpitation = false
        me.disabledFlag.disabled_symptom_binv_bleeding = false
        me.disabledFlag.disabled_symptom_hand_foot_numbness = false
        me.disabledFlag.disabled_symptom_joint_gall = false
        me.disabledFlag.disabled_symptom_other = false
        // me.disabledFlag.disabled_symptom_other_content = false
      } if (me.form.asymptomatic === 0) {
        me.form.symptom_dizziness = ''
        me.disabledFlag.disabled_symptom_dizziness = true
        me.form.symptom_nausea_vomiting = ''
        me.disabledFlag.disabled_symptom_nausea_vomiting = true
        me.form.symptom_dazzle_tinnitus = ''
        me.disabledFlag.disabled_symptom_dazzle_tinnitus = true
        me.form.symptom_dyspnea = ''
        me.disabledFlag.disabled_symptom_dyspnea = true
        me.form.symptom_palpitation = ''
        me.disabledFlag.disabled_symptom_palpitation = true
        me.form.symptom_binv_bleeding = ''
        me.disabledFlag.disabled_symptom_binv_bleeding = true
        me.form.symptom_hand_foot_numbness = ''
        me.disabledFlag.disabled_symptom_hand_foot_numbness = true
        me.form.symptom_joint_gall = ''
        me.disabledFlag.disabled_symptom_joint_gall = true
        me.form.symptom_other = ''
        me.disabledFlag.disabled_symptom_other = true
        me.form.symptom_other_content = ''
        me.disabledFlag.disabled_symptom_other_content = true
      }
    },
    changeSymptomOther () {
      var me = this
      if (me.form.symptom_other === 1) {
        me.disabledFlag.disabled_symptom_other_content = false
      } if (me.form.symptom_other === 0) {
        me.form.symptom_other_content = ''
        me.disabledFlag.disabled_symptom_other_content = true
      }
    },
    changeAdr () {
      var me = this
      if (me.form.adr === 0) {
        me.disabledFlag.disabled_adr_remark = false
      } if (me.form.adr === 1) {
        me.form.adr_remark = ''
        me.disabledFlag.disabled_adr_remark = true
      }
    }
  },
  mounted () {
    var me = this
    me.$on('open', function (parm) {
      me.init(parm)
      me.setBaseDictByType()
    })
    me.$on('recordSubmit', function () {
      me.recordSubmit()
    })
  }
}
