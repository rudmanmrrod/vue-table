import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/Home.vue'
import Datatable from './components/Datatable/DatatableTemplate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/table',
      name: 'table',
      component: Datatable
    }
  ]
})
