import { RouteConfig } from 'vue-router';

const autoLoadRoutes: RouteConfig[] = [];

const routerFiles = require.context('./', false, /.ts$/);

routerFiles.keys().forEach(name => {
  if (name !== './index.ts') {
    autoLoadRoutes.push(...routerFiles(name).default)
  }
});

const routes = [
  ...autoLoadRoutes,
  {
    path: '*',  //匹配不上的路由统一走404
    component: () => import('@/views/NotFound.vue')
  }
]

export default routes;
