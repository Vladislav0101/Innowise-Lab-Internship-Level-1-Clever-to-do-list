<template>
  <button
    v-if="!isCreated"
    class="create bgc_white c_black"
    @click="$router.push('/create')"
  >
    create a mission
  </button>
</template>
<script>
export default {
  props: { isCreated: { type: Boolean, default: () => {} } }
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
