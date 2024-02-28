import Vue from 'vue'
import VueRouter from 'vue-router'
// import CoursePage from "@/view/CoursePage.vue";
import HomePage from "@/view/HomePage.vue";

function buildNav(routerRoutes, base) {
  const routes = routerRoutes
    .filter(v => v.meta?.isNavRoute)
    .map(({path, name, meta}) => ({path: `/${base}${path}`, name, meta}))
  return {
    routes,
    base
  }
}


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
    meta: { title: 'Проверка курса', isNavRoute: true },
  },
  {
    path: '/stat',
    name: 'stat',
    component: () => import('../view/StatisticPage.vue'),
    meta: { title: 'Статистика', isNavRoute: true },
  },
  {
    path: '/stat/assignment',
    name: 'assignment',
    component: () => import('../view/StatisticAssignmentPage.vue'),
    meta: { title: 'Задания', isNavRoute: true },
  },
  {
    path: '/stat/quiz',
    name: 'quiz',
    component: () => import('../view/StatisticQuizPage.vue'),
    meta: { title: 'Тесты', isNavRoute: true },
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

const nav = buildNav(routes, base)

export default router
export { nav }
