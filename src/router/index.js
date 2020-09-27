import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ArchivesSynthesizePage from '@/components/publichealth/archive/ArchivesSynthesizePage.vue'
import LoginError from '@/components/sys/login/LoginError.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // 默认hash 去掉url中的# history
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/LoginError',
      name: 'LoginError',
      component: LoginError
    },
    {
      path: '/ArchivesSynthesizePage',
      name: 'ArchivesSynthesizePage',
      component: ArchivesSynthesizePage,
      props: {
        openParm: {
          record: {
            archiveId: null
            // 23301344
          }
        }
      }
    }
  ]
})
