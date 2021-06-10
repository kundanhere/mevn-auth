<template>
  <div id="app">
    <Navbar />
    <div class="container mt-3">
      <Errors v-if="error" :msg="error" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";
import { mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    Errors,
  },
  computed: mapGetters(["error"]),
};
</script>


<style>
.card {
  width: 26rem;
  margin: auto;
  margin-top: 4rem;
}
</style>
