import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false;

// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;
// load token from the localStorage
const token = localStorage.getItem('token');
// if there is any token then we'll simply append default axios authorization headers4
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
