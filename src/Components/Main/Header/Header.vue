<template>
  <header>
    <h1>
      missions for <span class="c_coral">{{ monthName }}</span>
    </h1>
    <div class="nav">
      <CreationButton v-if="!isCreated" />
      <BackToMainButton v-else />
      <LogoutButton />
    </div>
    <Burger :is-created="isCreated" />
  </header>
</template>

<script>
import Burger from "@/Components/Main/Header/Burger";
import LogoutButton from "@/Components/Main/Header/LogoutButton";
import CreationButton from "@/Components/Main/Header/CreationButton";
import BackToMainButton from "@/Components/Main/Header/BackToMainButton";
import { mapGetters } from "vuex";

export default {
  components: { Burger, LogoutButton, CreationButton, BackToMainButton },
  props: { isCreated: Boolean },
  data() {
    return {
      monthName: this.getMonthName()
    };
  },
  computed: {
    ...mapGetters(["months"])
  },
  beforeCreate() {
    this.$store.commit("setMonths");
  },
  methods: {
    getMonthName() {
      const date = new Date(),
        month = date.getMonth();
      return this.$store.getters.months[month];
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 3%;
  position: relative;
}
h1 {
  font-size: 1.5rem;
  font-weight: 100;
}
h1 span {
  font-family: "Stick", sans-serif !important;
}
.nav {
  display: grid;
  grid-template-columns: 62% 32%;
  grid-column-gap: 10px;
}
</style>
