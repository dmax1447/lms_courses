import Vue from 'vue'
import VueRouter from 'vue-router'
// import CoursePage from "@/view/CoursePage.vue";
import HomePage from "@/view/HomePage.vue";

Vue.use(VueRouter)
const base = 'courses'

const routes = [
  {
    path: `/`,
    name: 'home',
    component: HomePage,
    meta: { title: 'Курсы' },
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('../view/CourseCheckPage.vue'),
    meta: { title: 'Проверка курса', shouldAppearInSidebar: true },
  },
  {
    path: '/stat',
    name: 'stat',
    component: () => import('../view/StatisticPage.vue'),
    meta: { title: 'Статистика', shouldAppearInSidebar: true },
  },
  {
    path: '/stat/assignment',
    name: 'assignment',
    component: () => import('../view/StatisticAssignmentPage.vue'),
    meta: { title: 'Задания', shouldAppearInSidebar: true },
  },
  {
    path: '/stat/quiz',
    name: 'quiz',
    component: () => import('../view/StatisticQuizPage.vue'),
    meta: { title: 'Тесты', shouldAppearInSidebar: true },
  },
  {
    path: '/course/:id',
    name: 'course',
    component: () => import('../view/CoursePage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base,
  routes
})

const sidebarRoutes = routes
  .filter(v => v.meta?.shouldAppearInSidebar)
  .map(({path, name, meta}) => ({path: `/${base}${path}`, name, meta}))
const nav = {
  base,
  routes: sidebarRoutes
}

export default router
export { nav }
