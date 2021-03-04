<template>
  <section class="tasks_field c_black ">
    <h2 v-if="activeDay">missions for {{ activeDayInDF.getDate() }}th</h2>
    <Field />
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import Field from "@/Components/Main/TasksField/Field";

export default {
  components: { Field },
  computed: {
    ...mapGetters(["activeDay", "user", "activeDayInDF"])
  },
  mounted() {
    this.$store.commit("setActiveDay", new Date());
  }
};
</script>
<style scoped>
.tasks_field {
  height: 400px;
  width: 100%;
}
h2 {
  text-align: center;
  margin: 5px 0;
}
</style>
