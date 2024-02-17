import Vue from 'vue'
import VueRouter from 'vue-router'
import CoursePage from "@/view/CoursePage.vue";
import HomePage from "@/view/HomePage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/stat',
    name: 'stat',
    component: () => import('../view/StatisticPage.vue')
  },
  {
    path: '/course/:id',
    name: 'course',
    component: CoursePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: 'courses',
  routes
})

export default router
