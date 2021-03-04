<template>
  <router-link :to="{ name: 'create' }">
    <button class="create bgc_white c_black">
      create a mission
    </button>
  </router-link>
</template>
<style scoped>
.create {
  padding: 5px;
  width: 140px;
  height: 25px;
  transition: all 0.1s linear;
  line-height: 0;
}
</style>
