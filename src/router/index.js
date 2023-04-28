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
            path:'articles',
            component: () => import('../views/ArticlesView.vue'),
          },
          {
            path:'article/:id',
            component: () => import('../views/ArticleView.vue'),
          },
          {
            path:'favorites',
            component: () => import('../views/FavoritesView.vue'),
          },
        ]
       },
       {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/NotFound.vue'),
      },
  ],
})
router.afterEach(() => {
	window.scrollTo(0, 0);
})
export default router
