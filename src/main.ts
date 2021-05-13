import Vue from 'vue';
import App from './App.vue';
import routes from './router';
import store from './store';
import VueRouter, { Route } from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to: Route, from: Route, next: () => void) => {
  if (from.meta.keepAlive) {
    const $content = document.querySelector('#content');
    const scrollTop = $content ? $content.scrollTop : 0;
    from.meta.scrollTop = scrollTop;
  }
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
