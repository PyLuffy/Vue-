import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Course from '@/components/course/Course'
import CourseDetail from '@/components/course/CourseDetail'
import Degree from '@/components/Degree'
import NotFound from '@/components/404'
import Technology from '@/components/Technology'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/coursedetail',
      name: 'CourseDetail',
      component: CourseDetail
    },
    {
      path: '/degree',
      name: 'Degree',
      component: Degree
    },
    {
      path: '/technology',
      name: 'Technology',
      component: Technology
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
})
