import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App),
  store,                // store: store, 當上層組件引入store時，每個下層組件都會有this.$store可使用
})
