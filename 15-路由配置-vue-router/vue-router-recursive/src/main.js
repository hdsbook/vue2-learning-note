import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router.vue';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  template: `<router-view></router-view>`
})
