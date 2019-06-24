import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: 'index'
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('./components/index')
        },
        {
          path: 'shopping',
          name: 'shopping',
          component: () => import('./components/shopping')
        }
      ]
    },
    {
      path: '/detailed/:productId',
      name: 'detailed',
      component: () => import('./views/detailed.vue')
    },
    {
      path: '/check_order/:orderId',
      name: 'checkOrder',
      component: () => import('./views/checkOrder.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('./views/customer.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./views/admin/dashboard'),
      children: [
        {
          path: 'products',
          name: 'products',
          component: () => import('./components/admin/products'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('./components/admin/orders'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          name: 'coupons',
          component: () => import('./components/admin/coupons'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./views/admin/dashboard'),
      children: [
        {
          path: 'customer_order',
          name: 'customerOrder',
          component: () => import('./components/admin/customerOrder')
        },
        {
          path: 'Customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: () => import('./components/admin/CustomerCheckout')
        }
      ]
    }
  ]
})
