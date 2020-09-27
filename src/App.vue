<template>
  <!--<div id="app">-->
    <router-view/>
  <!--</div>-->
</template>

<script>
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    height: 0,
    // WebServerAddress: 'http://192.168.100.202:8023/ims'
    WebServerAddress: 'http://172.16.35.150:7100',
    // WebServerAddress: 'http://localhost:7100',
    // WebServerAddress: 'http://localhost:8999/ims'
    userInfo: {
      loginUser: '',
      staffCode: '',
      staffName: '',
      orgId: '',
      orgName: '',
      teamId: '',
      teamName: '',
      zoneLevel: '',
      zoneLevelJs: '',
      upperOrg: ''
    },
    healthsyscontrollers: [
      'checkuser',
      'OrgDict',
      'StaffDict',
      'TeamDict',
      'ZoneDict',
      'SysMenu'
    ],
    healtharchiveControllers: [
      'ArchivesBooksManager',
      'HygieneSickArchive',
      'HygieneSickArchiveManager'
    ],
    healthserviceControllers: [
      'BloodBooksManager',
      'BloodFollowup',
      'DiabetesFollowup',
      'HygieneSickMedical',
      'SickMedical',
      'DeformityHealingPage',
      'DeformityLead',
      'DeformityProblem',
      'SickHealing',
      'SickHealingEvaluate',
      'SickHealingTrain'
    ],
    mainTabs: [],
    mainTabIndex: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    setHeight (state, parm) {
      console.log('setheight: ' + parm)
    },
    setUserInfo (state, parm) {
      // state.userInfo.staffName = parm.staffName
      // state.userInfo.staffCode = parm.staffCode
      // state.userInfo.orgId = parm.orgId
      // state.userInfo.orgName = parm.orgName
      // state.userInfo.teamId = parm.teamId
      // state.userInfo.teamName = parm.teamName
      // state.userInfo.zoneLevel = parm.zoneLevel
      // state.userInfo.zoneLevelJs = parm.zoneLevelJs
      // state.userInfo.upperOrg = parm.upperOrg
      sessionStorage.setItem('UserInfo', JSON.stringify(parm))
      // if (parm === null) {
      //   sessionStorage.setItem('UserInfo', null)
      // } else {
      //   sessionStorage.setItem('UserInfo', JSON.stringify(parm))
      // }
    }
  },
  getters: {
    getUserInfo: state => {
      return state.userInfo
    }
  }
})
export default {
  name: 'App',
  store
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
</style>
