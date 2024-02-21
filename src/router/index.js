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
    // children: [
    //   {
    //     path: ':id',
    //     name: 'course',
    //     component: CoursePage
    //   },
    // ]
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('../view/CourseCheckPage.vue')
  },
  {
    path: '/stat',
    name: 'stat',
    component: () => import('../view/StatisticPage.vue'),
    meta: { title: 'Статистика' },
  },
  {
    path: '/stat/assignment',
    name: 'assignment',
    component: () => import('../view/StatisticAssignmentPage.vue'),
    meta: { title: 'Задания' },
  },
  {
    path: '/stat/quiz',
    name: 'quiz',
    component: () => import('../view/StatisticQuizPage.vue'),
    meta: { title: 'Тесты' },
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

export default router
