<template>
  <div class="card">
    <h5 class="card-header">Register</h5>
    <div class="card-body">
      <form @submit.prevent="registerUser" action="" class="form-group">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            id="name"
            class="form-control"
            type="text"
            name="name"
            v-model="name"
          />
        </div>
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
          <label for="email" class="form-label">Email address</label>
          <input
            id="email"
            class="form-control"
            type="email"
            placeholder="name@example.com"
            v-model="email"
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
        <div class="mb-3">
          <label for="confirm-password" class="form-label"
            >Confirm Password</label
          >
          <input
            id="confirm-password"
            class="form-control"
            type="password"
            name="confirm-password"
            v-model="confirmPassword"
          />
        </div>
        <button class="mb-3 btn btn-primary" type="submit">Register</button>
        <p>
          Already have an account?
          <router-link to="/login" href="#" class="card-link"
            >Login</router-link
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
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    async registerUser() {
      const userData = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        confirm_password: this.confirmPassword,
      };
      try {
        await this.register(userData);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style>
</style>