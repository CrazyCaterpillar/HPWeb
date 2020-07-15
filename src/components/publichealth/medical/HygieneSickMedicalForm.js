export default {
  name: 'hygieneSickMedicalForm',
  components: {
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        medical_no: null,
        org_id: null,
        archive_id: null,
        sick_id: null,
        medical_operator: null,
        medical_time: '',
        create_operator: null,
        create_time: '',
        modify_operator: null,
        modify_time: '',
        remark: '',
        sick_age: null,
        health_medical_no: '',
        qualified_flag: null,
        zone_code_zx: '',
        zone_code_qx: '',
        org_id_upper: null,
        fzjc_flag: null,
        print_report_flag: null,
        examine_operator: null,
        medical_way: null,
        doctors_comments: '',
        audit_status: null,
        next_date_start: '',
        next_date_end: '',
        team_id: null,
        county: '',
        medical_next_time: '',
        main_doctors: null,
        ef_upload_flag: null,
        birthday: '',
        archive_time: '',
        zone_code: '',
        symptom_headache: 0,
        symptom_dizziness: 0,
        symptom_palpitation: 0,
        symptom_chest_stuffiness: 0,
        symptom_chest_pain: 0,
        symptom_chronic_cough: 0,
        symptom_expectoration: 0,
        symptom_dyspnea: 0,
        symptom_polydipsia: 0,
        symptom_polyuria: 0,
        symptom_weight_loss: 0,
        symptom_lack_of_power: 0,
        symptom_joint_gall: 0,
        symptom_blurred_vision: 0,
        symptom_hand_foot_numbness: 0,
        symptom_urinary_urgency: 0,
        symptom_dysuria: 0,
        symptom_constipation: 0,
        symptom_diarrhea: 0,
        symptom_nausea_vomiting: 0,
        symptom_dazzle: 0,
        symptom_tinnitus: 0,
        symptom_breast_bursting: 0,
        symptom_other: 0,
        symptom_other_str: '',
        asymptomatic: 1,
        body_temperature: null,
        pulse_frequency: null,
        respiratory_rate: null,
        blood_pressure_left_d: null,
        blood_pressure_left_u: null,
        blood_pressure_rigth_d: null,
        blood_pressure_rigth_u: null,
        blood_pre_rev_date: '',
        blood_pre_sec_d: null,
        blood_pre_sec_u: null,
        blood_pre_thr_d: null,
        blood_pre_thr_u: null,
        height: null,
        weight: null,
        waist: null,
        bmi: null,
        elderly_health_status: null,
        elderly_self_care: null,
        elderly_cognitive_fun: null,
        mini_mental_state_examination: null,
        elderly_affective_state: null,
        elderly_depression_check: null,
        elderly_self_care_id: null,
        elderly_mental_state_id: null,
        elderly_depression_scale_id: null,
        hardening_frequency: null,
        every_hardening_time: null,
        insist_hardening_time: null,
        hardening_mode: '',
        eat_clitocybine_equalization: null,
        eat_meatdiet_flash: null,
        eat_vegetarian_flash: null,
        eat_hobby_salt: null,
        eat_hobby_oil: null,
        eat_hobby_sugar: null,
        smoking_circumstance: null,
        daily_smoking_quantity: null,
        begin_smoking_age: null,
        quit_smoking_age: null,
        drink_frequency: null,
        every_alcohol_tolerance: null,
        is_dry_out: null,
        dry_out_age: null,
        begin_drink_age: null,
        one_year_is_temulentia: null,
        drink_white_spirits: null,
        drink_beer: null,
        drink_red_wine: null,
        drink_yellow_wine: null,
        drink_others: null,
        drink_others_str: '',
        occupational_disease: null,
        occ_disease_trades: '',
        occupational_disease_work_time: null,
        poison_dust: '',
        poison_dust_ispre: null,
        poison_dust_pre_str: '',
        poison_radiogen: '',
        poison_radiogen_ispre: null,
        poison_radiogen_pre_str: '',
        poison_physicalfactor: '',
        poison_physical_ispre: null,
        poison_physical_pre_str: '',
        poison_chemical: '',
        poison_chemical_ispre: null,
        poison_chemical_pre_str: '',
        poison_others: '',
        poison_others_ispre: null,
        poison_others_pre_str: '',
        occ_haz_history_0: 1,
        occ_haz_history_1: null,
        hazard_name_dust: '',
        work_time_dust: '',
        occ_haz_history_2: null,
        hazard_name_rad: '',
        work_time_rad: '',
        occ_haz_history_3: null,
        hazard_name_phy: '',
        work_time_phy: '',
        occ_haz_history_4: null,
        hazard_name_che: '',
        work_time_che: '',
        occ_haz_history_5: null,
        hazard_name_oth: '',
        work_time_oth: '',
        lips: null,
        dentitiondenture: 1,
        miss_teeth: 0,
        miss_teeth_1: '',
        miss_teeth_2: '',
        miss_teeth_3: '',
        miss_teeth_4: '',
        dental_cary: 0,
        dental_cary_1: '',
        dental_cary_2: '',
        dental_cary_3: '',
        dental_cary_4: '',
        denture: 0,
        denture_1: '',
        denture_2: '',
        denture_3: '',
        denture_4: '',
        pharyngealportion: null,
        vision_left_eye: null,
        vision_right_eye: null,
        straighten_vision_left_eye: null,
        straighten_vision_right_eye: null,
        audition: null,
        motor_function: null,
        eyeground: null,
        eyeground_exception: '',
        skin: null,
        skin_others: '',
        sclera: null,
        sclera_others: '',
        lymph_node: null,
        lymph_node_others: '',
        lung_barrel_chest: null,
        lung_breath_sound: null,
        lung_breath_sound_excep: '',
        lung_rhonchus: null,
        lung_rhonchus_exception: '',
        heart_rate: null,
        cardiac_rhythm: null,
        cardiac_souffle: null,
        cardiac_souffle_others: '',
        abdo_press_pain: null,
        abdo_press_pain_oth: '',
        abdo_masses: null,
        abdo_masses_others: '',
        abdo_hepatomegaly: null,
        abdo_hepatomegaly_oth: '',
        abdo_splenomegaly: null,
        abdo_splenomegaly_oth: '',
        abdo_shifting_dull: null,
        abdo_shifting_dull_oth: '',
        immersion_foot: null,
        dorsum_of_foot_arteriopalmus: null,
        fundament_fingerp: null,
        fundament_fingerp_oth: '',
        breast_not_trouble_find: null,
        breast_mastectomy: null,
        breast_abnormal_lactation: null,
        breast_masses: null,
        breast_others: null,
        breast_others_str: '',
        vulva: null,
        vulva_exception: '',
        vagina: null,
        vagina_exception: '',
        cervix: null,
        cervix_exception: '',
        corpus: null,
        corpus_exception: '',
        attachment: null,
        attachment_exception: '',
        physical_examination_oth: '',
        hemoglobin: null,
        leukocyte: null,
        platelet: null,
        blood_routine_others: '',
        proteinuria: '',
        urine_sugar: '',
        ket: '',
        urinary_occult_blood: '',
        urine_routine_others: '',
        fasting_plasma_glucose_l: '',
        fasting_plasma_glucose_dl: '',
        electrocardiogram: null,
        electrocardiogram_excep: '',
        microalbuminuria: '',
        stool_occult_blood: null,
        glycolated_hemoglobin: '',
        hbsag: null,
        liver_function_salt: '',
        liver_function_sgot: '',
        liver_function_albumin: '',
        liver_function_total_bilirubin: '',
        liver_function_cb: '',
        renal_function_creatinine: '',
        renal_function_bun: '',
        renal_function_blood_potassium: '',
        renal_function_natremia: '',
        blood_fat_tc: '',
        blood_fat_triglyceride: '',
        blood_fat_ldlc: '',
        blood_fat_hdlc: '',
        cxr: null,
        cxr_exception: '',
        type_b_ultrasonic: null,
        type_b_ultrasonic_excep: '',
        cervical_pap_smears: null,
        cervical_pap_smears_excep: '',
        assistant_inves_oth: '',
        random_glucose: '',
        random_glucose_time: '',
        first_glucose: '',
        first_random_glucose: '',
        first_random_glu_time: '',
        urine_routine: null,
        lungs: null,
        lungs_content: '',
        heart: null,
        heart_content: '',
        abdomen: null,
        abdomen_content: '',
        liver_fun_alb_all: '',
        wbc_1: '',
        wbc_2: '',
        wbc_3: '',
        glucose_refuse: null,
        electrocardiogram_refuse: null,
        blood_routine_refuse: null,
        urine_routine_refuse: null,
        blood_fat_refuse: null,
        renal_function_refuse: null,
        liver_function_refuse: null,
        glycolated_hemoglobin_refuse: null,
        cxr_refuse: null,
        type_b_ultrasonic_refuse: null,
        fasting_glucose_nexttime: '',
        glucose_outside: null,
        electrocardiogram_outside: null,
        blood_routine_outside: null,
        urine_routine_outside: null,
        blood_fat_outside: null,
        renal_function_outside: null,
        liver_function_outside: null,
        glycolated_hemoglobin_outside: null,
        cxr_outside: null,
        type_b_ultrasonic_outside: null,
        microalbuminuria_refuse: null,
        microalbuminuria_outside: null,
        stool_occult_blood_refuse: null,
        stool_occult_blood_outside: null,
        cervical_pap_smears_refuse: null,
        cervical_pap_smears_outside: null,
        glucose_noallow: null,
        electrocardiogram_noallow: null,
        blood_routine_noallow: null,
        urine_routine_noallow: null,
        blood_fat_noallow: null,
        renal_function_noallow: null,
        liver_function_noallow: null,
        glycolated_hemoglobin_noallow: null,
        cxr_noallow: null,
        type_b_ultrasonic_noallow: null,
        microalbuminuria_noallow: null,
        stool_occult_blood_noallow: null,
        cervical_pap_smears_noallow: null,
        hbsag_noallow: null,
        hbsag_refuse: null,
        hbsag_outside: null,
        blood_uric_acid: null,
        blood_uric_acid_refuse: null,
        blood_uric_acid_outside: null,
        blood_uric_acid_noallow: null,
        blood_rheology_high_rate: null,
        blood_rheology_high_rate_un: '',
        blood_rheology_middle_rate: null,
        blood_rheology_middle_rate_un: '',
        blood_rheology_refuse: null,
        blood_rheology_outside: null,
        blood_rheology_noallow: null,
        blood_rheology_low_rate: null,
        blood_rheology_low_rate_un: '',
        blood_rheology_viscosity: null,
        blood_rheology_viscosity_un: '',
        blood_rheology_sedi: null,
        blood_rheology_sedi_un: '',
        blood_rheology_hematocrit: null,
        blood_rheology_hematocrit_un: '',
        blood_rheology_h_relative: null,
        blood_rheology_h_relative_un: '',
        blood_rheology_l_relative: null,
        blood_rheology_l_relative_un: '',
        blood_rheology_equationk: null,
        blood_rheology_equationk_un: '',
        blood_rheology_aggregation: null,
        blood_rheology_aggregation_un: '',
        blood_rheology_l_reduced: null,
        blood_rheology_l_reduced_un: '',
        blood_rheology_h_reduced: null,
        blood_rheology_h_reduced_un: '',
        blood_rheology_r_cell: null,
        blood_rheology_r_cell_un: '',
        blood_rheology_r_cell_tk: null,
        blood_rheology_r_cell_tk_un: '',
        urine_routine_white_cell: '',
        urine_routine_bilirubin: '',
        urine_routine_urobilinogen: '',
        urine_routine_ph_value: '',
        urine_routine_proportionof: '',
        urine_routine_nitrite: '',
        renal_failure_uric_acid: null,
        blood_routine_red_cell: null,
        electrocardiogram_heart: null,
        stool_occult_blood1: '',
        hbsag1: '',
        blood_routine_red_cell_yj: '',
        hemoglobin_yj: '',
        platelet_yj: '',
        leukocyte_yj: '',
        wbc1_yj: '',
        wbc2_yj: '',
        wbc3_yj: '',
        urine_routine_ph_value_yj: '',
        fasting_plasma_glucose_l_yj: '',
        random_glucose_yj: '',
        first_glucose_yj: '',
        first_random_glucose_yj: '',
        electrocardiogram_heart_yj: '',
        microalbuminuria_yj: '',
        glycolated_hemoglobin_yj: '',
        liver_function_salt_yj: '',
        liver_function_sgot_yj: '',
        liver_function_albumin_yj: '',
        liver_function_cb_yj: '',
        liver_fun_alb_all_yj: '',
        renal_function_creatinine_yj: '',
        renal_function_bun_yj: '',
        renal_function_natremia_yj: '',
        renal_failure_uric_acid_yj: '',
        blood_fat_tc_yj: '',
        blood_fat_triglyceride_yj: '',
        blood_fat_ldlc_yj: '',
        blood_fat_hdlc_yj: '',
        blood_uric_acid_yj: '',
        blood_rheology_high_rate_yj: '',
        blood_rheology_middle_rate_yj: '',
        blood_rheology_low_rate_yj: '',
        blood_rheology_viscosity_yj: '',
        blood_rheology_sedi_yj: '',
        blood_rheology_hematocrit_yj: '',
        blood_rheology_h_relative_yj: '',
        blood_rheology_l_relative_yj: '',
        blood_rheology_equationk_yj: '',
        blood_rheology_aggregation_yj: '',
        blood_rheology_l_reduced_yj: '',
        blood_rheology_h_reduced_yj: '',
        blood_rheology_r_cell_yj: '',
        blood_rheology_r_cell_tk_yj: '',
        total_bilirubin_yj: '',
        blood_potassium_yj: '',
        blood_routine_outside_others: '',
        glucose_routine_outside_others: '',
        urine_routine_outside_others: '',
        elect_outside_others: '',
        mic_outside_others: '',
        stool_outside_others: '',
        glycolated_outside_others: '',
        hbsag_outside_others: '',
        liver_outside_others: '',
        renal_outside_others: '',
        blood_fat_outside_others: '',
        cxr_outside_others: '',
        type_b_outside_others: '',
        cervical_outside_others: '',
        xns_outside_others: '',
        xlb_outside_others: '',
        proteinuria_yj: '',
        urine_sugar_yj: '',
        ket_yj: '',
        urinary_occult_blood_yj: '',
        medical_igr: null,
        blood_rheology_hx: '',
        fibrinogen: null,
        fibrinogen_un: '',
        type_b_ultrasonic_no: null,
        type_b_ultrasonic_qt: null,
        type_b_ultrasonic_excep_qt: '',
        glucose_regulation: null,
        cvd_undiscovered: 1,
        cvd_ischemic_stroke: 0,
        cvd_cerebral_hemorrhage: 0,
        cvd_sah: 0,
        cvd_tia: 0,
        cvd_others: 0,
        cvd_others_str: '',
        renal_undiscovered: 1,
        renal_dn: 0,
        renal_failure: 0,
        renal_agn: 0,
        renal_cgn: 0,
        renal_others: 0,
        renal_others_str: '',
        heart_undiscovered: 1,
        heart_myocardial_infarction: 0,
        heart_angina_pectoris: 0,
        heart_coronary_artery: 0,
        heart_chf: 0,
        heart_precordialpain: 0,
        heart_others: 0,
        heart_others_str: '',
        angiosis_undiscovered: 1,
        angiosis_da: 0,
        angiosis_occlusion_arteries: 0,
        angiosis_others: 0,
        angiosis_others_str: '',
        eye_disease_undiscovered: 1,
        retinal_hemorrhage: 0,
        papilledema: 0,
        eye_disease_cataract: 0,
        eye_disease_others: 0,
        eye_disease_others_str: '',
        nervous_system_disease: null,
        nervous_system_disease_str: '',
        others_system_disease: null,
        others_system_disease_str: '',
        enmedis: null,
        enmedis_other: '',
        c_heart_dis: null,
        health_ass_xf: null,
        other_disease_diabetes: null,
        other_disease_no: null,
        hypertension: null,
        inhospital_admissiondate1: '',
        inhospital_leavedate1: '',
        inhospital_cause1: '',
        inhospital_org_name1: '',
        inhospital_patient_id1: '',
        inhospital_admissiondate2: '',
        inhospital_leavedate2: '',
        inhospital_cause2: '',
        inhospital_org_name2: '',
        inhospital_patient_id2: '',
        fp_establish_date1: '',
        fp_cancel_date1: '',
        fp_cause1: '',
        fp_org_name1: '',
        fp_patient_id1: '',
        fp_establish_date2: '',
        fp_cancel_date2: '',
        fp_cause2: '',
        fp_org_name2: '',
        fp_patient_id2: '',
        drug_name1: '',
        drug_name2: '',
        drug_name3: '',
        drug_name4: '',
        drug_name5: '',
        drug_name6: '',
        drug_usage1: '',
        drug_usage2: '',
        drug_usage3: '',
        drug_usage4: '',
        drug_usage5: '',
        drug_usage6: '',
        drug_dosage1: '',
        drug_dosage2: '',
        drug_dosage3: '',
        drug_dosage4: '',
        drug_dosage5: '',
        drug_dosage6: '',
        drug_date1: '',
        drug_date2: '',
        drug_date3: '',
        drug_date4: '',
        drug_date5: '',
        drug_date6: '',
        drug_compliance1: null,
        drug_compliance2: null,
        drug_compliance3: null,
        drug_compliance4: null,
        drug_compliance6: null,
        drug_compliance5: null,
        ni_vaccination_name1: '',
        ni_vaccination_name2: '',
        ni_vaccination_name3: '',
        ni_vaccination_date1: '',
        ni_vaccination_date2: '',
        ni_vaccination_date3: '',
        ni_vaccination_org1: '',
        ni_vaccination_org2: '',
        ni_vaccination_org3: '',
        medical_operator_name: '',
        create_operator_name: '',
        team_id_name: '',
        main_doctors_name: ''
      },
      defaultForm: {
        default_symptom_headache: 0,
        default_symptom_dizziness: 0,
        default_symptom_palpitation: 0,
        default_symptom_chest_stuffiness: 0,
        default_symptom_chest_pain: 0,
        default_symptom_chronic_cough: 0,
        default_symptom_expectoration: 0,
        default_symptom_dyspnea: 0,
        default_symptom_polydipsia: 0,
        default_symptom_polyuria: 0,
        default_symptom_weight_loss: 0,
        default_symptom_lack_of_power: 0,
        default_symptom_joint_gall: 0,
        default_symptom_blurred_vision: 0,
        default_symptom_hand_foot_numbness: 0,
        default_symptom_urinary_urgency: 0,
        default_symptom_dysuria: 0,
        default_symptom_constipation: 0,
        default_symptom_diarrhea: 0,
        default_symptom_nausea_vomiting: 0,
        default_symptom_dazzle: 0,
        default_symptom_tinnitus: 0,
        default_symptom_breast_bursting: 0,
        default_symptom_other: 0,
        default_asymptomatic: 1,
        default_occ_haz_history_0: 1,
        default_dentitiondenture: 1,
        default_miss_teeth: 0,
        default_dental_cary: 0,
        default_denture: 0,
        default_cvd_undiscovered: 1,
        default_cvd_ischemic_stroke: 0,
        default_cvd_cerebral_hemorrhage: 0,
        default_cvd_sah: 0,
        default_cvd_tia: 0,
        default_cvd_others: 0,
        default_renal_undiscovered: 1,
        default_renal_dn: 0,
        default_renal_failure: 0,
        default_renal_agn: 0,
        default_renal_cgn: 0,
        default_renal_others: 0,
        default_heart_undiscovered: 1,
        default_heart_myocardial_infarction: 0,
        default_heart_angina_pectoris: 0,
        default_heart_coronary_artery: 0,
        default_heart_chf: 0,
        default_heart_precordialpain: 0,
        default_heart_others: 0,
        default_angiosis_undiscovered: 1,
        default_angiosis_da: 0,
        default_angiosis_occlusion_arteries: 0,
        default_angiosis_others: 0,
        default_eye_disease_undiscovered: 1,
        default_retinal_hemorrhage: 0,
        default_papilledema: 0,
        default_eye_disease_cataract: 0,
        default_eye_disease_others: 0
      },
      rules: {
        medical_operator: [
          { required: true, message: '请输入体检医生', trigger: 'blur' }
        ],
        medical_time: [
          { required: true, message: '请输入体检日期', trigger: 'blur' }
        ],
        remark: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
        ],
        body_temperature: [
          { validator: this.validatorBody_temperature, trigger: 'blur', decimal: 1, min: 0 }
        ],
        pulse_frequency: [
          { validator: this.validatorPulse_frequency, trigger: 'blur', decimal: 2, min: 0 }
        ],
        respiratory_rate: [
          { validator: this.validatorRespiratory_rate, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pressure_left_d: [
          { validator: this.validatorBlood_pressure_left_d, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pressure_left_u: [
          { validator: this.validatorBlood_pressure_left_u, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pressure_rigth_d: [
          { validator: this.validatorBlood_pressure_rigth_d, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pressure_rigth_u: [
          { validator: this.validatorBlood_pressure_rigth_u, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pre_sec_d: [
          { validator: this.validatorBlood_pre_sec_d, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pre_sec_u: [
          { validator: this.validatorBlood_pre_sec_u, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pre_thr_d: [
          { validator: this.validatorBlood_pre_thr_d, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pre_thr_u: [
          { validator: this.validatorBlood_pre_thr_u, trigger: 'blur', decimal: 0, min: 0 }
        ],
        height: [
          { validator: this.validatorHeight, trigger: 'blur', decimal: 2, min: 0 }
        ],
        weight: [
          { validator: this.validatorWeight, trigger: 'blur', decimal: 2, min: 0 }
        ],
        waist: [
          { validator: this.validatorWaist, trigger: 'blur', decimal: 2, min: 0 }
        ],
        bmi: [
          { validator: this.validatorBmi, trigger: 'blur', decimal: 2, min: 0 }
        ],
        mini_mental_state_examination: [
          { validator: this.validatorMini_mental_state_examination, trigger: 'blur', decimal: 0, min: 0 }
        ],
        elderly_depression_check: [
          { validator: this.validatorElderly_depression_check, trigger: 'blur', decimal: 0, min: 0 }
        ],
        every_hardening_time: [
          { validator: this.validatorEvery_hardening_time, trigger: 'blur', decimal: 2, min: 0 }
        ],
        insist_hardening_time: [
          { validator: this.validatorInsist_hardening_time, trigger: 'blur', decimal: 2, min: 0 }
        ],
        hardening_mode: [
          { max: 40, message: '长度小于等于40个字符', trigger: 'blur' }
        ],
        daily_smoking_quantity: [
          { validator: this.validatorDaily_smoking_quantity, trigger: 'blur', decimal: 2, min: 0 }
        ],
        begin_smoking_age: [
          { validator: this.validatorBegin_smoking_age, trigger: 'blur', decimal: 0, min: 0 }
        ],
        quit_smoking_age: [
          { validator: this.validatorQuit_smoking_age, trigger: 'blur', decimal: 0, min: 0 }
        ],
        every_alcohol_tolerance: [
          { validator: this.validatorEvery_alcohol_tolerance, trigger: 'blur', decimal: 2, min: 0 }
        ],
        dry_out_age: [
          { validator: this.validatorDry_out_age, trigger: 'blur', decimal: 0, min: 0 }
        ],
        begin_drink_age: [
          { validator: this.validatorBegin_drink_age, trigger: 'blur', decimal: 0, min: 0 }
        ],
        drink_others_str: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        occupational_disease_work_time: [
          { validator: this.validatorOccupational_disease_work_time, trigger: 'blur', decimal: 2, min: 0 }
        ],
        hazard_name_dust: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_dust: [
          { validator: this.validatorWork_time_dust, trigger: 'blur', decimal: 1, min: 0 }
        ],
        hazard_name_rad: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_rad: [
          { validator: this.validatorWork_time_rad, trigger: 'blur', decimal: 1, min: 0 }
        ],
        hazard_name_phy: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_phy: [
          { validator: this.validatorWork_time_phy, trigger: 'blur', decimal: 1, min: 0 }
        ],
        hazard_name_che: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_che: [
          { validator: this.validatorWork_time_che, trigger: 'blur', decimal: 1, min: 0 }
        ],
        hazard_name_oth: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_oth: [
          { validator: this.validatorWork_time_oth, trigger: 'blur', decimal: 1, min: 0 }
        ],
        miss_teeth_1: [
          { validator: this.validatorMiss_teeth_1, trigger: 'blur', decimal: 0, min: 0 }
        ],
        miss_teeth_2: [
          { validator: this.validatorMiss_teeth_2, trigger: 'blur', decimal: 0, min: 0 }
        ],
        miss_teeth_3: [
          { validator: this.validatorMiss_teeth_3, trigger: 'blur', decimal: 0, min: 0 }
        ],
        miss_teeth_4: [
          { validator: this.validatorMiss_teeth_4, trigger: 'blur', decimal: 0, min: 0 }
        ],
        dental_cary_1: [
          { validator: this.validatorDental_cary_1, trigger: 'blur', decimal: 0, min: 0 }
        ],
        dental_cary_2: [
          { validator: this.validatorDental_cary_2, trigger: 'blur', decimal: 0, min: 0 }
        ],
        dental_cary_3: [
          { validator: this.validatorDental_cary_3, trigger: 'blur', decimal: 0, min: 0 }
        ],
        dental_cary_4: [
          { validator: this.validatorDental_cary_4, trigger: 'blur', decimal: 0, min: 0 }
        ],
        denture_1: [
          { validator: this.validatorDenture_1, trigger: 'blur', decimal: 0, min: 0 }
        ],
        denture_2: [
          { validator: this.validatorDenture_2, trigger: 'blur', decimal: 0, min: 0 }
        ],
        denture_3: [
          { validator: this.validatorDenture_3, trigger: 'blur', decimal: 0, min: 0 }
        ],
        denture_4: [
          { validator: this.validatorDenture_4, trigger: 'blur', decimal: 0, min: 0 }
        ],
        vision_left_eye: [
          { validator: this.validatorVision_left_eye, trigger: 'blur', decimal: 2, min: 0 }
        ],
        vision_right_eye: [
          { validator: this.validatorVision_right_eye, trigger: 'blur', decimal: 2, min: 0 }
        ],
        straighten_vision_left_eye: [
          { validator: this.validatorStraighten_vision_left_eye, trigger: 'blur', decimal: 2, min: 0 }
        ],
        straighten_vision_right_eye: [
          { validator: this.validatorStraighten_vision_right_eye, trigger: 'blur', decimal: 2, min: 0 }
        ],
        eyeground_exception: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        skin_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        sclera_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        lymph_node_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        lung_breath_sound_excep: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        lung_rhonchus_exception: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        heart_rate: [
          { validator: this.validatorHeart_rate, trigger: 'blur', decimal: 2, min: 0 }
        ],
        cardiac_rhythm: [
          { validator: this.validatorCardiac_rhythm, trigger: 'blur', decimal: 2, min: 0 }
        ],
        cardiac_souffle_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        abdo_press_pain_oth: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        abdo_masses_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        abdo_hepatomegaly_oth: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        abdo_splenomegaly_oth: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        abdo_shifting_dull_oth: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        fundament_fingerp_oth: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        breast_others_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        vulva_exception: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        vagina_exception: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        cervix_exception: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        corpus_exception: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        attachment_exception: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        physical_examination_oth: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        hemoglobin: [
          { validator: this.validatorHemoglobin, trigger: 'blur', decimal: 2, min: 0 }
        ],
        leukocyte: [
          { validator: this.validatorLeukocyte, trigger: 'blur', decimal: 2, min: 0 }
        ],
        platelet: [
          { validator: this.validatorPlatelet, trigger: 'blur', decimal: 2, min: 0 }
        ],
        blood_routine_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        proteinuria: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        urine_sugar: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        ket: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        urinary_occult_blood: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        urine_routine_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        fasting_plasma_glucose_l: [
          { validator: this.validatorFasting_plasma_glucose_l, trigger: 'blur', decimal: 3, min: 0 }
        ],
        fasting_plasma_glucose_dl: [
          { validator: this.validatorFasting_plasma_glucose_dl, trigger: 'blur', decimal: 3, min: 0 }
        ],
        electrocardiogram_excep: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        microalbuminuria: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        glycolated_hemoglobin: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        liver_function_salt: [
          { validator: this.validatorLiver_function_salt, trigger: 'blur', decimal: 3, min: 0 }
        ],
        liver_function_sgot: [
          { validator: this.validatorLiver_function_sgot, trigger: 'blur', decimal: 3, min: 0 }
        ],
        liver_function_albumin: [
          { validator: this.validatorLiver_function_albumin, trigger: 'blur', decimal: 3, min: 0 }
        ],
        liver_function_total_bilirubin: [
          { validator: this.validatorLiver_function_total_bilirubin, trigger: 'blur', decimal: 3, min: 0 }
        ],
        liver_function_cb: [
          { validator: this.validatorLiver_function_cb, trigger: 'blur', decimal: 3, min: 0 }
        ],
        renal_function_creatinine: [
          { validator: this.validatorRenal_function_creatinine, trigger: 'blur', decimal: 3, min: 0 }
        ],
        renal_function_bun: [
          { validator: this.validatorRenal_function_bun, trigger: 'blur', decimal: 3, min: 0 }
        ],
        renal_function_blood_potassium: [
          { validator: this.validatorRenal_function_blood_potassium, trigger: 'blur', decimal: 3, min: 0 }
        ],
        renal_function_natremia: [
          { validator: this.validatorRenal_function_natremia, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_fat_tc: [
          { validator: this.validatorBlood_fat_tc, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_fat_triglyceride: [
          { validator: this.validatorBlood_fat_triglyceride, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_fat_ldlc: [
          { validator: this.validatorBlood_fat_ldlc, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_fat_hdlc: [
          { validator: this.validatorBlood_fat_hdlc, trigger: 'blur', decimal: 3, min: 0 }
        ],
        cxr_exception: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        type_b_ultrasonic_excep: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        cervical_pap_smears_excep: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        assistant_inves_oth: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        random_glucose: [
          { validator: this.validatorRandom_glucose, trigger: 'blur', decimal: 3, min: 0 }
        ],
        lungs_content: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        heart_content: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        abdomen_content: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        liver_fun_alb_all: [
          { validator: this.validatorLiver_fun_alb_all, trigger: 'blur', decimal: 3, min: 0 }
        ],
        wbc_1: [
          { validator: this.validatorWbc_1, trigger: 'blur', decimal: 3, min: 0 }
        ],
        wbc_2: [
          { validator: this.validatorWbc_2, trigger: 'blur', decimal: 3, min: 0 }
        ],
        wbc_3: [
          { validator: this.validatorWbc_3, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_uric_acid: [
          { validator: this.validatorBlood_uric_acid, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_high_rate: [
          { validator: this.validatorBlood_rheology_high_rate, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_high_rate_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_middle_rate: [
          { validator: this.validatorBlood_rheology_middle_rate, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_middle_rate_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_low_rate: [
          { validator: this.validatorBlood_rheology_low_rate, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_low_rate_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_viscosity: [
          { validator: this.validatorBlood_rheology_viscosity, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_viscosity_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_sedi: [
          { validator: this.validatorBlood_rheology_sedi, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_sedi_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_hematocrit: [
          { validator: this.validatorBlood_rheology_hematocrit, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_hematocrit_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_h_relative: [
          { validator: this.validatorBlood_rheology_h_relative, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_h_relative_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_l_relative: [
          { validator: this.validatorBlood_rheology_l_relative, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_l_relative_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_equationk: [
          { validator: this.validatorBlood_rheology_equationk, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_equationk_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_aggregation: [
          { validator: this.validatorBlood_rheology_aggregation, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_aggregation_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_l_reduced: [
          { validator: this.validatorBlood_rheology_l_reduced, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_l_reduced_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_h_reduced: [
          { validator: this.validatorBlood_rheology_h_reduced, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_h_reduced_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_r_cell: [
          { validator: this.validatorBlood_rheology_r_cell, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_r_cell_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_r_cell_tk: [
          { validator: this.validatorBlood_rheology_r_cell_tk, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_r_cell_tk_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        urine_routine_white_cell: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        urine_routine_bilirubin: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        urine_routine_urobilinogen: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        urine_routine_ph_value: [
          { validator: this.validatorUrine_routine_ph_value, trigger: 'blur', decimal: 2 }
        ],
        urine_routine_proportionof: [
          { validator: this.validatorUrine_routine_proportionof, trigger: 'blur', decimal: 3 }
        ],
        urine_routine_nitrite: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        renal_failure_uric_acid: [
          { validator: this.validatorRenal_failure_uric_acid, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_routine_red_cell: [
          { validator: this.validatorBlood_routine_red_cell, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_routine_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        glucose_routine_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        urine_routine_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        elect_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        mic_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        stool_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        glycolated_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        hbsag_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        liver_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        renal_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        blood_fat_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        cxr_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        type_b_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        cervical_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        xns_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        xlb_outside_others: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        blood_rheology_hx: [
          { max: 250, message: '长度小于等于250个字符', trigger: 'blur' }
        ],
        fibrinogen: [
          { validator: this.validatorFibrinogen, trigger: 'blur', decimal: 3 }
        ],
        fibrinogen_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        type_b_ultrasonic_excep_qt: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        cvd_others_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        renal_others_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        heart_others_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        angiosis_others_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        eye_disease_others_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        nervous_system_disease_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        others_system_disease_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        enmedis_other: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        team_id_name: [
          { required: true, message: '请输入管理团队名称', trigger: 'blur' }
        ]
      },
      disabledFlag: {
        disabled_symptom_headache: true,
        disabled_symptom_dizziness: true,
        disabled_symptom_palpitation: true,
        disabled_symptom_chest_stuffiness: true,
        disabled_symptom_chest_pain: true,
        disabled_symptom_chronic_cough: true,
        disabled_symptom_expectoration: true,
        disabled_symptom_dyspnea: true,
        disabled_symptom_polydipsia: true,
        disabled_symptom_polyuria: true,
        disabled_symptom_weight_loss: true,
        disabled_symptom_lack_of_power: true,
        disabled_symptom_joint_gall: true,
        disabled_symptom_blurred_vision: true,
        disabled_symptom_hand_foot_numbness: true,
        disabled_symptom_urinary_urgency: true,
        disabled_symptom_dysuria: true,
        disabled_symptom_constipation: true,
        disabled_symptom_diarrhea: true,
        disabled_symptom_nausea_vomiting: true,
        disabled_symptom_dazzle: true,
        disabled_symptom_tinnitus: true,
        disabled_symptom_breast_bursting: true,
        disabled_symptom_other: true,
        disabled_symptom_other_str: true,
        disabled_poison_dust: true,
        disabled_poison_dust_ispre: true,
        disabled_poison_radiogen: true,
        disabled_poison_radiogen_ispre: true,
        disabled_poison_physicalfactor: true,
        disabled_poison_physical_ispre: true,
        disabled_poison_chemical: true,
        disabled_poison_chemical_ispre: true,
        disabled_poison_others: true,
        disabled_poison_others_ispre: true,
        disabled_occ_haz_history_1: true,
        disabled_hazard_name_dust: true,
        disabled_work_time_dust: true,
        disabled_occ_haz_history_2: true,
        disabled_hazard_name_rad: true,
        disabled_work_time_rad: true,
        disabled_occ_haz_history_3: true,
        disabled_hazard_name_phy: true,
        disabled_work_time_phy: true,
        disabled_occ_haz_history_4: true,
        disabled_hazard_name_che: true,
        disabled_work_time_che: true,
        disabled_occ_haz_history_5: true,
        disabled_hazard_name_oth: true,
        disabled_work_time_oth: true,
        disabled_miss_teeth: true,
        disabled_miss_teeth_1: true,
        disabled_miss_teeth_2: true,
        disabled_miss_teeth_3: true,
        disabled_miss_teeth_4: true,
        disabled_dental_cary: true,
        disabled_dental_cary_1: true,
        disabled_dental_cary_2: true,
        disabled_dental_cary_3: true,
        disabled_dental_cary_4: true,
        disabled_denture: true,
        disabled_denture_1: true,
        disabled_denture_2: true,
        disabled_denture_3: true,
        disabled_denture_4: true,
        disabled_breast_mastectomy: true,
        disabled_breast_abnormal_lactation: true,
        disabled_breast_masses: true,
        disabled_breast_others: true,
        disabled_breast_others_str: true,
        disabled_cvd_ischemic_stroke: true,
        disabled_cvd_cerebral_hemorrhage: true,
        disabled_cvd_sah: true,
        disabled_cvd_tia: true,
        disabled_cvd_others: true,
        disabled_cvd_others_str: true,
        disabled_renal_dn: true,
        disabled_renal_failure: true,
        disabled_renal_agn: true,
        disabled_renal_cgn: true,
        disabled_renal_others: true,
        disabled_renal_others_str: true,
        disabled_heart_myocardial_infarction: true,
        disabled_heart_angina_pectoris: true,
        disabled_heart_coronary_artery: true,
        disabled_heart_chf: true,
        disabled_heart_precordialpain: true,
        disabled_heart_others: true,
        disabled_heart_others_str: true,
        disabled_angiosis_da: true,
        disabled_angiosis_occlusion_arteries: true,
        disabled_angiosis_others: true,
        disabled_angiosis_others_str: true,
        disabled_retinal_hemorrhage: true,
        disabled_papilledema: true,
        disabled_eye_disease_cataract: true,
        disabled_eye_disease_others: true,
        disabled_eye_disease_others_str: true,
        disabled_create_operator_name: true,
        disabled_team_id_name: true,
      },
      readonlyFlag: {
        readonly_medical_operator_name: true,
        readonly_main_doctors_name: true
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
      if (parm != null && parm.record != null && parm.record.medicalNo != null) {
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
      if (result.columnName === 'hardening_mode') {
        this.form.hardening_mode = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drink_others_str') {
        this.form.drink_others_str = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'poison_dust') {
        this.form.poison_dust = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'poison_radiogen') {
        this.form.poison_radiogen = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'poison_physicalfactor') {
        this.form.poison_physicalfactor = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'poison_chemical') {
        this.form.poison_chemical = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'poison_others') {
        this.form.poison_others = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'eyeground_exception') {
        this.form.eyeground_exception = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'skin_others') {
        this.form.skin_others = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'sclera_others') {
        this.form.sclera_others = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'lymph_node_others') {
        this.form.lymph_node_others = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'blood_routine_others') {
        this.form.blood_routine_others = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'urine_routine_others') {
        this.form.urine_routine_others = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'type_b_ultrasonic_excep') {
        this.form.type_b_ultrasonic_excep = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'cervical_pap_smears_excep') {
        this.form.cervical_pap_smears_excep = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'assistant_inves_oth') {
        this.form.assistant_inves_oth = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'type_b_ultrasonic_excep_qt') {
        this.form.type_b_ultrasonic_excep_qt = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'cvd_others_str') {
        this.form.cvd_others_str = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'renal_others_str') {
        this.form.renal_others_str = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'heart_others_str') {
        this.form.heart_others_str = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'angiosis_others_str') {
        this.form.angiosis_others_str = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'eye_disease_others_str') {
        this.form.eye_disease_others_str = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'others_system_disease_str') {
        this.form.others_system_disease_str = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'enmedis_other') {
        this.form.enmedis_other = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'inhospital_cause1') {
        this.form.inhospital_cause1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'inhospital_org_name1') {
        this.form.inhospital_org_name1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'inhospital_cause2') {
        this.form.inhospital_cause2 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'inhospital_org_name2') {
        this.form.inhospital_org_name2 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'fp_cause1') {
        this.form.fp_cause1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'fp_org_name1') {
        this.form.fp_org_name1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_name1') {
        this.form.drug_name1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_name2') {
        this.form.drug_name2 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_name3') {
        this.form.drug_name3 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_name4') {
        this.form.drug_name4 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_name5') {
        this.form.drug_name5 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_name6') {
        this.form.drug_name6 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_usage1') {
        this.form.drug_usage1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_usage2') {
        this.form.drug_usage2 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_usage3') {
        this.form.drug_usage3 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_usage4') {
        this.form.drug_usage4 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_usage5') {
        this.form.drug_usage5 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_usage6') {
        this.form.drug_usage6 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_dosage1') {
        this.form.drug_dosage1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_dosage2') {
        this.form.drug_dosage2 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_dosage3') {
        this.form.drug_dosage3 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_dosage4') {
        this.form.drug_dosage4 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_dosage5') {
        this.form.drug_dosage5 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'drug_dosage6') {
        this.form.drug_dosage6 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'ni_vaccination_name1') {
        this.form.ni_vaccination_name1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'ni_vaccination_name2') {
        this.form.ni_vaccination_name2 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'ni_vaccination_name3') {
        this.form.ni_vaccination_name3 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'ni_vaccination_org1') {
        this.form.ni_vaccination_org1 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'ni_vaccination_org2') {
        this.form.ni_vaccination_org2 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'ni_vaccination_org3') {
        this.form.ni_vaccination_org3 = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'medical_operator_name') {
        this.form.medical_operator_name = result.label
        this.form.medicalOperator = result.value
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
      if (result.columnName === 'main_doctors_name') {
        this.form.main_doctors_name = result.label
        this.form.mainDoctors = result.value
        this.$forceUpdate()
      }
    },
    validatorBody_temperature (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorPulse_frequency (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorRespiratory_rate (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_pressure_left_d (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_pressure_left_u (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_pressure_rigth_d (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_pressure_rigth_u (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_pre_sec_d (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_pre_sec_u (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_pre_thr_d (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_pre_thr_u (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorHeight (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWeight (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWaist (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBmi (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorMini_mental_state_examination (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorElderly_depression_check (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorEvery_hardening_time (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorInsist_hardening_time (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDaily_smoking_quantity (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBegin_smoking_age (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorQuit_smoking_age (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorEvery_alcohol_tolerance (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDry_out_age (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBegin_drink_age (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorOccupational_disease_work_time (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWork_time_dust (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWork_time_rad (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWork_time_phy (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWork_time_che (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWork_time_oth (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorMiss_teeth_1 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorMiss_teeth_2 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorMiss_teeth_3 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorMiss_teeth_4 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDental_cary_1 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDental_cary_2 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDental_cary_3 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDental_cary_4 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDenture_1 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDenture_2 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDenture_3 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorDenture_4 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorVision_left_eye (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorVision_right_eye (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorStraighten_vision_left_eye (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorStraighten_vision_right_eye (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorHeart_rate (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorCardiac_rhythm (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorHemoglobin (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorLeukocyte (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorPlatelet (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorFasting_plasma_glucose_l (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorFasting_plasma_glucose_dl (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorLiver_function_salt (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorLiver_function_sgot (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorLiver_function_albumin (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorLiver_function_total_bilirubin (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorLiver_function_cb (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorRenal_function_creatinine (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorRenal_function_bun (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorRenal_function_blood_potassium (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorRenal_function_natremia (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_fat_tc (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_fat_triglyceride (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_fat_ldlc (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_fat_hdlc (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorRandom_glucose (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorLiver_fun_alb_all (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWbc_1 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWbc_2 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorWbc_3 (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_uric_acid (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_high_rate (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_middle_rate (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_low_rate (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_viscosity (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_sedi (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_hematocrit (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_h_relative (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_l_relative (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_equationk (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_aggregation (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_l_reduced (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_h_reduced (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_r_cell (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_rheology_r_cell_tk (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorUrine_routine_ph_value (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorUrine_routine_proportionof (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorRenal_failure_uric_acid (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorBlood_routine_red_cell (rule, value, callback) {
      var result = this.Util.validationNumber(value, rule)
      if (result.status === 'error') {
        callback(new Error(result.message))
      } else {
        callback()
      }
    },
    validatorFibrinogen (rule, value, callback) {
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
      me.formInit()
    },
    recordEdit (parm) {
      var me = this
      me.resetForm('elForm')
      me.fromDataLoading = true
      me.axiosPost(
        '/HygieneSickMedical/getForm',
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
        '/HygieneSickMedical/deleteRecord',
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
        '/HygieneSickMedical/saveRecord',
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
          if (me.form.medicalNo == null || me.form.medicalNo === '') {
            me.form.medicalNo = response.data.data.text
          }
          if (me.formSaveCallback) {
            me.formSaveCallback('HygieneSickMedical', me.form)
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
