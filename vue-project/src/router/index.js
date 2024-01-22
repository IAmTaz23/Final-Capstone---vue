import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cuisine from '../views/cuisines.vue'
import events from '../views/events.vue'
import menu from '../views/menu.vue'
import orderconfirm from '../views/orderconfirm.vue'
import ordersubmit from '../views/ordersubmit.vue'
import register from '../views/register.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cuisine',
      name: 'cuisine',
      component: cuisine
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/orderconfirm',
      name: 'orderconfirm',
      component: orderconfirm
    },
    {
      path: '/ordersubmit',
      name: 'ordersubmit',
      component: ordersubmit
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})

export default router
