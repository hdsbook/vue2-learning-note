<template>
  <div id="app">
    <div class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './About.vue';
import Products from './Products.vue';

// 當 Vue use VueRouter 之後，就有 router-view, router-link 的組件可以用了)
Vue.use(VueRouter);

export default {
  router: new VueRouter({
    routes: [
      { path: '/about', component: About },
      { path: '/products/:productId?', component: Products },
    ]
  }),
}
</script>
