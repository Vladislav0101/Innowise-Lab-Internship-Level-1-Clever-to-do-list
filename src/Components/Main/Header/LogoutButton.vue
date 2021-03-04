<template>
  <button class="logout" @click.prevent="logout">logout</button>
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
