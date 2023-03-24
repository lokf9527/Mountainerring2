import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
       {
        path:'/',
        component: () => import('../views/FrontLayout.vue'),
        children: [
          {
            path:'',
            component: () => import('../views/HomeView.vue'),
          },
          {
            path:'products',
            component: () => import('../views/ProductsView.vue'),
          },
          {
            path:'product/:id',
            component: () => import('../views/ProductView.vue'),
          },
          {
            path:'cart',
            component: () => import('../views/CartView.vue'),
          },
          {
            path:'form',
            component: () => import('../views/FormView.vue'),
          },
          {
            path:'checkout/:orderId',
            component: () => import('../views/CheckoutView.vue'),
          },
          {
            path:'checkoutSuccess',
            component: () => import('../views/checkoutSuccessView.vue'),
          }
        ]
       }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
      
    // }
  ]
})

export default router
