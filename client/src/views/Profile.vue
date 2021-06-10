<template>
  <div class="card" style="width: 18rem" v-if="user">
    <div class="card-header">User Profile</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Welcome {{ user.name }}</li>
      <li class="list-group-item">Email: {{ user.email }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: { ...mapGetters(["user"]) },
  methods: {
    ...mapActions(["getProfile"]),
  },
  created() {
    this.getProfile();
  },
};
</script>

<style>
</style>