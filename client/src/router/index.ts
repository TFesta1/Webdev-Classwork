import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/Products.vue'
import LoginView from '../views/Login.vue'
import { useSession } from '@/model/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView,
      beforeEnter: secureRoute,
    }, 
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: "/admin/products", name: "admin-products", component: () => import("../views/admin/ProductsList.vue"), beforeEnter: secureRoute },
    { path: "/admin/products/edit/:id?", name: "admin-products-edit", component: () => import("../views/admin/ProductEdit.vue"), beforeEnter: secureRoute },


  ]
})

export default router


// If there's no user, we get sent to the login page
function secureRoute (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const session = useSession()
  if(session.user){
    next()
  }
  else {
    next('/login')
  }

}