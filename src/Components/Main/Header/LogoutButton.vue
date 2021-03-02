<template>
  <button class="logout" @click.prevent="logout">logout</button>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logoutUser");
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
