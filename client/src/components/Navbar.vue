<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about"
              >About</router-link
            >
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" aria-current="page" to="/login"
              >Login</router-link
            >
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" aria-current="page" to="/register"
              >Register</router-link
            >
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" aria-current="page" to="/profile"
              >Profile</router-link
            >
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <a
              @click.prevent="logout"
              class="nav-link"
              aria-current="page"
              to="/logout"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    },
  },
};
</script>

<style>
</style>