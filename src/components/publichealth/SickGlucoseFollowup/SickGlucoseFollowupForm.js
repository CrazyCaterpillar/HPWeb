export default {
  name: 'sickGlucoseFollowupForm',
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
        symptom_polydipsia: 0,
        symptom_polyphagia: 0,
        symptom_polyuria: 0,
        symptom_blurred_vision: 0,
        symptom_infection: 0,
        symptom_quadriplegia: 0,
        symptom_dizziness: null,
        symptom_nausea_vomiting: null,
        symptom_dazzle_tinnitus: null,
        symptom_dyspnea: null,
        symptom_palpitation: null,
        symptom_binv_bleeding: null,
        symptom_hand_foot_numbness: null,
        symptom_joint_gall: 0,
        symptom_weight_loss: 0,
        symptom_other: 0,
        symptom_other_content: '',
        diastolic: null,
        systolic: null,
        weight: null,
        guide_weight: null,
        weight_type: null,
        bmi: null,
        guide_bmi: null,
        height: null,
        acrotarsium_artery: null,
        foot_pulse: null,
        foot_pulsex: null,
        foot_pulsexs: null,
        foot_pulse_contain: '',
        heart_rate_minute: '',
        somking: '',
        somking_exp: '',
        drink: '',
        drink_exp: '',
        times_week: null,
        mins_times: null,
        guide_times_week: null,
        guide_mins_times: null,
        times_week_exp: null,
        mins_times_exp: null,
        staple: '',
        guide_staple: '',
        psychology_state: null,
        compliance_state: null,
        fasting_blood_glucose: null,
        blood_sugar_time: null,
        blood_sugar_time_contain: '',
        hbalc: null,
        hbalc1: null,
        hbalc_date: '',
        other_examine: '',
        drug_use: null,
        drug_state: null,
        adr: 0,
        adr_remark: '',
        hypoglycemia: null,
        followup_kind: null,
        untoward_effect: 0,
        syndrome: 0,
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
        physic_dose1: '',
        physic_dose2: '',
        physic_dose3: '',
        physic_dose4: '',
        physic_dose5: '',
        physic_dose6: '',
        physic_unit1: '',
        physic_unit2: '',
        physic_unit3: '',
        physic_unit4: '',
        physic_unit5: '',
        physic_unit6: '',
        insulin_kind: '',
        insulin_usage: '',
        transfer_reson_drug: 0,
        transfer_reson_serious: 0,
        transfer_reson_glucose: 0,
        transfer_reson: '',
        transfer_org_dept: '',
        followup_nexttime: '',
        add_flag: 0,
        next_add_flag: 0,
        followup_content: '',
        followup_cycle: null,
        cancel_time: '',
        cancel_reasion: null,
        recovery_guide: '',
        recovery_way: null,
        cure_way: null,
        drug_suggest: '',
        recovery_suggest: null,
        remark2: '',
        heart_rate: '',
        check_fee_type: null,
        eating_habits: null,
        salt_situation: null,
        staple_food_weight: '',
        followup_doctor: null,
        create_operator: null,
        create_time: '',
        modify_operator: null,
        modify_time: '',
        remark: '',
        qualified_flag: null,
        audit_status: null,
        strength_type: null,
        strength_type_light: null,
        county: '',
        zone_code: '',
        zone_code_zx: '',
        zone_code_qx: '',
        org_id_upper: null,
        ef_upload_flag: null,
        birthday: '',
        followup_doctor_name: '',
        create_operator_name: '',
        team_id_name: ''
      },
      defaultForm: {
        default_asymptomatic: 0,
        default_symptom_polydipsia: 0,
        default_symptom_polyphagia: 0,
        default_symptom_polyuria: 0,
        default_symptom_blurred_vision: 0,
        default_symptom_infection: 0,
        default_symptom_quadriplegia: 0,
        default_symptom_joint_gall: 0,
        default_symptom_weight_loss: 0,
        default_symptom_other: 0,
        default_adr: 0,
        default_untoward_effect: 0,
        default_syndrome: 0,
        default_transfer_reson_drug: 0,
        default_transfer_reson_serious: 0,
        default_transfer_reson_glucose: 0,
        default_add_flag: 0,
        default_next_add_flag: 0
      },
      rules: {
        followup_time: [
          { required: true, message: '请输入随访时间', trigger: 'blur' }
        ],
        diastolic: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        systolic: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        weight: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        guide_weight: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        bmi: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        guide_bmi: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        height: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
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
        staple: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        guide_staple: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        fasting_blood_glucose: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        blood_sugar_time_contain: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        hbalc1: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
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
        physic_dose1: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        physic_dose2: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        physic_dose3: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        physic_dose4: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        physic_dose5: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        physic_dose6: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
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
        followup_nexttime: [
          { required: true, message: '请输入下一次随访时间', trigger: 'blur' }
        ],
        followup_content: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        followup_doctor: [
          { required: true, message: '请输入随访医生', trigger: 'blur' }
        ],
        remark: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
        ],
        team_id_name: [
          { required: true, message: '请输入全科团队名称', trigger: 'blur' }
        ]
      },
      disabledFlag: {
      },
      readonlyFlag: {
        readonly_create_operator_name: true,
        readonly_team_id_name: true
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
      if (result.columnName === 'team_id_name') {
        this.form.team_id_name = result.label
        this.form.teamId = result.value
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
      me.formDataLoading = true
      me.axiosPost(
        '/PHSickGlucoseFollowup/getForm',
        parm
      ).then(function (response) {
        if (response.data.statusCode === 8200) {
          var rpdata = response.data.data
          var rpFormData = JSON.parse(rpdata)
          me.form = rpFormData[0]
          me.formDataLoading = false
        }
        if (response.data.statusCode === 8501) {
          me.$message({
            message: response.data.statusMess,
            type: 'error'
          })
        }
      }).catch(function (error) {
        me.formDataLoading = false
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
        '/PHSickGlucoseFollowup/deleteRecord',
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
      me.formDataLoading = true
      me.axiosPost(
        '/PHSickGlucoseFollowup/saveRecord',
        me.form
      ).then(function (response) {
        me.formDataLoading = false
        if (response.data.statusCode === 8501) {
          me.$message({
            message: response.data.message,
            type: 'error'
          })
        }
        if (response.data.statusCode === 8200) {
          if (me.form.followup_no == null || me.form.followup_no === '') {
            var rpdata = response.data.data
            var rpFormData = JSON.parse(rpdata)
            me.form.followup_no = rpFormData[0].followup_no
            me.form.add_flag = rpFormData[0].add_flag
            me.form.followup_status = rpFormData[0].followup_status
            me.form.height = rpFormData[0].height
            me.form.followup_kind_flag = rpFormData[0].followup_kind_flag
            me.form.followup_time_flag = rpFormData[0].followup_time_flag
            me.form.transfer_org_flag = rpFormData[0].transfer_org_flag
            me.form.followup_nexttime = rpFormData[0].followup_nexttime
            me.form.sick_id = rpFormData[0].sick_id
            me.form.zone_code = rpFormData[0].zone_code
            me.form.org_id_upper = rpFormData[0].org_id_upper
            me.form.zone_code_zx = rpFormData[0].zone_code_zx
            me.form.zone_code_qx = rpFormData[0].zone_code_qx
          }
          if (me.formSaveCallback) {
            me.formSaveCallback('SickGlucoseFollowup', me.form)
          }
          me.formDataLoading = false
          me.$message({
            message: '数据保存成功！！！',
            type: 'success'
          })
        }
      }).catch(function (error) {
        me.formDataLoading = false
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
      var url = 'PHBaseDict/getDictByType?dictType=sickGlucoseFollowupForm'
      var parmString = url.split('?', 2)
      var parmUrl = parmString[0]
      var condition = {condition: parmString[1]}
      me.axiosPost(
        parmUrl,
        condition
      ).then(function (response) {
        var rpdata = response.data.rows
        if (rpdata.length > 0) {
          var eventName = 'setItemData'
          var refComs = [
            'ud_select_followup_way',
            'ud_select_weight_type',
            'ud_select_foot_pulse',
            'ud_select_foot_pulsex',
            'ud_select_foot_pulsexs',
            'ud_select_psychology_state',
            'ud_select_compliance_state',
            'ud_select_blood_sugar_time',
            'ud_select_drug_state',
            'ud_select_adr',
            'ud_select_hypoglycemia',
            'ud_select_followup_kind'
          ]
          for (var com of refComs) {
            if (me.$refs[com] !== undefined) {
              me.$refs[com].$emit(eventName, rpdata)
            }
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
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
    if (me.openParm !== null && me.openParm !== undefined) {
      me.init(me.openParm)
    }
  }
}
