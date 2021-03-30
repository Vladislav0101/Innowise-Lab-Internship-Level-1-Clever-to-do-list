<template>
  <router-link :to="pathSign">
    <button class="logout" @click="logout">logout</button>
  </router-link>
</template>
<script>
import { mapActions } from "vuex";
import routes from "@/route/routes";
export default {
  computed: {
    pathSign() {
      return routes.sign;
    }
  },
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
