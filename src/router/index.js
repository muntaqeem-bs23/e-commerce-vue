import Vue from 'vue'
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CartPage from '../pages/CartPage.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: HomePage},
  {path: '/cart', component: CartPage},
  {path: '/cart/:id', component: CartPage}

]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;