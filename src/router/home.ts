const Home = () => import('../views/Home.vue');

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
      scrollTop: 0,
    },
  }
];