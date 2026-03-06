import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/Tasks.vue'
import ContactView from '../views/ContactView.vue'
import Profile from '../views/Home/Profile.vue'
import Settings from '../views/Home/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // child paths must be relative (no leading slash) and the parent
    // component needs a <router-view> to render them.
    children: [
      { path: 'profile', name: 'Count', component: Profile },
      { path: 'settings', name: 'Settings', component: Settings },
    ],
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
