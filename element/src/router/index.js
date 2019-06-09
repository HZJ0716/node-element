import Vue from 'vue'
import Router from 'vue-router'
import Create from '../views/Create.vue'
import List from '../views/List.vue'
import Serach from '../views/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Create',
      redirect: '/bli/create'
    }, {
      path: '/bli/create',
      component: Create
    }, {
      path: '/bli/list/:name',
      component: List
    }, {
      path: '/bli/search',
      component: Serach
    }
  ]
})
