import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import ProductList from '@/views/ProductList.vue';
import ContactsPage from '@/views/ContactsPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import AboutUs from '@/views/AboutUs.vue';
import CheckOut from '@/views/CheckOut.vue';







const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductList },
  { path: '/contact', component: ContactsPage },
  { path: '/about', component: AboutUs },
  { path: '/login', component: LoginPage },
  { path: '/checkout', name: 'checkout', component: CheckOut, props: (route) => ({ totalAmount: route.params.totalAmount })},


  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history'
});

export default router;
