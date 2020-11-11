import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

function paramFunc({ params, query }) {
  return {
    foo: '来自prop',
    msg: params.msg,
    idParam: params.id,
    idQuery: query.id,
  }
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter(to, from, next) {
      if (window.isLogin) {
        next();
      } else {
        next(`/login?redirect=${to.path}`);
      }
    },
    children: [
      {
        path: 'about/:msg/:id',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        props: paramFunc
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  // if (to.path != '/login') {
  //   if (window.isLogin) {
  //     next();
  //   } else {
  //     next(`/login?redirect=${to.path}`);
  //   }
  // } else {
  //   next();
  // }
  next();
});

export default router
