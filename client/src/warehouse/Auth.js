import axios from 'axios';
import router from './../router';

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  error: null,
};
const mutations = {
  login_success(state, token, user) {
    state.token = token;
    state.user = user;
    state.status = 'success';
    state.error = null;
  },
  login_error(state, error) {
    state.error = error.response.data.message;
  },
  register_success(state) {
    state.status = 'success';
    state.error = null;
  },
  register_error(state, error) {
    state.error = error.response.data.message;
  },
  logout_success(state) {
    state.token = '';
    state.user = {};
    state.status = '';
    state.error = null;
  },
  logout_error(state, error) {
    state.error = error.response.data.message;
  },
  profile_success(state, user) {
    state.status = 'success';
    state.user = user;
    state.error = null;
  },
  profile_error(state, error) {
    state.error = error.response.data.message;
  },
};
const actions = {
  /**
   * @description Login users
   * @param userCred
   * @returns response
   */
  async login({ commit }, userCred) {
    try {
      const res = await axios.post('/api/users/login', userCred);
      if (res.data.status === 'success') {
        const user = res.data.user;
        const token = res.data.token;

        // store the token into localStorage
        await localStorage.setItem('token', token);
        // set axios default headers
        axios.defaults.headers.common['Authorization'] = token;
        commit('login_success', token, user);
        router.push('/profile');
      }
      return res;
    } catch (err) {
      commit('login_error', err);
      return;
    }
  },

  /**
   * @description Register new users
   * @param data
   * @returns response
   */
  async register({ commit }, data) {
    try {
      const res = await axios.post('/api/users/register', data);
      if (res.data.status === 'success') {
        commit('register_success');
        router.push('/login');
      }
      return res;
    } catch (err) {
      commit('register_error', err);
      return;
    }
  },

  /**
   * @description Logout the user
   */
  async logout({ commit }) {
    try {
      // remove token from the localStorage
      await localStorage.removeItem('token');
      // remove axios default headers
      delete axios.defaults.headers.common['Authorization'];
      commit('logout_success');
      router.push('/login');
    } catch (err) {
      commit('logout_error', err);
    }
    return;
  },

  /**
   * @desc Get the user profile
   */
  async getProfile({ commit }) {
    try {
      const response = await axios.get('/api/users/profile');
      commit('profile_success', response.data.user);
      return response;
    } catch (err) {
      commit('profile_error', err);
      return;
    }
  },
};
const getters = {
  //   isLoggedIn: function(state) {
  //     return state.token != '' ? true : false;
  //   },
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
  error: (state) => state.error,
};

export default {
  getters,
  state,
  mutations,
  actions,
};
