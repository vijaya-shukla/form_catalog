import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Personal from '@/components/Personal'
import Profile from '@/components/Profile'
import Expertise from '@/components/Expertise'
import Interview from '@/components/Interview'
import FinalPage from '@/components/FinalPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/expertise',
      name: 'Expertise',
      component: Expertise
    },
    {
      path: '/interview',
      name: 'Interview',
      component: Interview
    },
    {
      path: '/finalpage',
      name: 'FinalPage',
      component: FinalPage
    }
  ]
})
