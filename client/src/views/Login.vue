<template>
  <div class="card">
    <h5 class="card-header">Login</h5>
    <div class="card-body">
      <form @submit.prevent="loginUser" action="" class="form-group">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            id="username"
            class="form-control"
            type="text"
            name="username"
            v-model="username"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            class="form-control"
            type="password"
            name="password"
            v-model="password"
          />
        </div>
        <button class="mb-3 btn btn-primary" type="submit">Login</button>
        <p>
          Don't have an account?
          <router-link to="/register" href="#" class="card-link"
            >Create one</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async loginUser() {
      let userCredentials = {
        username: this.username,
        password: this.password,
      };
      try {
        await this.login(userCredentials);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style>
</style>