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
        wbc_1_yj: '',
        wbc_2_yj: '',
        wbc_3_yj: '',
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
        is_examination_excep: null,
        examination_excep1: '',
        examination_excep2: '',
        examination_excep3: '',
        examination_excep4: '',
        health_ass_1: null,
        health_ass_2: null,
        health_ass_3: null,
        health_ass_4: null,
        health_ass_5: null,
        health_ass_6: null,
        health_ass_7: '',
        health_ass_8: '',
        health_ass_9: '',
        health_guidance_slow_disease: null,
        health_guidance_inhospital: null,
        health_guidance_review: null,
        hazard_quit_smocking: null,
        hazard_health_drink: null,
        hazard_food: null,
        hazard_hardening: null,
        hazard_lose_weight: null,
        hazard_lose_weight_target: '',
        hazard_vaccination: null,
        hazard_vaccination_str: '',
        hazard_others: null,
        hazard_others_str: '',
        health_guidance_check: null,
        effect_manager_blood: null,
        effect_manager_diabetes: null,
        effect_manager_stroke: null,
        effect_manager_soycho: null,
        diabetes_untoward_effect: null,
        stroke_untoward_effect: null,
        soycho_untoward_effect: null,
        diabetes_syndrome: null,
        stroke_syndrome: null,
        soycho_syndrome: null,
        blood_untoward_effect: null,
        blood_syndrome: null,
        health_ass_gxf: null,
        health_ass_txf: null,
        health_ass_qtxf: null,
        health_ass_xfqt: '',
        health_ass_21: '',
        health_ass_22: '',
        health_ass_23: '',
        health_ass_24: '',
        health_ass_25: '',
        health_ass_26: '',
        health_ass_10: null,
        health_ass_11: '',
        hazard_jyw: null,
        hazard_jkjy: null,
        improve_life_way: '',
        health_guidance_other: '',
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
          { validator: this.validationNumber, trigger: 'blur', decimal: 1, min: 35, max: 42 }
        ],
        pulse_frequency: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 40, max: 180 }
        ],
        respiratory_rate: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 10, max: 50 }
        ],
        blood_pressure_left_d: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 30, max: 150 }
        ],
        blood_pressure_left_u: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 70, max: 300 }
        ],
        blood_pressure_rigth_d: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 30, max: 150 }
        ],
        blood_pressure_rigth_u: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 70, max: 300 }
        ],
        blood_pre_sec_d: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pre_sec_u: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pre_thr_d: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        blood_pre_thr_u: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        height: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 40, max: 250 }
        ],
        weight: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 10, max: 150 }
        ],
        waist: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 40, max: 200 }
        ],
        bmi: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        mini_mental_state_examination: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        elderly_depression_check: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        every_hardening_time: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        insist_hardening_time: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        hardening_mode: [
          { max: 40, message: '长度小于等于40个字符', trigger: 'blur' }
        ],
        daily_smoking_quantity: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        begin_smoking_age: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        quit_smoking_age: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        every_alcohol_tolerance: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        dry_out_age: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        begin_drink_age: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        drink_others_str: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        occupational_disease_work_time: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        hazard_name_dust: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_dust: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 1, min: 0 }
        ],
        hazard_name_rad: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_rad: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 1, min: 0 }
        ],
        hazard_name_phy: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_phy: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 1, min: 0 }
        ],
        hazard_name_che: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_che: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 1, min: 0 }
        ],
        hazard_name_oth: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        work_time_oth: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 1, min: 0 }
        ],
        miss_teeth_1: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        miss_teeth_2: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        miss_teeth_3: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        miss_teeth_4: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        dental_cary_1: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        dental_cary_2: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        dental_cary_3: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        dental_cary_4: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        denture_1: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        denture_2: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        denture_3: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        denture_4: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 0, min: 0 }
        ],
        vision_left_eye: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0, max: 5.3 }
        ],
        vision_right_eye: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0, max: 5.3 }
        ],
        straighten_vision_left_eye: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0, max: 5.3 }
        ],
        straighten_vision_right_eye: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0, max: 5.3 }
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
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        cardiac_rhythm: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
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
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        leukocyte: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        platelet: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
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
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        fasting_plasma_glucose_dl: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
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
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        liver_function_sgot: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        liver_function_albumin: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        liver_function_total_bilirubin: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        liver_function_cb: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        renal_function_creatinine: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        renal_function_bun: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        renal_function_blood_potassium: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        renal_function_natremia: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_fat_tc: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_fat_triglyceride: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_fat_ldlc: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_fat_hdlc: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
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
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
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
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        wbc_1: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        wbc_2: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        wbc_3: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_uric_acid: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_high_rate: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_high_rate_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_middle_rate: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_middle_rate_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_low_rate: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_low_rate_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_viscosity: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_viscosity_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_sedi: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_sedi_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_hematocrit: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_hematocrit_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_h_relative: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_h_relative_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_l_relative: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_l_relative_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_equationk: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_equationk_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_aggregation: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_aggregation_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_l_reduced: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_l_reduced_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_h_reduced: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_h_reduced_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_r_cell: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_rheology_r_cell_un: [
          { max: 10, message: '长度小于等于10个字符', trigger: 'blur' }
        ],
        blood_rheology_r_cell_tk: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
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
          { validator: this.validationNumber, trigger: 'blur', decimal: 2 }
        ],
        urine_routine_proportionof: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3 }
        ],
        urine_routine_nitrite: [
          { max: 50, message: '长度小于等于50个字符', trigger: 'blur' }
        ],
        renal_failure_uric_acid: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
        ],
        blood_routine_red_cell: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 3, min: 0 }
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
          { validator: this.validationNumber, trigger: 'blur', decimal: 3 }
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
        hazard_lose_weight_target: [
          { validator: this.validationNumber, trigger: 'blur', decimal: 2, min: 0 }
        ],
        hazard_vaccination_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        hazard_others_str: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        health_ass_xfqt: [
          { max: 100, message: '长度小于等于100个字符', trigger: 'blur' }
        ],
        health_ass_21: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
        ],
        health_ass_22: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
        ],
        health_ass_23: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
        ],
        health_ass_24: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
        ],
        health_ass_25: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
        ],
        health_ass_26: [
          { max: 200, message: '长度小于等于200个字符', trigger: 'blur' }
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
        disabled_every_hardening_time: true,
        disabled_insist_hardening_time: true,
        disabled_hardening_mode: true,
        disabled_daily_smoking_quantity: true,
        disabled_begin_smoking_age: true,
        disabled_quit_smoking_age: true,
        disabled_every_alcohol_tolerance: true,
        disabled_is_dry_out: true,
        disabled_dry_out_age: true,
        disabled_begin_drink_age: true,
        disabled_one_year_is_temulentia: true,
        disabled_drink_white_spirits: true,
        disabled_drink_beer: true,
        disabled_drink_red_wine: true,
        disabled_drink_yellow_wine: true,
        disabled_drink_others: true,
        disabled_drink_others_str: true,
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
        disabled_eyeground_exception: true,
        disabled_skin_others: true,
        disabled_sclera_others: true,
        disabled_lymph_node_others: true,
        disabled_lung_breath_sound_excep: true,
        disabled_lung_rhonchus_exception: true,
        disabled_cardiac_souffle_others: true,
        disabled_abdo_press_pain_oth: true,
        disabled_abdo_masses_others: true,
        disabled_abdo_hepatomegaly_oth: true,
        disabled_abdo_splenomegaly_oth: true,
        disabled_abdo_shifting_dull_oth: true,
        disabled_fundament_fingerp_oth: true,
        disabled_breast_mastectomy: true,
        disabled_breast_abnormal_lactation: true,
        disabled_breast_masses: true,
        disabled_breast_others: true,
        disabled_breast_others_str: true,
        disabled_vulva_exception: true,
        disabled_vagina_exception: true,
        disabled_cervix_exception: true,
        disabled_corpus_exception: true,
        disabled_attachment_exception: true,
        disabled_electrocardiogram_excep: true,
        disabled_cxr_exception: true,
        disabled_type_b_ultrasonic_excep: true,
        disabled_cervical_pap_smears_excep: true,
        disabled_glucose_noallow: true,
        disabled_electrocardiogram_noallow: true,
        disabled_blood_routine_noallow: true,
        disabled_urine_routine_noallow: true,
        disabled_blood_fat_noallow: true,
        disabled_renal_function_noallow: true,
        disabled_liver_function_noallow: true,
        disabled_glycolated_hemoglobin_noallow: true,
        disabled_cxr_noallow: true,
        disabled_type_b_ultrasonic_noallow: true,
        disabled_microalbuminuria_noallow: true,
        disabled_stool_occult_blood_noallow: true,
        disabled_cervical_pap_smears_noallow: true,
        disabled_hbsag_noallow: true,
        disabled_blood_uric_acid_noallow: true,
        disabled_blood_rheology_noallow: true,
        disabled_blood_routine_outside_others: true,
        disabled_glucose_routine_outside_others: true,
        disabled_urine_routine_outside_others: true,
        disabled_elect_outside_others: true,
        disabled_mic_outside_others: true,
        disabled_stool_outside_others: true,
        disabled_glycolated_outside_others: true,
        disabled_hbsag_outside_others: true,
        disabled_liver_outside_others: true,
        disabled_renal_outside_others: true,
        disabled_blood_fat_outside_others: true,
        disabled_cxr_outside_others: true,
        disabled_type_b_outside_others: true,
        disabled_cervical_outside_others: true,
        disabled_xns_outside_others: true,
        disabled_xlb_outside_others: true,
        disabled_type_b_ultrasonic_excep_qt: true,
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
        disabled_nervous_system_disease_str: true,
        disabled_others_system_disease_str: true,
        disabled_enmedis_other: true,
        disabled_hazard_lose_weight_target: true,
        disabled_hazard_vaccination_str: true,
        disabled_hazard_others_str: true,
        disabled_health_ass_gxf: true,
        disabled_health_ass_txf: true,
        disabled_health_ass_qtxf: true,
        disabled_health_ass_xfqt: true,
        disabled_health_ass_21: true,
        disabled_health_ass_22: true,
        disabled_health_ass_23: true,
        disabled_health_ass_24: true,
        disabled_health_ass_25: true,
        disabled_health_ass_26: true,
        disabled_create_operator_name: true,
        disabled_team_id_name: true
      },
      readonlyFlag: {
        readonly_bmi: true,
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
      if (parm != null && parm.record != null && parm.record.medical_no != null) {
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
      if (result.columnName === 'proteinuria') {
        this.form.proteinuria = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'urine_sugar') {
        this.form.urine_sugar = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'ket') {
        this.form.ket = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'urinary_occult_blood') {
        this.form.urinary_occult_blood = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'urine_routine_others') {
        this.form.urine_routine_others = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'electrocardiogram_excep') {
        this.form.electrocardiogram_excep = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'cxr_exception') {
        this.form.cxr_exception = result.label
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
      if (result.columnName === 'nervous_system_disease_str') {
        this.form.nervous_system_disease_str = result.label
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
      if (result.columnName === 'fp_org_name2') {
        this.form.fp_org_name2 = result.label
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
      if (result.columnName === 'hazard_vaccination_str') {
        this.form.hazard_vaccination_str = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'hazard_others_str') {
        this.form.hazard_others_str = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'health_ass_xfqt') {
        this.form.health_ass_xfqt = result.label
        this.$forceUpdate()
      }
      if (result.columnName === 'medical_operator_name') {
        this.form.medical_operator_name = result.label
        this.form.medical_operator = result.value
        this.$forceUpdate()
      }
      if (result.columnName === 'create_operator_name') {
        this.form.create_operator_name = result.label
        this.form.create_operator = result.value
        this.$forceUpdate()
      }
      if (result.columnName === 'team_id_name') {
        this.form.team_id_name = result.label
        this.form.team_id = result.value
        this.$forceUpdate()
      }
      if (result.columnName === 'main_doctors_name') {
        this.form.main_doctors_name = result.label
        this.form.main_doctors = result.value
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
      me.form.medical_operator = userInfo.staffCode
      me.form.medical_operator_name = userInfo.staffName
    },
    recordAdd (parm) {
      var me = this
      me.resetForm('elForm')
      me.form.archive_id = parm.archiveId
      me.formInit()
    },
    recordEdit (parm) {
      var me = this
      me.resetForm('elForm')
      me.fromDataLoading = true
      me.axiosPost(
        '/PHHygieneSickMedical/getForm',
        parm
      ).then(function (response) {
        if (response.data.statusCode === 8200) {
          var rpdata = response.data.data
          var rpFormData = JSON.parse(rpdata)
          me.form = rpFormData[0]
          me.initFormControls()
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
        '/PHHygieneSickMedical/saveRecord',
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
          if (me.form.medical_no == null || me.form.medical_no === '') {
            me.form.medical_no = response.data.data.text
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
      var url = '/PHBaseDict/getDictByType?dictType=HygieneSickMedicalForm'
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
          'ud_select_medical_way',
          'ud_select_elderly_health_status',
          'ud_select_elderly_self_care',
          'ud_select_elderly_cognitive_fun',
          'ud_select_elderly_affective_state',
          'ud_select_hardening_frequency',
          'ud_select_smoking_circumstance',
          'ud_select_drink_frequency',
          'ud_select_is_dry_out',
          'ud_select_one_year_is_temulentia',
          'ud_select_lips',
          'ud_select_pharyngealportion',
          'ud_select_audition',
          'ud_select_motor_function',
          'ud_select_eyeground',
          'ud_select_skin',
          'ud_select_sclera',
          'ud_select_lymph_node',
          'ud_select_lung_barrel_chest',
          'ud_select_lung_breath_sound',
          'ud_select_lung_rhonchus',
          'ud_select_cardiac_rhythm',
          'ud_select_cardiac_souffle',
          'ud_select_abdo_press_pain',
          'ud_select_abdo_masses',
          'ud_select_abdo_hepatomegaly',
          'ud_select_abdo_splenomegaly',
          'ud_select_abdo_shifting_dull',
          'ud_select_immersion_foot',
          'ud_select_dorsum_of_foot_arteriopalmus',
          'ud_select_fundament_fingerp',
          'ud_select_vulva',
          'ud_select_vagina',
          'ud_select_cervix',
          'ud_select_corpus',
          'ud_select_attachment',
          'ud_select_electrocardiogram',
          'ud_select_stool_occult_blood',
          'ud_select_hbsag',
          'ud_select_cxr',
          'ud_select_type_b_ultrasonic',
          'ud_select_cervical_pap_smears',
          'ud_select_urine_routine',
          'ud_select_type_b_ultrasonic_qt',
          'ud_select_nervous_system_disease',
          'ud_select_enmedis',
          'ud_select_other_disease_no',
          'ud_select_drug_compliance1',
          'ud_select_drug_compliance2',
          'ud_select_drug_compliance3',
          'ud_select_drug_compliance4',
          'ud_select_drug_compliance6',
          'ud_select_drug_compliance5',
          'ud_select_health_ass_1'
        ]
        for (var com of refComs) {
          me.$refs[com].$emit(eventName, rpdata)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    initFormControls () {
      var me = this
      me.changeSymptomOther()
      me.changeAsymptomatic()
      me.changeHardeningFrequency()
      me.changeSmokingCircumstance()
      me.changeDrinkFrequency()
      me.changeIsDryOut()
      me.changeDrinkOthers()
      me.changeOccHazHistory0()
      me.changeOccHazHistory1()
      me.changeOccHazHistory2()
      me.changeOccHazHistory3()
      me.changeOccHazHistory4()
      me.changeOccHazHistory5()
      me.changeDentitiondenture()
      me.changeMissTeeth()
      me.changeDentalCary()
      me.changeDenture()
      me.changeEyeground()
      me.changeSkin()
      me.changeSclera()
      me.changeLymphNode()
      me.changeLungBreathSound()
      me.changeLungRhonchus()
      me.changeCardiacSouffle()
      me.changeAbdoPressPain()
      me.changeAbdoMasses()
      me.changeAbdoHepatomegaly()
      me.changeAbdoSplenomegaly()
      me.changeAbdoShiftingDull()
      me.changeFundamentFingerp()
      me.changeBreastNotTroubleFind()
      me.changeBreastOthers()
      me.changeVulva()
      me.changeVagina()
      me.changeCervix()
      me.changeCorpus()
      me.changeAttachment()
      me.changeElectrocardiogram()
      me.changeCxr()
      me.changeCxrOutside()
      me.changeTypeBUltrasonic()
      me.changeCervicalPapSmears()
      me.changeGlucoseOutside()
      me.changeElectrocardiogramOutside()
      me.changeBloodRoutineOutside()
      me.changeUrineRoutineOutside()
      me.changeBloodFatOutside()
      me.changeRenalFunctionOutside()
      me.changeLiverFunctionOutside()
      me.changeGlycolatedHemoglobinOutside()
      me.changeTypeBUltrasonicOutside()
      me.changeMicroalbuminuriaOutside()
      me.changeStoolOccultBloodOutside()
      me.changeCervicalPapSmearsOutside()
      me.changeBloodUricAcidOutside()
      me.changeBloodRheologyOutside()
      me.changeTypeBUltrasonicQt()
      me.changeCvdUndiscovered()
      me.changeCvdOthers()
      me.changeRenalUndiscovered()
      me.changeRenalOthers()
      me.changeHeartUndiscovered()
      me.changeHeartOthers()
      me.changeAngiosisUndiscovered()
      me.changeAngiosisOthers()
      me.changeEyeDiseaseUndiscovered()
      me.changeEyeDiseaseOthers()
      me.changeNervousSystemDisease()
      me.changeEnmedis()
      me.changeHealthAss1()
      me.changeHazardLoseWeight()
      me.changeHazardVaccination()
      me.changeHazardOthers()
      me.changeHealthAssQtxf()
      me.changeHbsagOutside()
      me.changeOtherDiseaseNo()
    },
    changeSymptomOther () {
      var me = this
      if (me.form.symptom_other === 0) {
        me.form.symptom_other_str = ''
        me.disabledFlag.disabled_symptom_other_str = true
      } else if (me.form.symptom_other === 1) {
        me.disabledFlag.disabled_symptom_other_str = false
      }
    },
    changeAsymptomatic () {
      var me = this
      if (me.form.asymptomatic === 0) {
        me.disabledFlag.disabled_symptom_headache = false
        me.disabledFlag.disabled_symptom_dizziness = false
        me.disabledFlag.disabled_symptom_palpitation = false
        me.disabledFlag.disabled_symptom_chest_stuffiness = false
        me.disabledFlag.disabled_symptom_chest_pain = false
        me.disabledFlag.disabled_symptom_chronic_cough = false
        me.disabledFlag.disabled_symptom_expectoration = false
        me.disabledFlag.disabled_symptom_dyspnea = false
        me.disabledFlag.disabled_symptom_polydipsia = false
        me.disabledFlag.disabled_symptom_polyuria = false
        me.disabledFlag.disabled_symptom_weight_loss = false
        me.disabledFlag.disabled_symptom_lack_of_power = false
        me.disabledFlag.disabled_symptom_joint_gall = false
        me.disabledFlag.disabled_symptom_blurred_vision = false
        me.disabledFlag.disabled_symptom_hand_foot_numbness = false
        me.disabledFlag.disabled_symptom_urinary_urgency = false
        me.disabledFlag.disabled_symptom_dysuria = false
        me.disabledFlag.disabled_symptom_constipation = false
        me.disabledFlag.disabled_symptom_diarrhea = false
        me.disabledFlag.disabled_symptom_nausea_vomiting = false
        me.disabledFlag.disabled_symptom_dazzle = false
        me.disabledFlag.disabled_symptom_tinnitus = false
        me.disabledFlag.disabled_symptom_breast_bursting = false
        me.disabledFlag.disabled_symptom_other = false
      } else if (me.form.asymptomatic === 1) {
        me.form.symptom_headache = 0
        me.form.symptom_dizziness = 0
        me.form.symptom_palpitation = 0
        me.form.symptom_chest_stuffiness = 0
        me.form.symptom_chest_pain = 0
        me.form.symptom_chronic_cough = 0
        me.form.symptom_expectoration = 0
        me.form.symptom_dyspnea = 0
        me.form.symptom_polydipsia = 0
        me.form.symptom_polyuria = 0
        me.form.symptom_weight_loss = 0
        me.form.symptom_lack_of_power = 0
        me.form.symptom_joint_gall = 0
        me.form.symptom_blurred_vision = 0
        me.form.symptom_hand_foot_numbness = 0
        me.form.symptom_urinary_urgency = 0
        me.form.symptom_dysuria = 0
        me.form.symptom_constipation = 0
        me.form.symptom_diarrhea = 0
        me.form.symptom_nausea_vomiting = 0
        me.form.symptom_dazzle = 0
        me.form.symptom_tinnitus = 0
        me.form.symptom_breast_bursting = 0
        me.form.symptom_other = 0
        me.form.symptom_other_str = ''
        me.disabledFlag.disabled_symptom_headache = true
        me.disabledFlag.disabled_symptom_dizziness = true
        me.disabledFlag.disabled_symptom_palpitation = true
        me.disabledFlag.disabled_symptom_chest_stuffiness = true
        me.disabledFlag.disabled_symptom_chest_pain = true
        me.disabledFlag.disabled_symptom_chronic_cough = true
        me.disabledFlag.disabled_symptom_expectoration = true
        me.disabledFlag.disabled_symptom_dyspnea = true
        me.disabledFlag.disabled_symptom_polydipsia = true
        me.disabledFlag.disabled_symptom_polyuria = true
        me.disabledFlag.disabled_symptom_weight_loss = true
        me.disabledFlag.disabled_symptom_lack_of_power = true
        me.disabledFlag.disabled_symptom_joint_gall = true
        me.disabledFlag.disabled_symptom_blurred_vision = true
        me.disabledFlag.disabled_symptom_hand_foot_numbness = true
        me.disabledFlag.disabled_symptom_urinary_urgency = true
        me.disabledFlag.disabled_symptom_dysuria = true
        me.disabledFlag.disabled_symptom_constipation = true
        me.disabledFlag.disabled_symptom_diarrhea = true
        me.disabledFlag.disabled_symptom_nausea_vomiting = true
        me.disabledFlag.disabled_symptom_dazzle = true
        me.disabledFlag.disabled_symptom_tinnitus = true
        me.disabledFlag.disabled_symptom_breast_bursting = true
        me.disabledFlag.disabled_symptom_other = true
      }
    },
    changeHeight () {
      var me = this
      me.setBmi()
    },
    changeWeight () {
      var me = this
      me.setBmi()
    },
    setBmi () {
      var me = this
      if (me.form.height > 0 && me.form.weight > 0) {
        var height = parseInt(me.form.height)
        var weight = parseInt(me.form.weight)
        height = height / 100
        me.form.bmi = parseFloat(weight / (height * height)).toFixed(2)
      } else {
        me.form.bmi = null
      }
    },
    changeHardeningFrequency () {
      var me = this
      if (me.form.hardening_frequency === 4) {
        me.form.every_hardening_time = null
        me.form.insist_hardening_time = null
        me.form.hardening_mode = null
        me.disabledFlag.disabled_every_hardening_time = true
        me.disabledFlag.disabled_insist_hardening_time = true
        me.disabledFlag.disabled_hardening_mode = true
      } else if (me.form.hardening_frequency >= 1 && me.form.hardening_frequency <= 3) {
        me.disabledFlag.disabled_every_hardening_time = false
        me.disabledFlag.disabled_insist_hardening_time = false
        me.disabledFlag.disabled_hardening_mode = false
      }
    },
    changeSmokingCircumstance () {
      var me = this
      if (me.form.smoking_circumstance === 1) {
        me.form.daily_smoking_quantity = null
        me.form.begin_smoking_age = null
        me.form.quit_smoking_age = null
        me.disabledFlag.disabled_daily_smoking_quantity = true
        me.disabledFlag.disabled_begin_smoking_age = true
        me.disabledFlag.disabled_quit_smoking_age = true
      } else if (me.form.smoking_circumstance >= 2 && me.form.smoking_circumstance <= 3) {
        me.disabledFlag.disabled_daily_smoking_quantity = false
        me.disabledFlag.disabled_begin_smoking_age = false
        me.disabledFlag.disabled_quit_smoking_age = false
      }
    },
    changeDrinkFrequency () {
      var me = this
      if (me.form.drink_frequency === 1) {
        me.form.every_alcohol_tolerance = null
        me.form.is_dry_out = null
        me.form.dry_out_age = null
        me.form.begin_drink_age = null
        me.form.one_year_is_temulentia = null
        me.form.drink_white_spirits = 0
        me.form.drink_beer = 0
        me.form.drink_red_wine = 0
        me.form.drink_yellow_wine = 0
        me.form.drink_others = 0
        me.form.drink_others_str = ''
        me.disabledFlag.disabled_every_alcohol_tolerance = true
        me.disabledFlag.disabled_is_dry_out = true
        me.disabledFlag.disabled_dry_out_age = true
        me.disabledFlag.disabled_begin_drink_age = true
        me.disabledFlag.disabled_one_year_is_temulentia = true
        me.disabledFlag.disabled_drink_white_spirits = true
        me.disabledFlag.disabled_drink_beer = true
        me.disabledFlag.disabled_drink_red_wine = true
        me.disabledFlag.disabled_drink_yellow_wine = true
        me.disabledFlag.disabled_drink_others = true
        me.disabledFlag.disabled_drink_others_str = true
      } else if (me.form.drink_frequency >= 2 && me.form.drink_frequency <= 4) {
        me.disabledFlag.disabled_every_alcohol_tolerance = false
        me.disabledFlag.disabled_is_dry_out = false
        me.disabledFlag.disabled_begin_drink_age = false
        me.disabledFlag.disabled_one_year_is_temulentia = false
        me.disabledFlag.disabled_drink_white_spirits = false
        me.disabledFlag.disabled_drink_beer = false
        me.disabledFlag.disabled_drink_red_wine = false
        me.disabledFlag.disabled_drink_yellow_wine = false
        me.disabledFlag.disabled_drink_others = false
      }
    },
    changeIsDryOut () {
      var me = this
      if (me.form.is_dry_out === 2) {
        me.form.dry_out_age = null
        me.disabledFlag.disabled_dry_out_age = true
      } else if (me.form.is_dry_out === 1) {
        me.disabledFlag.disabled_dry_out_age = false
      }
    },
    changeDrinkOthers () {
      var me = this
      if (me.form.drink_others === 0) {
        me.form.drink_others_str = ''
        me.disabledFlag.disabled_drink_others_str = true
      } else if (me.form.drink_others === 1) {
        me.disabledFlag.disabled_drink_others_str = false
      }
    },
    changeOccHazHistory0 () {
      var me = this
      if (me.form.occ_haz_history_0 === 1) {
        me.form.occ_haz_history_1 = 0
        me.form.occ_haz_history_2 = 0
        me.form.occ_haz_history_3 = 0
        me.form.occ_haz_history_4 = 0
        me.form.occ_haz_history_5 = 0
        me.disabledFlag.disabled_occ_haz_history_1 = true
        me.disabledFlag.disabled_occ_haz_history_2 = true
        me.disabledFlag.disabled_occ_haz_history_3 = true
        me.disabledFlag.disabled_occ_haz_history_4 = true
        me.disabledFlag.disabled_occ_haz_history_5 = true
        me.form.poison_dust = ''
        me.form.hazard_name_dust = ''
        me.form.work_time_dust = null
        me.form.poison_dust_ispre = null
        me.disabledFlag.disabled_poison_dust = true
        me.disabledFlag.disabled_hazard_name_dust = true
        me.disabledFlag.disabled_work_time_dust = true
        me.disabledFlag.disabled_poison_dust_ispre = true
        me.form.poison_radiogen = ''
        me.form.hazard_name_rad = ''
        me.form.work_time_rad = null
        me.form.poison_radiogen_ispre = null
        me.disabledFlag.disabled_poison_radiogen = true
        me.disabledFlag.disabled_hazard_name_rad = true
        me.disabledFlag.disabled_work_time_rad = true
        me.disabledFlag.disabled_poison_radiogen_ispre = true
        me.form.poison_physicalfactor = ''
        me.form.hazard_name_phy = ''
        me.form.work_time_phy = null
        me.form.poison_physical_ispre = null
        me.disabledFlag.disabled_poison_physicalfactor = true
        me.disabledFlag.disabled_hazard_name_phy = true
        me.disabledFlag.disabled_work_time_phy = true
        me.disabledFlag.disabled_poison_physical_ispre = true
        me.form.poison_chemical = ''
        me.form.hazard_name_che = ''
        me.form.work_time_che = null
        me.form.poison_chemical_ispre = null
        me.disabledFlag.disabled_poison_chemical = true
        me.disabledFlag.disabled_hazard_name_che = true
        me.disabledFlag.disabled_work_time_che = true
        me.disabledFlag.disabled_poison_chemical_ispre = true
        me.form.poison_others = ''
        me.form.hazard_name_oth = ''
        me.form.work_time_oth = null
        me.form.poison_others_ispre = null
        me.disabledFlag.disabled_poison_others = true
        me.disabledFlag.disabled_hazard_name_oth = true
        me.disabledFlag.disabled_work_time_oth = true
        me.disabledFlag.disabled_poison_others_ispre = true
      } else if (me.form.occ_haz_history_0 === 0) {
        me.disabledFlag.disabled_occ_haz_history_1 = false
        me.disabledFlag.disabled_occ_haz_history_2 = false
        me.disabledFlag.disabled_occ_haz_history_3 = false
        me.disabledFlag.disabled_occ_haz_history_4 = false
        me.disabledFlag.disabled_occ_haz_history_5 = false
      }
    },
    changeOccHazHistory1 () {
      var me = this
      if (me.form.occ_haz_history_1 === 0) {
        me.form.poison_dust = ''
        me.form.hazard_name_dust = ''
        me.form.work_time_dust = null
        me.form.poison_dust_ispre = null
        me.disabledFlag.disabled_poison_dust = true
        me.disabledFlag.disabled_hazard_name_dust = true
        me.disabledFlag.disabled_work_time_dust = true
        me.disabledFlag.disabled_poison_dust_ispre = true
      } else if (me.form.occ_haz_history_1 === 1) {
        me.disabledFlag.disabled_poison_dust = false
        me.disabledFlag.disabled_hazard_name_dust = false
        me.disabledFlag.disabled_work_time_dust = false
        me.disabledFlag.disabled_poison_dust_ispre = false
      }
    },
    changeOccHazHistory2 () {
      var me = this
      if (me.form.occ_haz_history_2 === 0) {
        me.form.poison_radiogen = ''
        me.form.hazard_name_rad = ''
        me.form.work_time_rad = null
        me.form.poison_radiogen_ispre = null
        me.disabledFlag.disabled_poison_radiogen = true
        me.disabledFlag.disabled_hazard_name_rad = true
        me.disabledFlag.disabled_work_time_rad = true
        me.disabledFlag.disabled_poison_radiogen_ispre = true
      } else if (me.form.occ_haz_history_2 === 1) {
        me.disabledFlag.disabled_poison_radiogen = false
        me.disabledFlag.disabled_hazard_name_rad = false
        me.disabledFlag.disabled_work_time_rad = false
        me.disabledFlag.disabled_poison_radiogen_ispre = false
      }
    },
    changeOccHazHistory3 () {
      var me = this
      if (me.form.occ_haz_history_3 === 0) {
        me.form.poison_physicalfactor = ''
        me.form.hazard_name_phy = ''
        me.form.work_time_phy = null
        me.form.poison_physical_ispre = null
        me.disabledFlag.disabled_poison_physicalfactor = true
        me.disabledFlag.disabled_hazard_name_phy = true
        me.disabledFlag.disabled_work_time_phy = true
        me.disabledFlag.disabled_poison_physical_ispre = true
      } else if (me.form.occ_haz_history_3 === 1) {
        me.disabledFlag.disabled_poison_physicalfactor = false
        me.disabledFlag.disabled_hazard_name_phy = false
        me.disabledFlag.disabled_work_time_phy = false
        me.disabledFlag.disabled_poison_physical_ispre = false
      }
    },
    changeOccHazHistory4 () {
      var me = this
      if (me.form.occ_haz_history_4 === 0) {
        me.form.poison_chemical = ''
        me.form.hazard_name_che = ''
        me.form.work_time_che = null
        me.form.poison_chemical_ispre = null
        me.disabledFlag.disabled_poison_chemical = true
        me.disabledFlag.disabled_hazard_name_che = true
        me.disabledFlag.disabled_work_time_che = true
        me.disabledFlag.disabled_poison_chemical_ispre = true
      } else if (me.form.occ_haz_history_4 === 1) {
        me.disabledFlag.disabled_poison_chemical = false
        me.disabledFlag.disabled_hazard_name_che = false
        me.disabledFlag.disabled_work_time_che = false
        me.disabledFlag.disabled_poison_chemical_ispre = false
      }
    },
    changeOccHazHistory5 () {
      var me = this
      if (me.form.occ_haz_history_5 === 0) {
        me.form.poison_others = ''
        me.form.hazard_name_oth = ''
        me.form.work_time_oth = null
        me.form.poison_others_ispre = null
        me.disabledFlag.disabled_poison_others = true
        me.disabledFlag.disabled_hazard_name_oth = true
        me.disabledFlag.disabled_work_time_oth = true
        me.disabledFlag.disabled_poison_others_ispre = true
      } else if (me.form.occ_haz_history_5 === 1) {
        me.disabledFlag.disabled_poison_others = false
        me.disabledFlag.disabled_hazard_name_oth = false
        me.disabledFlag.disabled_work_time_oth = false
        me.disabledFlag.disabled_poison_others_ispre = false
      }
    },
    changeDentitiondenture () {
      var me = this
      if (me.form.dentitiondenture === 1) {
        me.form.miss_teeth = 0
        me.form.dental_cary = 0
        me.form.denture = 0
        me.disabledFlag.disabled_miss_teeth = true
        me.disabledFlag.disabled_dental_cary = true
        me.disabledFlag.disabled_denture = true
        me.form.miss_teeth_1 = ''
        me.form.miss_teeth_2 = ''
        me.form.miss_teeth_3 = ''
        me.form.miss_teeth_4 = ''
        me.disabledFlag.disabled_miss_teeth_1 = true
        me.disabledFlag.disabled_miss_teeth_2 = true
        me.disabledFlag.disabled_miss_teeth_3 = true
        me.disabledFlag.disabled_miss_teeth_4 = true
        me.form.dental_cary_1 = ''
        me.form.dental_cary_2 = ''
        me.form.dental_cary_3 = ''
        me.form.dental_cary_4 = ''
        me.disabledFlag.disabled_dental_cary_1 = true
        me.disabledFlag.disabled_dental_cary_2 = true
        me.disabledFlag.disabled_dental_cary_3 = true
        me.disabledFlag.disabled_dental_cary_4 = true
        me.form.denture_1 = ''
        me.form.denture_2 = ''
        me.form.denture_3 = ''
        me.form.denture_4 = ''
        me.disabledFlag.disabled_denture_1 = true
        me.disabledFlag.disabled_denture_2 = true
        me.disabledFlag.disabled_denture_3 = true
        me.disabledFlag.disabled_denture_4 = true
      } else if (me.form.dentitiondenture === 0) {
        me.disabledFlag.disabled_miss_teeth = false
        me.disabledFlag.disabled_dental_cary = false
        me.disabledFlag.disabled_denture = false
      }
    },
    changeMissTeeth () {
      var me = this
      if (me.form.miss_teeth === 0) {
        me.form.miss_teeth_1 = ''
        me.form.miss_teeth_2 = ''
        me.form.miss_teeth_3 = ''
        me.form.miss_teeth_4 = ''
        me.disabledFlag.disabled_miss_teeth_1 = true
        me.disabledFlag.disabled_miss_teeth_2 = true
        me.disabledFlag.disabled_miss_teeth_3 = true
        me.disabledFlag.disabled_miss_teeth_4 = true
      } else if (me.form.miss_teeth === 1) {
        me.disabledFlag.disabled_miss_teeth_1 = false
        me.disabledFlag.disabled_miss_teeth_2 = false
        me.disabledFlag.disabled_miss_teeth_3 = false
        me.disabledFlag.disabled_miss_teeth_4 = false
      }
    },
    changeDentalCary () {
      var me = this
      if (me.form.dental_cary === 0) {
        me.form.dental_cary_1 = ''
        me.form.dental_cary_2 = ''
        me.form.dental_cary_3 = ''
        me.form.dental_cary_4 = ''
        me.disabledFlag.disabled_dental_cary_1 = true
        me.disabledFlag.disabled_dental_cary_2 = true
        me.disabledFlag.disabled_dental_cary_3 = true
        me.disabledFlag.disabled_dental_cary_4 = true
      } else if (me.form.dental_cary === 1) {
        me.disabledFlag.disabled_dental_cary_1 = false
        me.disabledFlag.disabled_dental_cary_2 = false
        me.disabledFlag.disabled_dental_cary_3 = false
        me.disabledFlag.disabled_dental_cary_4 = false
      }
    },
    changeDenture () {
      var me = this
      if (me.form.denture === 0) {
        me.form.denture_1 = ''
        me.form.denture_2 = ''
        me.form.denture_3 = ''
        me.form.denture_4 = ''
        me.disabledFlag.disabled_denture_1 = true
        me.disabledFlag.disabled_denture_2 = true
        me.disabledFlag.disabled_denture_3 = true
        me.disabledFlag.disabled_denture_4 = true
      } else if (me.form.denture === 1) {
        me.disabledFlag.disabled_denture_1 = false
        me.disabledFlag.disabled_denture_2 = false
        me.disabledFlag.disabled_denture_3 = false
        me.disabledFlag.disabled_denture_4 = false
      }
    },
    changeEyeground () {
      var me = this
      if (me.form.eyeground === 1) {
        me.form.eyeground_exception = ''
        me.disabledFlag.disabled_eyeground_exception = true
      } else if (me.form.eyeground === 2) {
        me.disabledFlag.disabled_eyeground_exception = false
      }
    },
    changeSkin () {
      var me = this
      if (me.form.skin === 7) {
        me.disabledFlag.disabled_skin_others = false
      } else if (me.form.skin >= 1 && me.form.skin <= 6) {
        me.form.skin_others = ''
        me.disabledFlag.disabled_skin_others = true
      }
    },
    changeSclera () {
      var me = this
      if (me.form.sclera === 4) {
        me.disabledFlag.disabled_sclera_others = false
      } else if (me.form.sclera >= 1 && me.form.sclera <= 3) {
        me.form.sclera_others = ''
        me.disabledFlag.disabled_sclera_others = true
      }
    },
    changeLymphNode () {
      var me = this
      if (me.form.lymph_node === 4) {
        me.disabledFlag.disabled_lymph_node_others = false
      } else if (me.form.lymph_node >= 1 && me.form.lymph_node <= 3) {
        me.form.lymph_node_others = ''
        me.disabledFlag.disabled_lymph_node_others = true
      }
    },
    changeLungBreathSound () {
      var me = this
      if (me.form.lung_breath_sound === 1) {
        me.form.lung_breath_sound_excep = ''
        me.disabledFlag.disabled_lung_breath_sound_excep = true
      } else if (me.form.lung_breath_sound === 2) {
        me.disabledFlag.disabled_lung_breath_sound_excep = false
      }
    },
    changeLungRhonchus () {
      var me = this
      if (me.form.lung_rhonchus === 4) {
        me.disabledFlag.disabled_lung_rhonchus_exception = false
      } else if (me.form.lung_rhonchus >= 1 && me.form.lung_rhonchus <= 3) {
        me.form.lung_rhonchus_exception = ''
        me.disabledFlag.disabled_lung_rhonchus_exception = true
      }
    },
    changeCardiacSouffle () {
      var me = this
      if (me.form.cardiac_souffle === 1) {
        me.disabledFlag.disabled_cardiac_souffle_others = false
      } else if (me.form.cardiac_souffle === 0) {
        me.form.cardiac_souffle_others = ''
        me.disabledFlag.disabled_cardiac_souffle_others = true
      }
    },
    changeAbdoPressPain () {
      var me = this
      if (me.form.abdo_press_pain === 1) {
        me.disabledFlag.disabled_abdo_press_pain_oth = false
      } else if (me.form.abdo_press_pain === 0) {
        me.form.abdo_press_pain_oth = ''
        me.disabledFlag.disabled_abdo_press_pain_oth = true
      }
    },
    changeAbdoMasses () {
      var me = this
      if (me.form.abdo_masses === 1) {
        me.disabledFlag.disabled_abdo_masses_others = false
      } else if (me.form.abdo_masses === 0) {
        me.form.abdo_masses_others = ''
        me.disabledFlag.disabled_abdo_masses_others = true
      }
    },
    changeAbdoHepatomegaly () {
      var me = this
      if (me.form.abdo_hepatomegaly === 1) {
        me.disabledFlag.disabled_abdo_hepatomegaly_oth = false
      } else if (me.form.abdo_hepatomegaly === 0) {
        me.form.abdo_hepatomegaly_oth = ''
        me.disabledFlag.disabled_abdo_hepatomegaly_oth = true
      }
    },
    changeAbdoSplenomegaly () {
      var me = this
      if (me.form.abdo_splenomegaly === 1) {
        me.disabledFlag.disabled_abdo_splenomegaly_oth = false
      } else if (me.form.abdo_splenomegaly === 0) {
        me.form.abdo_splenomegaly_oth = ''
        me.disabledFlag.disabled_abdo_splenomegaly_oth = true
      }
    },
    changeAbdoShiftingDull () {
      var me = this
      if (me.form.abdo_shifting_dull === 1) {
        me.disabledFlag.disabled_abdo_shifting_dull_oth = false
      } else if (me.form.abdo_shifting_dull === 0) {
        me.form.abdo_shifting_dull_oth = ''
        me.disabledFlag.disabled_abdo_shifting_dull_oth = true
      }
    },
    changeFundamentFingerp () {
      var me = this
      if (me.form.fundament_fingerp === 5) {
        me.disabledFlag.disabled_fundament_fingerp_oth = false
      } else if (me.form.fundament_fingerp >= 1 && me.form.fundament_fingerp <= 4) {
        me.form.fundament_fingerp_oth = ''
        me.disabledFlag.disabled_fundament_fingerp_oth = true
      }
    },
    changeBreastNotTroubleFind () {
      var me = this
      if (me.form.breast_not_trouble_find === 0) {
        me.disabledFlag.disabled_breast_mastectomy = false
        me.disabledFlag.disabled_breast_abnormal_lactation = false
        me.disabledFlag.disabled_breast_masses = false
        me.disabledFlag.disabled_breast_others = false
      } else if (me.form.breast_not_trouble_find === 1) {
        me.form.breast_mastectomy = 0
        me.form.breast_abnormal_lactation = 0
        me.form.breast_masses = 0
        me.form.breast_others = 0
        me.form.breast_others_str = ''
        me.disabledFlag.disabled_breast_mastectomy = true
        me.disabledFlag.disabled_breast_abnormal_lactation = true
        me.disabledFlag.disabled_breast_masses = true
        me.disabledFlag.disabled_breast_others = true
        me.disabledFlag.disabled_breast_others_str = true
      }
    },
    changeBreastOthers () {
      var me = this
      if (me.form.breast_others === 1) {
        me.disabledFlag.disabled_breast_others_str = false
      } else if (me.form.breast_others === 0) {
        me.form.breast_others_str = ''
        me.disabledFlag.disabled_breast_others_str = true
      }
    },
    changeVulva () {
      var me = this
      if (me.form.vulva === 2) {
        me.disabledFlag.disabled_vulva_exception = false
      } else if (me.form.vulva === 1) {
        me.form.vulva_exception = ''
        me.disabledFlag.disabled_vulva_exception = true
      }
    },
    changeVagina () {
      var me = this
      if (me.form.vagina === 2) {
        me.disabledFlag.disabled_vagina_exception = false
      } else if (me.form.vagina === 1) {
        me.form.vagina_exception = ''
        me.disabledFlag.disabled_vagina_exception = true
      }
    },
    changeCervix () {
      var me = this
      if (me.form.cervix === 2) {
        me.disabledFlag.disabled_cervix_exception = false
      } else if (me.form.cervix === 1) {
        me.form.cervix_exception = ''
        me.disabledFlag.disabled_cervix_exception = true
      }
    },
    changeCorpus () {
      var me = this
      if (me.form.corpus === 2) {
        me.disabledFlag.disabled_corpus_exception = false
      } else if (me.form.corpus === 1) {
        me.form.corpus_exception = ''
        me.disabledFlag.disabled_corpus_exception = true
      }
    },
    changeAttachment () {
      var me = this
      if (me.form.attachment === 2) {
        me.disabledFlag.disabled_attachment_exception = false
      } else if (me.form.attachment === 1) {
        me.form.attachment_exception = ''
        me.disabledFlag.disabled_attachment_exception = true
      }
    },
    changeElectrocardiogram () {
      var me = this
      if (me.form.electrocardiogram === 2) {
        me.disabledFlag.disabled_electrocardiogram_excep = false
      } if (me.form.electrocardiogram === 1) {
        me.form.electrocardiogram_excep = ''
        me.disabledFlag.disabled_electrocardiogram_excep = true
      }
    },
    changeCxr () {
      var me = this
      if (me.form.cxr === 2) {
        me.disabledFlag.disabled_cxr_exception = false
      } if (me.form.cxr === 1) {
        me.form.cxr_exception = ''
        me.disabledFlag.disabled_cxr_exception = true
      }
    },
    changeTypeBUltrasonic () {
      var me = this
      if (me.form.type_b_ultrasonic === 2) {
        me.disabledFlag.disabled_type_b_ultrasonic_excep = false
      } if (me.form.type_b_ultrasonic === 1) {
        me.form.type_b_ultrasonic_excep = ''
        me.disabledFlag.disabled_type_b_ultrasonic_excep = true
      }
    },
    changeCervicalPapSmears () {
      var me = this
      if (me.form.cervical_pap_smears === 2) {
        me.disabledFlag.disabled_cervical_pap_smears_excep = false
      } if (me.form.cervical_pap_smears === 1) {
        me.form.cervical_pap_smears_excep = ''
        me.disabledFlag.disabled_cervical_pap_smears_excep = true
      }
    },
    changeGlucoseOutside () {
      var me = this
      if (me.form.glucose_outside === 1) {
        me.disabledFlag.disabled_glucose_routine_outside_others = false
      } if (me.form.glucose_outside === 0) {
        me.form.glucose_routine_outside_others = ''
        me.disabledFlag.disabled_glucose_routine_outside_others = true
      }
    },
    changeElectrocardiogramOutside () {
      var me = this
      if (me.form.electrocardiogram_outside === 1) {
        me.disabledFlag.disabled_elect_outside_others = false
      } if (me.form.electrocardiogram_outside === 0) {
        me.form.elect_outside_others = ''
        me.disabledFlag.disabled_elect_outside_others = true
      }
    },
    changeBloodRoutineOutside () {
      var me = this
      if (me.form.blood_routine_outside === 1) {
        me.disabledFlag.disabled_blood_routine_outside_others = false
      } else if (me.form.blood_routine_outside === 0) {
        me.form.blood_routine_outside_others = ''
        me.disabledFlag.disabled_blood_routine_outside_others = true
      }
    },
    changeUrineRoutineOutside () {
      var me = this
      if (me.form.urine_routine_outside === 1) {
        me.disabledFlag.disabled_urine_routine_outside_others = false
      } else if (me.form.urine_routine_outside === 0) {
        me.form.urine_routine_outside_others = ''
        me.disabledFlag.disabled_urine_routine_outside_others = true
      }
    },
    changeBloodFatOutside () {
      var me = this
      if (me.form.blood_fat_outside === 1) {
        me.disabledFlag.disabled_blood_fat_outside_others = false
      } if (me.form.blood_fat_outside === 0) {
        me.form.blood_fat_outside_others = ''
        me.disabledFlag.disabled_blood_fat_outside_others = true
      }
    },
    changeRenalFunctionOutside () {
      var me = this
      if (me.form.renal_function_outside === 1) {
        me.disabledFlag.disabled_renal_outside_others = false
      } if (me.form.renal_function_outside === 0) {
        me.form.renal_outside_others = ''
        me.disabledFlag.disabled_renal_outside_others = true
      }
    },
    changeLiverFunctionOutside () {
      var me = this
      if (me.form.liver_function_outside === 1) {
        me.disabledFlag.disabled_liver_outside_others = false
      } if (me.form.liver_function_outside === 0) {
        me.form.liver_outside_others = ''
        me.disabledFlag.disabled_liver_outside_others = true
      }
    },
    changeGlycolatedHemoglobinOutside () {
      var me = this
      if (me.form.glycolated_hemoglobin_outside === 1) {
        me.disabledFlag.disabled_glycolated_outside_others = false
      } if (me.form.glycolated_hemoglobin_outside === 0) {
        me.form.glycolated_outside_others = ''
        me.disabledFlag.disabled_glycolated_outside_others = true
      }
    },
    changeCxrOutside () {
      var me = this
      if (me.form.cxr_outside === 1) {
        me.disabledFlag.disabled_cxr_outside_others = false
      } if (me.form.cxr_outside === 0) {
        me.form.cxr_outside_others = ''
        me.disabledFlag.disabled_cxr_outside_others = true
      }
    },
    changeTypeBUltrasonicOutside () {
      var me = this
      if (me.form.type_b_ultrasonic_outside === 1) {
        me.disabledFlag.disabled_type_b_outside_others = false
      } if (me.form.type_b_ultrasonic_outside === 0) {
        me.form.type_b_outside_others = ''
        me.disabledFlag.disabled_type_b_outside_others = true
      }
    },
    changeMicroalbuminuriaOutside () {
      var me = this
      if (me.form.microalbuminuria_outside === 1) {
        me.disabledFlag.disabled_mic_outside_others = false
      } if (me.form.microalbuminuria_outside === 0) {
        me.form.mic_outside_others = ''
        me.disabledFlag.disabled_mic_outside_others = true
      }
    },
    changeStoolOccultBloodOutside () {
      var me = this
      if (me.form.stool_occult_blood_outside === 1) {
        me.disabledFlag.disabled_stool_outside_others = false
      } if (me.form.stool_occult_blood_outside === 0) {
        me.form.stool_outside_others = ''
        me.disabledFlag.disabled_stool_outside_others = true
      }
    },
    changeCervicalPapSmearsOutside () {
      var me = this
      if (me.form.cervical_pap_smears_outside === 1) {
        me.disabledFlag.disabled_cervical_outside_others = false
      } if (me.form.cervical_pap_smears_outside === 0) {
        me.form.cervical_outside_others = ''
        me.disabledFlag.disabled_cervical_outside_others = true
      }
    },
    changeHbsagOutside () {
      var me = this
      if (me.form.hbsag_outside === 1) {
        me.disabledFlag.disabled_hbsag_outside_others = false
      } if (me.form.hbsag_outside === 0) {
        me.form.hbsag_outside_others = ''
        me.disabledFlag.disabled_hbsag_outside_others = true
      }
    },
    changeBloodUricAcidOutside () {
      var me = this
      if (me.form.blood_uric_acid_outside === 1) {
        me.disabledFlag.disabled_xns_outside_others = false
      } if (me.form.blood_uric_acid_outside === 0) {
        me.form.xns_outside_others = ''
        me.disabledFlag.disabled_xns_outside_others = true
      }
    },
    changeBloodRheologyOutside () {
      var me = this
      if (me.form.blood_rheology_outside === 1) {
        me.disabledFlag.disabled_xlb_outside_others = false
      } if (me.form.blood_rheology_outside === 0) {
        me.form.xlb_outside_others = ''
        me.disabledFlag.disabled_xlb_outside_others = true
      }
    },
    changeTypeBUltrasonicQt () {
      var me = this
      if (me.form.type_b_ultrasonic_qt === 2) {
        me.disabledFlag.disabled_type_b_ultrasonic_excep_qt = false
      } if (me.form.type_b_ultrasonic_qt === 1) {
        me.form.type_b_ultrasonic_excep_qt = ''
        me.disabledFlag.disabled_type_b_ultrasonic_excep_qt = true
      }
    },
    changeCvdUndiscovered () {
      var me = this
      if (me.form.cvd_undiscovered === 0) {
        me.disabledFlag.disabled_cvd_ischemic_stroke = false
        me.disabledFlag.disabled_cvd_cerebral_hemorrhage = false
        me.disabledFlag.disabled_cvd_sah = false
        me.disabledFlag.disabled_cvd_tia = false
        me.disabledFlag.disabled_cvd_others = false
        // me.disabledFlag.disabled_cvd_others_str = false
      } if (me.form.cvd_undiscovered === 1) {
        me.form.cvd_ischemic_stroke = '0'
        me.disabledFlag.disabled_cvd_ischemic_stroke = true
        me.form.cvd_cerebral_hemorrhage = '0'
        me.disabledFlag.disabled_cvd_cerebral_hemorrhage = true
        me.form.cvd_sah = '0'
        me.disabledFlag.disabled_cvd_sah = true
        me.form.cvd_tia = '0'
        me.disabledFlag.disabled_cvd_tia = true
        me.form.cvd_others = '0'
        me.disabledFlag.disabled_cvd_others = true
        me.form.cvd_others_str = ''
        me.disabledFlag.disabled_cvd_others_str = true
      }
    },
    changeCvdOthers () {
      var me = this
      if (me.form.cvd_others === 1) {
        me.disabledFlag.disabled_cvd_others_str = false
      } if (me.form.cvd_others === 0) {
        me.form.cvd_others_str = ''
        me.disabledFlag.disabled_cvd_others_str = true
      }
    },
    changeRenalUndiscovered () {
      var me = this
      if (me.form.renal_undiscovered === 0) {
        me.disabledFlag.disabled_renal_dn = false
        me.disabledFlag.disabled_renal_failure = false
        me.disabledFlag.disabled_renal_agn = false
        me.disabledFlag.disabled_renal_cgn = false
        me.disabledFlag.disabled_renal_others = false
        // me.disabledFlag.disabled_renal_others_str = false
      } if (me.form.renal_undiscovered === 1) {
        me.form.renal_dn = '0'
        me.disabledFlag.disabled_renal_dn = true
        me.form.renal_failure = '0'
        me.disabledFlag.disabled_renal_failure = true
        me.form.renal_agn = '0'
        me.disabledFlag.disabled_renal_agn = true
        me.form.renal_cgn = '0'
        me.disabledFlag.disabled_renal_cgn = true
        me.form.renal_others = '0'
        me.disabledFlag.disabled_renal_others = true
        me.form.renal_others_str = ''
        me.disabledFlag.disabled_renal_others_str = true
      }
    },
    changeRenalOthers () {
      var me = this
      if (me.form.renal_others === 1) {
        me.disabledFlag.disabled_renal_others_str = false
      } if (me.form.renal_others === 0) {
        me.form.renal_others_str = ''
        me.disabledFlag.disabled_renal_others_str = true
      }
    },
    changeHeartUndiscovered () {
      var me = this
      if (me.form.heart_undiscovered === 0) {
        me.disabledFlag.disabled_heart_myocardial_infarction = false
        me.disabledFlag.disabled_heart_angina_pectoris = false
        me.disabledFlag.disabled_heart_coronary_artery = false
        me.disabledFlag.disabled_heart_chf = false
        me.disabledFlag.disabled_heart_precordialpain = false
        me.disabledFlag.disabled_c_heart_dis = false
        me.disabledFlag.disabled_heart_others = false
        // me.disabledFlag.disabled_heart_others_str = false
      } if (me.form.heart_undiscovered === 1) {
        me.form.heart_myocardial_infarction = '0'
        me.disabledFlag.disabled_heart_myocardial_infarction = true
        me.form.heart_angina_pectoris = '0'
        me.disabledFlag.disabled_heart_angina_pectoris = true
        me.form.heart_coronary_artery = '0'
        me.disabledFlag.disabled_heart_coronary_artery = true
        me.form.heart_chf = '0'
        me.disabledFlag.disabled_heart_chf = true
        me.form.heart_precordialpain = '0'
        me.disabledFlag.disabled_heart_precordialpain = true
        me.form.c_heart_dis = '0'
        me.disabledFlag.disabled_c_heart_dis = true
        me.form.heart_others = '0'
        me.disabledFlag.disabled_heart_others = true
        me.form.heart_others_str = ''
        me.disabledFlag.disabled_heart_others_str = true
      }
    },
    changeHeartOthers () {
      var me = this
      if (me.form.heart_others === 1) {
        me.disabledFlag.disabled_heart_others_str = false
      } if (me.form.heart_others === 0) {
        me.form.heart_others_str = ''
        me.disabledFlag.disabled_heart_others_str = true
      }
    },
    changeAngiosisUndiscovered () {
      var me = this
      if (me.form.angiosis_undiscovered === 0) {
        me.disabledFlag.disabled_hypertension = false
        me.disabledFlag.disabled_angiosis_da = false
        me.disabledFlag.disabled_angiosis_occlusion_arteries = false
        me.disabledFlag.disabled_angiosis_others = false
        // me.disabledFlag.disabled_angiosis_others_str = false
      } if (me.form.angiosis_undiscovered === 1) {
        me.form.hypertension = '0'
        me.disabledFlag.disabled_hypertension = true
        me.form.angiosis_da = '0'
        me.disabledFlag.disabled_angiosis_da = true
        me.form.angiosis_occlusion_arteries = '0'
        me.disabledFlag.disabled_angiosis_occlusion_arteries = true
        me.form.angiosis_others = '0'
        me.disabledFlag.disabled_angiosis_others = true
        me.form.angiosis_others_str = ''
        me.disabledFlag.disabled_angiosis_others_str = true
      }
    },
    changeAngiosisOthers () {
      var me = this
      if (me.form.angiosis_others === 1) {
        me.disabledFlag.disabled_angiosis_others_str = false
      } if (me.form.angiosis_others === 0) {
        me.form.angiosis_others_str = ''
        me.disabledFlag.disabled_angiosis_others_str = true
      }
    },
    changeEyeDiseaseUndiscovered () {
      var me = this
      if (me.form.eye_disease_undiscovered === 0) {
        me.disabledFlag.disabled_retinal_hemorrhage = false
        me.disabledFlag.disabled_papilledema = false
        me.disabledFlag.disabled_eye_disease_cataract = false
        me.disabledFlag.disabled_eye_disease_others = false
        // me.disabledFlag.disabled_eye_disease_others_str = false
      } if (me.form.eye_disease_undiscovered === 1) {
        me.form.retinal_hemorrhage = '0'
        me.disabledFlag.disabled_retinal_hemorrhage = true
        me.form.papilledema = '0'
        me.disabledFlag.disabled_papilledema = true
        me.form.eye_disease_cataract = '0'
        me.disabledFlag.disabled_eye_disease_cataract = true
        me.form.eye_disease_others = '0'
        me.disabledFlag.disabled_eye_disease_others = true
        me.form.eye_disease_others_str = ''
        me.disabledFlag.disabled_eye_disease_others_str = true
      }
    },
    changeEyeDiseaseOthers () {
      var me = this
      if (me.form.eye_disease_others === 1) {
        me.disabledFlag.disabled_eye_disease_others_str = false
      } if (me.form.eye_disease_others === 0) {
        me.form.eye_disease_others_str = ''
        me.disabledFlag.disabled_eye_disease_others_str = true
      }
    },
    changeNervousSystemDisease () {
      var me = this
      if (me.form.nervous_system_disease === 2) {
        me.disabledFlag.disabled_nervous_system_disease_str = false
      } if (me.form.nervous_system_disease === 1 || me.form.nervous_system_disease === 3) {
        me.form.nervous_system_disease_str = ''
        me.disabledFlag.disabled_nervous_system_disease_str = true
      }
    },
    changeOthersSystemDisease () {
      var me = this
      me.$message({
        message: '变更1',
        type: 'warning'
      })
    },
    changeEnmedis () {
      var me = this
      if (me.form.enmedis === 3) {
        me.disabledFlag.disabled_enmedis_other = false
      } if (me.form.enmedis === 1 || me.form.enmedis === 2) {
        me.form.enmedis_other = ''
        me.disabledFlag.disabled_enmedis_other = true
      }
    },
    changeOtherDiseaseNo () {
      var me = this
      if (me.form.other_disease_no === 2) {
        me.disabledFlag.disabled_others_system_disease_str = false
      } if (me.form.other_disease_no === 1) {
        me.form.others_system_disease_str = ''
        me.disabledFlag.disabled_others_system_disease_str = true
      }
    },
    changeHealthAss1 () {
      var me = this
      if (me.form.health_ass_1 === 2) {
        me.disabledFlag.disabled_health_ass_gxf = false
        me.disabledFlag.disabled_health_ass_txf = false
        me.disabledFlag.disabled_health_ass_qtxf = false
        // me.disabledFlag.disabled_health_ass_xfqt = false
        me.disabledFlag.disabled_health_ass_21 = false
        me.disabledFlag.disabled_health_ass_22 = false
        me.disabledFlag.disabled_health_ass_23 = false
        me.disabledFlag.disabled_health_ass_24 = false
        me.disabledFlag.disabled_health_ass_25 = false
        me.disabledFlag.disabled_health_ass_26 = false
      } if (me.form.health_ass_1 === 1) {
        me.form.health_ass_gxf = '0'
        me.disabledFlag.disabled_health_ass_gxf = true
        me.form.health_ass_txf = '0'
        me.disabledFlag.disabled_health_ass_txf = true
        me.form.health_ass_qtxf = '0'
        me.disabledFlag.disabled_health_ass_qtxf = true
        me.form.health_ass_xfqt = ''
        me.disabledFlag.disabled_health_ass_xfqt = true
        me.form.health_ass_21 = ''
        me.disabledFlag.disabled_health_ass_21 = true
        me.form.health_ass_22 = ''
        me.disabledFlag.disabled_health_ass_22 = true
        me.form.health_ass_23 = ''
        me.disabledFlag.disabled_health_ass_23 = true
        me.form.health_ass_24 = ''
        me.disabledFlag.disabled_health_ass_24 = true
        me.form.health_ass_25 = ''
        me.disabledFlag.disabled_health_ass_25 = true
        me.form.health_ass_26 = ''
        me.disabledFlag.disabled_health_ass_26 = true
      }
    },
    changeHazardLoseWeight () {
      var me = this
      if (me.form.hazard_lose_weight === 1) {
        me.disabledFlag.disabled_hazard_lose_weight_target = false
      } if (me.form.hazard_lose_weight === 0) {
        me.form.hazard_lose_weight_target = ''
        me.disabledFlag.disabled_hazard_lose_weight_target = true
      }
    },
    changeHazardVaccination () {
      var me = this
      if (me.form.hazard_vaccination === 1) {
        me.disabledFlag.disabled_hazard_vaccination_str = false
      } if (me.form.hazard_vaccination === 0) {
        me.form.hazard_vaccination_str = ''
        me.disabledFlag.disabled_hazard_vaccination_str = true
      }
    },
    changeHazardOthers () {
      var me = this
      if (me.form.hazard_others === 1) {
        me.disabledFlag.disabled_hazard_others_str = false
      } if (me.form.hazard_others === 0) {
        me.form.hazard_others_str = ''
        me.disabledFlag.disabled_hazard_others_str = true
      }
    },
    changeHealthAssQtxf () {
      var me = this
      if (me.form.health_ass_qtxf === 1) {
        me.disabledFlag.disabled_health_ass_xfqt = false
      } if (me.form.health_ass_qtxf === 0) {
        me.form.health_ass_xfqt = ''
        me.disabledFlag.disabled_health_ass_xfqt = true
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
