import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/Home/index.vue');
const Store = () => import('../pages/Store/index.vue');
const Payment = () => import('../pages/Payment/index.vue');
const Checkout = () => import('../pages/Checkout/index.vue');

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
    path: '/payment',
    name: 'Payment',
    component: Payment,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
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
