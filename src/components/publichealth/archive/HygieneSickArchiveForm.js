export default {
  name: 'hygieneSickArchiveForm',
  components: {
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        archive_id: null,
        org_id: null,
        org_id_upper: null,
        sick_id: null,
        archive_code: '',
        custom_code: '',
        zone_code: '',
        sick_name: '',
        sick_sex: null,
        birthday: '',
        identity_card_no: '',
        insur_card_no: '',
        sick_work_company: '',
        sick_phone: '',
        linkman_name: '',
        linkman_phone: '',
        residence: null,
        sick_address: '',
        household_address: '',
        nation: null,
        nationname: '',
        origo: '',
        blood: null,
        blood_rh: null,
        blood_personal: null,
        education: null,
        occupation: null,
        marriage: null,
        medical_expenses: null,
        medical_expenses_1: 0,
        medical_expenses_2: 0,
        medical_expenses_3: 0,
        medical_expenses_4: 0,
        medical_expenses_5: 0,
        medical_expenses_6: 0,
        medical_expenses_7: 0,
        medical_expenses_99: 0,
        medical_expenses_content: '',
        manage_org: null,
        manage_team: null,
        manage_operator: null,
        manage_zone_zx: '',
        manage_zone_qx: '',
        manage_org_upper: null,
        team_id: null,
        team_complete: null,
        respon_complete: null,
        responsible_doctor: null,
        respon_doctor: '',
        responsibledoctorname: '',
        zone_code_zx: '',
        zone_code_qx: '',
        problem_blood_flag: null,
        blood_happen_time: '',
        blood_archive_time: '',
        problem_glucose_flag: null,
        glucose_happen_time: '',
        glucose_archive_time: '',
        problem_stoke_flag: null,
        stoke_happen_time: '',
        stoke_archive_time: '',
        problem_mental_flag: null,
        mental_happen_time: '',
        mental_archive_time: '',
        household_archive_id: null,
        household_sick_name: '',
        archive_time: '',
        org_complete: null,
        org_relegation: null,
        archive_status: 1,
        archive_uploaded_flag: null,
        archive_operator: null,
        archiving_way: null,
        is_signpro: null,
        sign_start_time: '',
        sign_end_time: '',
        sick_status: 1,
        death_time: '',
        migrate_flag: null,
        audit_status: null,
        qualified_flag: null,
        sealup_flag: null,
        create_time: '',
        create_operator: null,
        modify_time: '',
        modify_operator: null,
        community_id: null,
        allergic_without: 1,
        allergic_penicillin: 0,
        allergic_sulfanilamide: 0,
        allergic_streptomycin: 0,
        allergic_other: 0,
        allergic_other_content: '',
        exposure_history: 1,
        exp_history_chemistry: 0,
        exp_history_toxicology: 0,
        exp_history_ray: 0,
        past_none: 1,
        past_hypertension: 0,
        past_hypertension_date: '',
        past_diabetes: 0,
        past_diabetes_date: '',
        past_coronary: 0,
        past_coronary_date: '',
        past_schizophrenia: 0,
        past_schizophrenia_date: '',
        past_malignant: 0,
        past_malignant_date: '',
        past_apoplexy: 0,
        past_apoplexy_date: '',
        past_copd: 0,
        past_copd_date: '',
        past_tb: 0,
        past_tb_date: '',
        past_hepatitis: 0,
        past_hepatitis_date: '',
        past_oficiala: 0,
        past_oficiala_date: '',
        occupational_disease: null,
        occupational_disease_date: '',
        past_other: null,
        past_other_content: '',
        past_other_content_date: '',
        past_malignant_con: '',
        past_oficiala_con: '',
        surgery: 0,
        surgery_name1: '',
        surgery_name1_date: '',
        surgery_name2: '',
        surgery_name2_date: '',
        trauma: 0,
        trauma_name1: '',
        trauma_name1_date: '',
        trauma_name2: '',
        trauma_name2_date: '',
        transfusion: 0,
        transfusion_name1: '',
        transfusion_name1_date: '',
        transfusion_name2: '',
        transfusion_name2_date: '',
        father_none: 1,
        father_hypertension: 0,
        father_diabetes: 0,
        father_coronary: 0,
        father_allergy: 0,
        father_malignant: 0,
        father_schizophrenia: 0,
        father_stroke: 0,
        father_tb: 0,
        father_hepatitis: 0,
        father_congenital: 0,
        father_other: 0,
        father_other_content: '',
        mother_none: 1,
        mother_hypertension: 0,
        mother_diabetes: 0,
        mother_coronary: 0,
        mother_allergy: 0,
        mother_malignant: 0,
        mother_schizophrenia: 0,
        mother_stroke: 0,
        mother_tb: 0,
        mother_hepatitis: 0,
        mother_congenital: 0,
        mother_other: 0,
        mothe_other_content: '',
        brothers_none: 1,
        brothers_hypertension: 0,
        brothers_diabetes: 0,
        brothers_coronary: 0,
        brothers_allergy: 0,
        brothers_malignant: 0,
        brothers_schizophrenia: 0,
        brothers_stroke: 0,
        brothers_tb: 0,
        brothers_hepatitis: 0,
        brothers_congenital: 0,
        brothers_other: 0,
        brothers_other_content: '',
        children_none: 1,
        children_hypertension: 0,
        children_diabetes: 0,
        children_coronary: 0,
        children_allergy: 0,
        children_malignant: 0,
        children_schizophrenia: 0,
        children_stroke: 0,
        children_tb: 0,
        children_hepatitis: 0,
        children_congenital: 0,
        children_other: 0,
        children_other_content: '',
        genetic: 0,
        genetic_diseasename: '',
        disability_without: 1,
        disability_eyes: 0,
        disability_ear: 0,
        disability_speech: 0,
        disability_limb: 0,
        disability_intellectual: 0,
        disability_spirit: 0,
        disability_no: '',
        disability_other: 0,
        disability_other_con: '',
        menstruation: '',
        pregnancy: null,
        fertility: null,
        abortion: null,
        menstruation_start: null,
        menstruation_end: null,
        menstruation_cycle: null,
        men_duration_low: null,
        men_duration_height: null,
        exhaust_type: null,
        fuel_type: null,
        drinking_water: null,
        toilet_health: null,
        animal_pound: null,
        org_id_name: '',
        manage_org_name: '',
        manage_team_name: '',
        manage_operator_name: '',
        team_id_name: '',
        team_complete_name: '',
        org_relegation_name: '',
        archive_operator_name: '',
        zonename: ''
      },
      defaultForm: {
        default_medical_expenses_1: 0,
        default_medical_expenses_2: 0,
        default_medical_expenses_3: 0,
        default_medical_expenses_4: 0,
        default_medical_expenses_5: 0,
        default_medical_expenses_6: 0,
        default_medical_expenses_7: 0,
        default_medical_expenses_99: 0,
        default_archive_status: 1,
        default_sick_status: 1,
        default_allergic_without: 1,
        default_allergic_penicillin: 0,
        default_allergic_sulfanilamide: 0,
        default_allergic_streptomycin: 0,
        default_allergic_other: 0,
        default_exposure_history: 1,
        default_exp_history_chemistry: 0,
        default_exp_history_toxicology: 0,
        default_exp_history_ray: 0,
        default_past_none: 1,
        default_past_hypertension: 0,
        default_past_diabetes: 0,
        default_past_coronary: 0,
        default_past_schizophrenia: 0,
        default_past_malignant: 0,
        default_past_apoplexy: 0,
        default_past_copd: 0,
        default_past_tb: 0,
        default_past_hepatitis: 0,
        default_past_oficiala: 0,
        default_surgery: 0,
        default_trauma: 0,
        default_transfusion: 0,
        default_father_none: 1,
        default_father_hypertension: 0,
        default_father_diabetes: 0,
        default_father_coronary: 0,
        default_father_allergy: 0,
        default_father_malignant: 0,
        default_father_schizophrenia: 0,
        default_father_stroke: 0,
        default_father_tb: 0,
        default_father_hepatitis: 0,
        default_father_congenital: 0,
        default_father_other: 0,
        default_mother_none: 1,
        default_mother_hypertension: 0,
        default_mother_diabetes: 0,
        default_mother_coronary: 0,
        default_mother_allergy: 0,
        default_mother_malignant: 0,
        default_mother_schizophrenia: 0,
        default_mother_stroke: 0,
        default_mother_tb: 0,
        default_mother_hepatitis: 0,
        default_mother_congenital: 0,
        default_mother_other: 0,
        default_brothers_none: 1,
        default_brothers_hypertension: 0,
        default_brothers_diabetes: 0,
        default_brothers_coronary: 0,
        default_brothers_allergy: 0,
        default_brothers_malignant: 0,
        default_brothers_schizophrenia: 0,
        default_brothers_stroke: 0,
        default_brothers_tb: 0,
        default_brothers_hepatitis: 0,
        default_brothers_congenital: 0,
        default_brothers_other: 0,
        default_children_none: 1,
        default_children_hypertension: 0,
        default_children_diabetes: 0,
        default_children_coronary: 0,
        default_children_allergy: 0,
        default_children_malignant: 0,
        default_children_schizophrenia: 0,
        default_children_stroke: 0,
        default_children_tb: 0,
        default_children_hepatitis: 0,
        default_children_congenital: 0,
        default_children_other: 0,
        default_genetic: 0,
        default_disability_without: 1,
        default_disability_eyes: 0,
        default_disability_ear: 0,
        default_disability_speech: 0,
        default_disability_limb: 0,
        default_disability_intellectual: 0,
        default_disability_spirit: 0,
        default_disability_other: 0
      },
      rules: {
        sick_name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        sick_sex: [
          { required: true, message: '请输入性别', trigger: 'blur' }
        ],
        birthday: [
          { required: true, message: '请输入出生日期', trigger: 'blur' }
        ],
        identity_card_no: [
          { required: true, message: '请输入身份证号码', trigger: 'blur' }
        ],
        sick_phone: [
          { required: true, message: '请输入本人电话', trigger: 'blur' }
        ],
        sick_address: [
          { required: true, message: '请输入现住址', trigger: 'blur' }
        ],
        manage_org: [
          { required: true, message: '请输入当前管理机构', trigger: 'blur' }
        ],
        manage_team: [
          { required: true, message: '请输入当前管理团队', trigger: 'blur' }
        ],
        manage_operator: [
          { required: true, message: '请输入当前管理医师', trigger: 'blur' }
        ],
        archive_time: [
          { required: true, message: '请输入建档时间', trigger: 'blur' }
        ],
        org_relegation: [
          { required: true, message: '请输入建档机构', trigger: 'blur' }
        ],
        archive_status: [
          { required: true, message: '请输入建档状态', trigger: 'blur' }
        ],
        sick_status: [
          { required: true, message: '请输入人员状态', trigger: 'blur' }
        ],
        org_id_name: [
          { required: true, message: '请输入所在机构名称', trigger: 'blur' }
        ],
        manage_org_name: [
          { required: true, message: '请输入当前管理机构名称', trigger: 'blur' }
        ],
        manage_team_name: [
          { required: true, message: '请输入当前管理团队名称', trigger: 'blur' }
        ],
        manage_operator_name: [
          { required: true, message: '请输入当前管理医师姓名', trigger: 'blur' }
        ],
        team_id_name: [
          { required: true, message: '请输入团队名称', trigger: 'blur' }
        ],
        team_complete_name: [
          { required: true, message: '请输入录入团队名称', trigger: 'blur' }
        ],
        org_relegation_name: [
          { required: true, message: '请输入建档机构名称', trigger: 'blur' }
        ],
        archive_operator_name: [
          { required: true, message: '请输入建档操作人', trigger: 'blur' }
        ],
        zonename: [
          { required: true, message: '请输入居委会', trigger: 'blur' }
        ]
      },
      disabledFlag: {
        disabled_archive_status: true,
        disabled_sick_status: true,
        disabled_medical_expenses_content: true,
        disabled_allergic_penicillin: true,
        disabled_allergic_sulfanilamide: true,
        disabled_allergic_streptomycin: true,
        disabled_allergic_other: true,
        disabled_allergic_other_content: true,
        disabled_exp_history_chemistry: true,
        disabled_exp_history_toxicology: true,
        disabled_exp_history_ray: true,
        disabled_past_hypertension: true,
        disabled_past_hypertension_date: true,
        disabled_past_diabetes: true,
        disabled_past_diabetes_date: true,
        disabled_past_coronary: true,
        disabled_past_coronary_date: true,
        disabled_past_schizophrenia: true,
        disabled_past_schizophrenia_date: true,
        disabled_past_malignant: true,
        disabled_past_malignant_date: true,
        disabled_past_apoplexy: true,
        disabled_past_apoplexy_date: true,
        disabled_past_copd: true,
        disabled_past_copd_date: true,
        disabled_past_tb: true,
        disabled_past_tb_date: true,
        disabled_past_hepatitis: true,
        disabled_past_hepatitis_date: true,
        disabled_past_oficiala: true,
        disabled_past_oficiala_date: true,
        disabled_occupational_disease: true,
        disabled_occupational_disease_date: true,
        disabled_past_other: true,
        disabled_past_other_content: true,
        disabled_past_other_content_date: true,
        disabled_past_malignant_con: true,
        disabled_past_oficiala_con: true,
        disabled_surgery_name1: true,
        disabled_surgery_name1_date: true,
        disabled_surgery_name2: true,
        disabled_surgery_name2_date: true,
        disabled_trauma_name1: true,
        disabled_trauma_name1_date: true,
        disabled_trauma_name2: true,
        disabled_trauma_name2_date: true,
        disabled_transfusion_name1: true,
        disabled_transfusion_name1_date: true,
        disabled_transfusion_name2: true,
        disabled_transfusion_name2_date: true,
        disabled_father_hypertension: true,
        disabled_father_diabetes: true,
        disabled_father_coronary: true,
        disabled_father_allergy: true,
        disabled_father_malignant: true,
        disabled_father_schizophrenia: true,
        disabled_father_stroke: true,
        disabled_father_tb: true,
        disabled_father_hepatitis: true,
        disabled_father_congenital: true,
        disabled_father_other: true,
        disabled_father_other_content: true,
        disabled_mother_hypertension: true,
        disabled_mother_diabetes: true,
        disabled_mother_coronary: true,
        disabled_mother_allergy: true,
        disabled_mother_malignant: true,
        disabled_mother_schizophrenia: true,
        disabled_mother_stroke: true,
        disabled_mother_tb: true,
        disabled_mother_hepatitis: true,
        disabled_mother_congenital: true,
        disabled_mother_other: true,
        disabled_mothe_other_content: true,
        disabled_brothers_hypertension: true,
        disabled_brothers_diabetes: true,
        disabled_brothers_coronary: true,
        disabled_brothers_allergy: true,
        disabled_brothers_malignant: true,
        disabled_brothers_schizophrenia: true,
        disabled_brothers_stroke: true,
        disabled_brothers_tb: true,
        disabled_brothers_hepatitis: true,
        disabled_brothers_congenital: true,
        disabled_brothers_other: true,
        disabled_brothers_other_content: true,
        disabled_children_hypertension: true,
        disabled_children_diabetes: true,
        disabled_children_coronary: true,
        disabled_children_allergy: true,
        disabled_children_malignant: true,
        disabled_children_schizophrenia: true,
        disabled_children_stroke: true,
        disabled_children_tb: true,
        disabled_children_hepatitis: true,
        disabled_children_congenital: true,
        disabled_children_other: true,
        disabled_children_other_content: true,
        disabled_genetic_diseasename: true,
        // disabled_disability_without: true,
        disabled_disability_eyes: true,
        disabled_disability_ear: true,
        disabled_disability_speech: true,
        disabled_disability_limb: true,
        disabled_disability_intellectual: true,
        disabled_disability_spirit: true,
        disabled_disability_no: true,
        disabled_disability_other: true,
        disabled_disability_other_con: true,
        disabled_archive_operator_name: false
      },
      readonlyFlag: {
        readonly_archive_code: true,
        readonly_org_id_name: true,
        readonly_manage_org_name: true,
        readonly_manage_team_name: true,
        readonly_manage_operator_name: true,
        readonly_team_id_name: true,
        readonly_org_relegation_name: true,
        readonly_archive_operator_name: true,
        readonly_zonename: true
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
      if (parm.record.archiveId !== null && parm.record.archiveId !== 0) {
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
      if (result.columnName === 'manage_operator_name') {
        this.form.manage_operator_name = result.label
        this.form.manage_operator = result.value
        this.$forceUpdate()
      }
      if (result.columnName === 'archive_operator_name') {
        this.form.archive_operator_name = result.label
        this.form.archive_operator = result.value
        this.$forceUpdate()
      }
      if (result.columnName === 'zonename') {
        this.form.zonename = result.label
        this.form.zone_code = result.value
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
      me.form.manage_org = userInfo.orgId
      me.form.manage_org_name = userInfo.orgName
      me.form.manage_team = userInfo.teamId
      me.form.manage_team_name = userInfo.teamName
      me.form.org_relegation = userInfo.orgId
      me.form.org_relegation_name = userInfo.orgName
      me.form.org_id = userInfo.orgId
      me.form.org_id_name = userInfo.orgName
      me.form.team_id = userInfo.teamId
      me.form.team_id_name = userInfo.teamName
      me.form.archive_operator = userInfo.staffCode
      me.form.archive_operator_name = userInfo.staffName
      me.form.nation = 1
      me.form.residence = 1
      me.disabledFlag.disabled_archive_operator_name = false
    },
    recordAdd (parm) {
      var me = this
      me.resetForm('elForm')
      me.formInit()
    },
    recordEdit (parm) {
      var me = this
      me.resetForm('elForm')
      me.fromDataLoading = true
      me.axiosPost(
        '/PHHygieneSickArchive/getForm',
        parm
      ).then(function (response) {
        if (response.data.statusCode === 8200) {
          var rpdata = response.data.data
          var rpFormData = JSON.parse(rpdata)
          me.form = rpFormData[0]
          me.initFormControls()
          me.fromDataLoading = false
          me.disabledFlag.disabled_archive_operator_name = true
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
        '/HygieneSickArchive/deleteRecord',
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
        '/PHHygieneSickArchive/saveRecord',
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
          if (me.form.archiveId == null || me.form.archiveId === '') {
            me.form.archiveId = response.data.data.text
          }
          if (me.formSaveCallback) {
            me.formSaveCallback('HygieneSickArchive', me.form)
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
    initFormControls () {
      var me = this
      me.changeAllergicWithout()
      me.changeAllergicOther()
      me.changeExposureHistory()
      me.changePastNone()
      me.changePastHypertension()
      me.changePastDiabetes()
      me.changePastCoronary()
      me.changePastSchizophrenia()
      me.changePastMalignant()
      me.changePastApoplexy()
      me.changePastCopd()
      me.changePastTb()
      me.changePastHepatitis()
      me.changePastOficiala()
      me.changeOccupationalDisease()
      me.changePastOther()
      me.changeSurgery()
      me.changeTrauma()
      me.changeTransfusion()
      me.changeFatherNone()
      me.changeMotherNone()
      me.changeBrothersNone()
      me.changeChildrenNone()
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
      var url = '/PHBaseDict/getDictByType?dictType=HygieneSickArchiveForm'
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
          'ud_select_sick_sex',
          'ud_select_residence',
          'ud_select_nation',
          'ud_select_blood',
          'ud_select_blood_rh',
          'ud_select_education',
          'ud_select_occupation',
          'ud_select_marriage',
          'ud_select_archive_status',
          'ud_select_archiving_way',
          'ud_select_sick_status',
          'ud_select_exhaust_type',
          'ud_select_fuel_type',
          'ud_select_drinking_water',
          'ud_select_toilet_health',
          'ud_select_animal_pound'
        ]
        for (var com of refComs) {
          me.$refs[com].$emit(eventName, rpdata)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    changeArchiveCode () {
      var me = this
      me.$message({
        message: '档案号变更',
        type: 'warning'
      })
    },
    changeZoneCode () {
      var me = this
      me.$message({
        message: '居委会变更',
        type: 'warning'
      })
    },
    changeIdentityCardNo () {
      var me = this
      me.$message({
        message: '身份证号变更验证性别和出生日期',
        type: 'warning'
      })
    },
    changeAllergicWithout () {
      var me = this
      if (me.form.allergic_without === 0) {
        me.disabledFlag.disabled_allergic_penicillin = false
        me.disabledFlag.disabled_allergic_sulfanilamide = false
        me.disabledFlag.disabled_allergic_streptomycin = false
        me.disabledFlag.disabled_allergic_other = false
      } else if (me.form.allergic_without === 1) {
        me.form.allergic_penicillin = 0
        me.form.allergic_sulfanilamide = 0
        me.form.allergic_streptomycin = 0
        me.form.allergic_other = 0
        me.form.allergic_other_content = ''
        me.disabledFlag.disabled_allergic_penicillin = true
        me.disabledFlag.disabled_allergic_sulfanilamide = true
        me.disabledFlag.disabled_allergic_streptomycin = true
        me.disabledFlag.disabled_allergic_other = true
      }
    },
    changeAllergicOther () {
      var me = this
      if (me.form.allergic_other === 0) {
        me.form.allergic_other_content = ''
        me.disabledFlag.disabled_allergic_other_content = true
      } else if (me.form.allergic_other === 1) {
        me.disabledFlag.disabled_allergic_other_content = false
      }
    },
    changeExposureHistory () {
      var me = this
      if (me.form.exposure_history === 0) {
        me.disabledFlag.disabled_exp_history_chemistry = false
        me.disabledFlag.disabled_exp_history_toxicology = false
        me.disabledFlag.disabled_exp_history_ray = false
      } else if (me.form.exposure_history === 1) {
        me.form.exp_history_chemistry = 0
        me.form.exp_history_toxicology = 0
        me.form.exp_history_ray = 0
        me.disabledFlag.disabled_exp_history_chemistry = true
        me.disabledFlag.disabled_exp_history_toxicology = true
        me.disabledFlag.disabled_exp_history_ray = true
      }
    },
    changePastNone () {
      var me = this
      if (me.form.past_none === 0) {
        me.disabledFlag.disabled_past_hypertension = false
        me.disabledFlag.disabled_past_diabetes = false
        me.disabledFlag.disabled_past_coronary = false
        me.disabledFlag.disabled_past_schizophrenia = false
        me.disabledFlag.disabled_past_malignant = false
        me.disabledFlag.disabled_past_apoplexy = false
        me.disabledFlag.disabled_past_copd = false
        me.disabledFlag.disabled_past_tb = false
        me.disabledFlag.disabled_past_hepatitis = false
        me.disabledFlag.disabled_past_oficiala = false
        me.disabledFlag.disabled_occupational_disease = false
        me.disabledFlag.disabled_past_other = false
        me.disabledFlag.disabled_past_oficialacon = false
      } else if (me.form.past_none === 1) {
        me.form.past_hypertension = 0
        me.form.past_hypertension_date = ''
        me.form.past_diabetes = 0
        me.form.past_diabetes_date = ''
        me.form.past_coronary = 0
        me.form.past_coronary_date = ''
        me.form.past_schizophrenia = 0
        me.form.past_schizophrenia_date = ''
        me.form.past_malignant = 0
        me.form.past_malignant_date = ''
        me.form.past_malignant_con = ''
        me.form.past_apoplexy = 0
        me.form.past_apoplexy_date = ''
        me.form.past_copd = 0
        me.form.past_copd_date = ''
        me.form.past_tb = 0
        me.form.past_tb_date = ''
        me.form.past_hepatitis = 0
        me.form.past_hepatitis_date = ''
        me.form.past_oficiala = 0
        me.form.past_oficiala_date = ''
        me.form.past_oficiala_con = ''
        me.form.occupational_disease = 0
        me.form.occupational_disease_date = ''
        me.form.past_other = 0
        me.form.past_other_content = ''
        me.form.past_other_content_date = ''
        me.disabledFlag.disabled_past_hypertension = true
        me.disabledFlag.disabled_past_hypertension_date = true
        me.disabledFlag.disabled_past_diabetes = true
        me.disabledFlag.disabled_past_diabetes_date = true
        me.disabledFlag.disabled_past_coronary = true
        me.disabledFlag.disabled_past_coronary_date = true
        me.disabledFlag.disabled_past_schizophrenia = true
        me.disabledFlag.disabled_past_schizophrenia_date = true
        me.disabledFlag.disabled_past_malignant = true
        me.disabledFlag.disabled_past_malignant_date = true
        me.disabledFlag.disabled_past_apoplexy = true
        me.disabledFlag.disabled_past_apoplexy_date = true
        me.disabledFlag.disabled_past_copd = true
        me.disabledFlag.disabled_past_copd_date = true
        me.disabledFlag.disabled_past_tb = true
        me.disabledFlag.disabled_past_tbdate = true
        me.disabledFlag.disabled_past_hepatitis = true
        me.disabledFlag.disabled_past_hepatitis_date = true
        me.disabledFlag.disabled_past_oficiala = true
        me.disabledFlag.disabled_past_oficiala_date = true
        me.disabledFlag.disabled_occupational_disease = true
        me.disabledFlag.disabled_occupational_disease_date = true
        me.disabledFlag.disabled_past_other = true
        me.disabledFlag.disabled_past_othercontent = true
        me.disabledFlag.disabled_past_othercontent_date = true
        me.disabledFlag.disabled_past_malignantcon = true
        me.disabledFlag.disabled_past_oficialacon = true
      }
    },
    changePastHypertension () {
      var me = this
      if (me.form.past_hypertension === 0) {
        me.form.past_hypertension_date = ''
        me.disabledFlag.disabled_past_hypertension_date = true
      } else if (me.form.past_hypertension === 1) {
        me.disabledFlag.disabled_past_hypertension_date = false
      }
    },
    changePastDiabetes () {
      var me = this
      if (me.form.past_diabetes === 0) {
        me.form.past_diabetes_date = ''
        me.disabledFlag.disabled_past_diabetes_date = true
      } else if (me.form.past_diabetes === 1) {
        me.disabledFlag.disabled_past_diabetes_date = false
      }
    },
    changePastCoronary () {
      var me = this
      if (me.form.past_coronary === 0) {
        me.form.past_coronary_date = ''
        me.disabledFlag.disabled_past_coronary_date = true
      } else if (me.form.past_coronary === 1) {
        me.disabledFlag.disabled_past_coronary_date = false
      }
    },
    changePastSchizophrenia () {
      var me = this
      if (me.form.past_schizophrenia === 0) {
        me.form.past_schizophrenia_date = ''
        me.disabledFlag.disabled_past_schizophrenia_date = true
      } else if (me.form.past_schizophrenia === 1) {
        me.disabledFlag.disabled_past_schizophrenia_date = false
      }
    },
    changePastMalignant () {
      var me = this
      if (me.form.past_malignant === 0) {
        me.form.past_malignant_date = ''
        me.form.past_malignant_con = ''
        me.disabledFlag.disabled_past_malignant_date = true
        me.disabledFlag.disabled_past_malignant_con = true
      } else if (me.form.past_malignant === 1) {
        me.disabledFlag.disabled_past_malignant_date = false
        me.disabledFlag.disabled_past_malignant_con = false
      }
    },
    changePastApoplexy () {
      var me = this
      if (me.form.past_apoplexy === 0) {
        me.form.past_apoplexy_date = ''
        me.disabledFlag.disabled_past_apoplexy_date = true
      } else if (me.form.past_apoplexy === 1) {
        me.disabledFlag.disabled_past_apoplexy_date = false
      }
    },
    changePastCopd () {
      var me = this
      if (me.form.past_copd === 0) {
        me.form.past_copd_date = ''
        me.disabledFlag.disabled_past_copd_date = true
      } else if (me.form.past_copd === 1) {
        me.disabledFlag.disabled_past_copd_date = false
      }
    },
    changePastTb () {
      var me = this
      if (me.form.past_tb === 0) {
        me.form.past_tb_date = ''
        me.disabledFlag.disabled_past_tb_date = true
      } else if (me.form.past_tb === 1) {
        me.disabledFlag.disabled_past_tb_date = false
      }
    },
    changePastHepatitis () {
      var me = this
      if (me.form.past_hepatitis === 0) {
        me.form.past_hepatitis_date = ''
        me.disabledFlag.disabled_past_hepatitis_date = true
      } else if (me.form.past_hepatitis === 1) {
        me.disabledFlag.disabled_past_hepatitis_date = false
      }
    },
    changePastOficiala () {
      var me = this
      if (me.form.past_oficiala === 0) {
        me.form.past_oficiala_date = ''
        me.form.past_oficiala_con = ''
        me.disabledFlag.disabled_past_oficiala_date = true
        me.disabledFlag.disabled_past_oficiala_con = true
      } else if (me.form.past_oficiala === 1) {
        me.disabledFlag.disabled_past_oficiala_date = false
        me.disabledFlag.disabled_past_oficiala_con = false
      }
    },
    changeOccupationalDisease () {
      var me = this
      if (me.form.occupational_disease === 0) {
        me.form.occupational_disease_date = ''
        me.disabledFlag.disabled_occupational_disease_date = true
      } else if (me.form.occupational_disease === 1) {
        me.disabledFlag.disabled_occupational_disease_date = false
      }
    },
    changePastOther () {
      var me = this
      if (me.form.past_other === 0) {
        me.form.past_other_date = ''
        me.form.past_other_content = ''
        me.disabledFlag.disabled_past_other_content = true
        me.disabledFlag.disabled_past_other_content_date = true
      } else if (me.form.past_other === 1) {
        me.disabledFlag.disabled_past_other_content = false
        me.disabledFlag.disabled_past_other_content_date = false
      }
    },
    changeSurgery () {
      var me = this
      if (me.form.surgery === 0) {
        me.form.surgery_name1 = ''
        me.form.surgery_name1_date = ''
        me.form.surgery_name2 = ''
        me.form.surgery_name2_date = ''
        me.disabledFlag.disabled_surgery_name1 = true
        me.disabledFlag.disabled_surgery_name1_date = true
        me.disabledFlag.disabled_surgery_name2 = true
        me.disabledFlag.disabled_surgery_name2_date = true
      } else if (me.form.surgery === 1) {
        me.disabledFlag.disabled_surgery_name1 = false
        me.disabledFlag.disabled_surgery_name1_date = false
        me.disabledFlag.disabled_surgery_name2 = false
        me.disabledFlag.disabled_surgery_name2_date = false
      }
    },
    changeTrauma () {
      var me = this
      if (me.form.trauma === 0) {
        me.form.trauma_name1 = ''
        me.form.trauma_name1_date = ''
        me.form.trauma_name2 = ''
        me.form.trauma_name2_date = ''
        me.disabledFlag.disabled_trauma_name1 = true
        me.disabledFlag.disabled_trauma_name1_date = true
        me.disabledFlag.disabled_trauma_name2 = true
        me.disabledFlag.disabled_trauma_name2_date = true
      } else if (me.form.trauma === 1) {
        me.disabledFlag.disabled_trauma_name1 = false
        me.disabledFlag.disabled_trauma_name1_date = false
        me.disabledFlag.disabled_trauma_name2 = false
        me.disabledFlag.disabled_trauma_name2_date = false
      }
    },
    changeTransfusion () {
      var me = this
      if (me.form.transfusion === 0) {
        me.form.transfusion_name1 = ''
        me.form.transfusion_name1_date = ''
        me.form.transfusion_name2 = ''
        me.form.transfusion_name2_date = ''
        me.disabledFlag.disabled_transfusion_name1 = true
        me.disabledFlag.disabled_transfusion_name1_date = true
        me.disabledFlag.disabled_transfusion_name2 = true
        me.disabledFlag.disabled_transfusion_name2_date = true
      } else if (me.form.transfusion === 1) {
        me.disabledFlag.disabled_transfusion_name1 = false
        me.disabledFlag.disabled_transfusion_name1_date = false
        me.disabledFlag.disabled_transfusion_name2 = false
        me.disabledFlag.disabled_transfusion_name2_date = false
      }
    },
    changeFatherNone () {
      var me = this
      if (me.form.father_none === 0) {
        me.disabledFlag.disabled_father_hypertension = false
        me.disabledFlag.disabled_father_diabetes = false
        me.disabledFlag.disabled_father_coronary = false
        me.disabledFlag.disabled_father_allergy = false
        me.disabledFlag.disabled_father_malignant = false
        me.disabledFlag.disabled_father_schizophrenia = false
        me.disabledFlag.disabled_father_stroke = false
        me.disabledFlag.disabled_father_tb = false
        me.disabledFlag.disabled_father_hepatitis = false
        me.disabledFlag.disabled_father_congenital = false
        me.disabledFlag.disabled_father_other = false
      } else if (me.form.father_none === 1) {
        me.form.father_hypertension = 0
        me.form.father_diabetes = 0
        me.form.father_coronary = 0
        me.form.father_allergy = 0
        me.form.father_malignant = 0
        me.form.father_schizophrenia = 0
        me.form.father_stroke = 0
        me.form.father_tb = 0
        me.form.father_hepatitis = 0
        me.form.father_congenital = 0
        me.form.father_other = 0
        me.form.father_other_content = ''
        me.disabledFlag.disabled_father_hypertension = true
        me.disabledFlag.disabled_father_diabetes = true
        me.disabledFlag.disabled_father_coronary = true
        me.disabledFlag.disabled_father_allergy = true
        me.disabledFlag.disabled_father_malignant = true
        me.disabledFlag.disabled_father_schizophrenia = true
        me.disabledFlag.disabled_father_stroke = true
        me.disabledFlag.disabled_father_tb = true
        me.disabledFlag.disabled_father_hepatitis = true
        me.disabledFlag.disabled_father_congenital = true
        me.disabledFlag.disabled_father_other = true
      }
    },
    changeFatherOther () {
      var me = this
      if (me.form.father_other === 0) {
        me.form.father_other_content = ''
        me.disabledFlag.disabled_father_other_content = true
      } else if (me.form.father_other === 1) {
        me.disabledFlag.disabled_father_other_content = false
      }
    },
    changeMotherNone () {
      var me = this
      if (me.form.mother_none === 0) {
        me.disabledFlag.disabled_mother_hypertension = false
        me.disabledFlag.disabled_mother_diabetes = false
        me.disabledFlag.disabled_mother_coronary = false
        me.disabledFlag.disabled_mother_allergy = false
        me.disabledFlag.disabled_mother_malignant = false
        me.disabledFlag.disabled_mother_schizophrenia = false
        me.disabledFlag.disabled_mother_stroke = false
        me.disabledFlag.disabled_mother_tb = false
        me.disabledFlag.disabled_mother_hepatitis = false
        me.disabledFlag.disabled_mother_congenital = false
        me.disabledFlag.disabled_mother_other = false
      } else if (me.form.mother_none === 1) {
        me.form.mother_hypertension = 0
        me.form.mother_diabetes = 0
        me.form.mother_coronary = 0
        me.form.mother_allergy = 0
        me.form.mother_malignant = 0
        me.form.mother_schizophrenia = 0
        me.form.mother_stroke = 0
        me.form.mother_tb = 0
        me.form.mother_hepatitis = 0
        me.form.mother_congenital = 0
        me.form.mother_other = 0
        me.form.mothe_other_content = ''
        me.disabledFlag.disabled_mother_hypertension = true
        me.disabledFlag.disabled_mother_diabetes = true
        me.disabledFlag.disabled_mother_coronary = true
        me.disabledFlag.disabled_mother_allergy = true
        me.disabledFlag.disabled_mother_malignant = true
        me.disabledFlag.disabled_mother_schizophrenia = true
        me.disabledFlag.disabled_mother_stroke = true
        me.disabledFlag.disabled_mother_tb = true
        me.disabledFlag.disabled_mother_hepatitis = true
        me.disabledFlag.disabled_mother_congenital = true
        me.disabledFlag.disabled_mother_other = true
      }
    },
    changeMotherOther () {
      var me = this
      if (me.form.mother_other === 0) {
        me.form.mothe_other_content = ''
        me.disabledFlag.disabled_mothe_other_content = true
      } else if (me.form.mother_other === 1) {
        me.disabledFlag.disabled_mothe_other_content = false
      }
    },
    changeBrothersNone () {
      var me = this
      if (me.form.brothers_none === 0) {
        me.disabledFlag.disabled_brothers_hypertension = false
        me.disabledFlag.disabled_brothers_diabetes = false
        me.disabledFlag.disabled_brothers_coronary = false
        me.disabledFlag.disabled_brothers_allergy = false
        me.disabledFlag.disabled_brothers_malignant = false
        me.disabledFlag.disabled_brothers_schizophrenia = false
        me.disabledFlag.disabled_brothers_stroke = false
        me.disabledFlag.disabled_brothers_tb = false
        me.disabledFlag.disabled_brothers_hepatitis = false
        me.disabledFlag.disabled_brothers_congenital = false
        me.disabledFlag.disabled_brothers_other = false
      } else if (me.form.brothers_none === 1) {
        me.form.brothers_hypertension = 0
        me.form.brothers_diabetes = 0
        me.form.brothers_coronary = 0
        me.form.brothers_allergy = 0
        me.form.brothers_malignant = 0
        me.form.brothers_schizophrenia = 0
        me.form.brothers_stroke = 0
        me.form.brothers_tb = 0
        me.form.brothers_hepatitis = 0
        me.form.brothers_congenital = 0
        me.form.brothers_other = 0
        me.form.brothers_other_content = ''
        me.disabledFlag.disabled_brothers_hypertension = true
        me.disabledFlag.disabled_brothers_diabetes = true
        me.disabledFlag.disabled_brothers_coronary = true
        me.disabledFlag.disabled_brothers_allergy = true
        me.disabledFlag.disabled_brothers_malignant = true
        me.disabledFlag.disabled_brothers_schizophrenia = true
        me.disabledFlag.disabled_brothers_stroke = true
        me.disabledFlag.disabled_brothers_tb = true
        me.disabledFlag.disabled_brothers_hepatitis = true
        me.disabledFlag.disabled_brothers_congenital = true
        me.disabledFlag.disabled_brothers_other = true
      }
    },
    changebrothersOther () {
      var me = this
      if (me.form.brothers_other === 0) {
        me.form.brothers_other_content = ''
        me.disabledFlag.disabled_brothers_other_content = true
      } else if (me.form.brothers_other === 1) {
        me.disabledFlag.disabled_brothers_other_content = false
      }
    },
    changeChildrenNone () {
      var me = this
      if (me.form.children_none === 0) {
        me.disabledFlag.disabled_children_hypertension = false
        me.disabledFlag.disabled_children_diabetes = false
        me.disabledFlag.disabled_children_coronary = false
        me.disabledFlag.disabled_children_allergy = false
        me.disabledFlag.disabled_children_malignant = false
        me.disabledFlag.disabled_children_schizophrenia = false
        me.disabledFlag.disabled_children_stroke = false
        me.disabledFlag.disabled_children_tb = false
        me.disabledFlag.disabled_children_hepatitis = false
        me.disabledFlag.disabled_children_congenital = false
        me.disabledFlag.disabled_children_other = false
      } else if (me.form.children_none === 1) {
        me.form.children_hypertension = 0
        me.form.children_diabetes = 0
        me.form.children_coronary = 0
        me.form.children_allergy = 0
        me.form.children_malignant = 0
        me.form.children_schizophrenia = 0
        me.form.children_stroke = 0
        me.form.children_tb = 0
        me.form.children_hepatitis = 0
        me.form.children_congenital = 0
        me.form.children_other = 0
        me.form.children_other_content = ''
        me.disabledFlag.disabled_children_hypertension = true
        me.disabledFlag.disabled_children_diabetes = true
        me.disabledFlag.disabled_children_coronary = true
        me.disabledFlag.disabled_children_allergy = true
        me.disabledFlag.disabled_children_malignant = true
        me.disabledFlag.disabled_children_schizophrenia = true
        me.disabledFlag.disabled_children_stroke = true
        me.disabledFlag.disabled_children_tb = true
        me.disabledFlag.disabled_children_hepatitis = true
        me.disabledFlag.disabled_children_congenital = true
        me.disabledFlag.disabled_children_other = true
      }
    },
    changeChildrenOther () {
      var me = this
      if (me.form.children_other === 0) {
        me.form.children_other_content = ''
        me.disabledFlag.disabled_children_other_content = true
      } else if (me.form.children_other === 1) {
        me.disabledFlag.disabled_children_other_content = false
      }
    },
    changeGenetic () {
      var me = this
      if (me.form.genetic === 0) {
        me.form.genetic_diseasename = ''
        me.disabledFlag.disabled_genetic_diseasename = true
      } else if (me.form.genetic === 1) {
        me.disabledFlag.disabled_genetic_diseasename = false
      }
    },
    changeDisabilityWithout () {
      var me = this
      if (me.form.disability_without === 1) {
        me.form.disability_eyes = 0
        me.form.disability_ear = 0
        me.form.disability_speech = 0
        me.form.disability_limb = 0
        me.form.disability_intellectual = 0
        me.form.disability_spirit = 0
        me.form.disability_other = 0
        me.form.disability_other_con = ''
        me.disabledFlag.disabled_disability_eyes = true
        me.disabledFlag.disabled_disability_ear = true
        me.disabledFlag.disabled_disability_speech = true
        me.disabledFlag.disabled_disability_limb = true
        me.disabledFlag.disabled_disability_intellectual = true
        me.disabledFlag.disabled_disability_spirit = true
        me.disabledFlag.disabled_disability_other = true
      } else if (me.form.disability_without === 0) {
        me.disabledFlag.disabled_disability_eyes = false
        me.disabledFlag.disabled_disability_ear = false
        me.disabledFlag.disabled_disability_speech = false
        me.disabledFlag.disabled_disability_limb = false
        me.disabledFlag.disabled_disability_intellectual = false
        me.disabledFlag.disabled_disability_spirit = false
        me.disabledFlag.disabled_disability_other = false
      }
    },
    changeDisabilityOther () {
      var me = this
      if (me.form.disability_other === 0) {
        me.form.disability_other_con = ''
        me.disabledFlag.disabled_disability_other_con = true
      } else if (me.form.disability_other === 1) {
        me.disabledFlag.disabled_disability_other_con = false
      }
    },
    changeMedicalExpenses99 () {
      var me = this
      if (me.form.medical_expenses_99 === 0) {
        me.form.medical_expenses_content = ''
        me.disabledFlag.disabled_medical_expenses_content = true
      } else if (me.form.medical_expenses_99 === 1) {
        me.disabledFlag.disabled_medical_expenses_content = false
      }
    },
    changeArchiveOperatorName () {
      var me = this
      me.$message({
        message: '建档医生变更',
        type: 'warning'
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
  }
}
