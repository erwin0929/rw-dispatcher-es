import Vue from 'vue'
import VueRouter from 'vue-router'
import elementUIRoutes from './element-ui'
import iviewRoutes from './iview'

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Hello',
      path: '/',
      component: () => import('../views/hello.vue')
    },
    elementUIRoutes,
    iviewRoutes
  ]
})
