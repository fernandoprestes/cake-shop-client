import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/Home/index.vue');
const Store = () => import('../pages/Store/index.vue');

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
