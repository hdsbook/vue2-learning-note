<script>
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './About.vue';
import AboutHome from './AboutHome.vue';
import AboutUs from './AboutUs.vue';
import AboutYou from './AboutYou.vue';
import Products from './Products.vue';

export default new VueRouter({
  mode: 'hash', // 預設值為 hash, 可設為history消去網址多的#，但上線時要設定後端環境的 URL rewrite
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
      children: [
        {
          path: 'about',
          alias: 'story', // 別名
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
        {
            path: '*',
            redirect: { name: 'home' } // 具名轉址
        },
      ]
    },
  ]
});
</script>
