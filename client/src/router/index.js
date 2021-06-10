import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from './../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requireGuest: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requireGuest: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// protect routes from unauthorized users
const protectRoutes = (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!store.getters.isLoggedIn) {
      // if the user is not logged in then redirects to the login page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requireGuest)) {
    if (store.getters.isLoggedIn) {
      // if the user is logged in then redirects to the profile page
      next('/profile');
    } else {
      next();
    }
  } else {
    next();
  }
};

router.beforeEach(protectRoutes);

export default router;
