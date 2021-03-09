<template>
  <div class="burger">
    <div :class="{ burger_content: true, burger_animation: active }">
      <CreationButton v-if="!isCreated" />
      <BackToMainButton v-else />
      <LogoutButton />
    </div>
    <div class="burger_button" @click="getContent">
      <span class="burger_button_span"></span>
    </div>
  </div>
</template>
<script>
import LogoutButton from "@/Components/Main/Header/LogoutButton";
import CreationButton from "@/Components/Main/Header/CreationButton";
import BackToMainButton from "@/Components/Main/Header/BackToMainButton";

export default {
  components: { LogoutButton, CreationButton, BackToMainButton },
  props: {
    isCreated: Boolean
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    getContent() {
      this.active = !this.active;
    }
  }
};
</script>
<style scoped>
.burger {
  display: none;
}
.burger_animation {
  display: flex !important;
  opacity: 1 !important;
  left: 0 !important;
  transition: all 1s linear;
}
.burger_content {
  display: none;
  gap: 10px;
  justify-content: center;
  align-items: center;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 100%;
  right: 0;
  bottom: 0;
}
.burger_button {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  align-items: center;
  display: flex;
  transition: all 0.2s linear;
}
.burger_button_span {
  margin: 0 auto;
}
.burger_button_span::before,
.burger_button_span::after,
.burger_button_span {
  width: 2px;
  height: 20px;
  display: block;
  transform: rotate(90deg);
}
.burger_button_span::before,
.burger_button_span::after {
  content: "";
}
.burger_button_span::before {
  transform: translate(-6px, 0px);
}
.burger_button_span::after {
  transform: translate(6px, -20px);
}
</style>
