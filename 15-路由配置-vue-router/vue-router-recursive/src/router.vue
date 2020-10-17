<script>
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './About.vue';
import AboutHome from './AboutHome.vue';
import AboutUs from './AboutUs.vue';
import AboutYou from './AboutYou.vue';
import Products from './Products.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: 'about',
          component: About,
          children: [
            {
              path: '',
              component: AboutHome
            },
            {
              path: 'us',
              component: AboutUs
            },
            {
              path: 'you',
              component: AboutYou
            },
            {
              path: 'both',
              components: {
                default: AboutUs,
                another: AboutYou
              }
            }
          ]
        },
        {
          path: 'products/:productId?',
          name: 'showProd', // 具名路由
          component: Products
        },
      ]
    },
  ]
});
</script>
