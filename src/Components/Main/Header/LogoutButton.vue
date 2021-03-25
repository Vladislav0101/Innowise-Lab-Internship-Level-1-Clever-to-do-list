<template>
  <router-link :to="{ name: 'sign' }">
    <button class="logout" @click="logout">logout</button>
  </router-link>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser();
    }
  }
};
</script>
<style scoped>
.logout {
  width: 75px;
  height: 25px;
}
</style>
