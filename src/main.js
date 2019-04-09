import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get () {
      return EventBus;
    }
  }
})
// Vue.prototype.$bus = EventBus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
