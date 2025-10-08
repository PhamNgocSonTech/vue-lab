import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import PostList from '@/components/PostList.vue'
import User from '@/components/User.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/post',
    name: 'post',
    component: PostList
  },

  {
    path: '/users',
    name: 'users',
    component: User
  },

  {
    path: '/users/:id',
    component: UserDetailView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
   if(to.path.startsWith('/users/')) {
     const id = Number(to.params.id)
     if(id < 1 || isNaN(id)) {
       return next({name: 'home'})
     }
   }
     next()
})

export default router
