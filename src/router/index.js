import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../layout/index'
import Login from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/landing',
    children: [{
      path: 'landing',
      name: 'Landing',
      component: () => import('../views/LandingPage'),
      meta: { title: 'Landing', icon: 'mdi-home-city' }
    },
    {
      path: 'mietvertrag',
      name: 'mietvertrag',
      component: () => import('../views/Generator'),
      meta: { title: 'Landing', icon: 'mdi-home-city' }
    },
    ]
  },
 
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: Login
  },
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/404',
    component: () => import('../views/404'),
    hidden: true
  },

]


const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
