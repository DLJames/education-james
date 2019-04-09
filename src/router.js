import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './components/vuex/TodoList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/eventBus',
      name: 'TodoList EventBus',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Todolist-eventbus" */ './components/vuex/TodoList-eventbus')
    },
    {
      path: '/eventBus-g',
      name: 'TodoList EventBus Global',
      component: () => import(/* webpackChunkName: "Eventbus-G" */ './components/vuex/Eventbus-G')
    },
    {
      path: '/vuex',
      name: 'TodoList vuex',
      component: () => import(/* webpackChunkName: "TodoList-vuex" */ './components/vuex/TodoList-vuex')
    }
  ]
})
