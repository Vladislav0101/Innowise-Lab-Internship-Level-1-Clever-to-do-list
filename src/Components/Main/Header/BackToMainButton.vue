<template>
  <router-link :to="pathMain">
    <button class="create bgc_white c_black">
      back to main
    </button>
  </router-link>
</template>
<script>
import routes from "@/route/routes";
export default {
  computed: {
    pathMain() {
      return routes.root;
    }
  }
};
</script>
<style scoped>
.create {
  padding: 5px;
  width: 140px;
  height: 25px;
  transition: all 0.1s linear;
  line-height: 0;
}
</style>
