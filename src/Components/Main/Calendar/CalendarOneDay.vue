<template>
  <div class="day_block" @click="setActiveDay_local_method">
    <span class="day_block-day">{{ day }}</span>
    <span class="name_of_day">{{ setDayOfWeek() }}</span>
    <div class="to_activity">
      <div v-if="done" class="point_completed bgc_coral"></div>
      <div v-if="active" class="point_active bgc_black"></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    day: {
      type: Number,
      default: () => {}
    },
    idx: {
      type: Number,
      default: () => {}
    },
    date: { type: String, default: "" },
    active: {
      type: Boolean,
      default: () => {}
    },
    done: { type: Boolean, default: () => {} }
  },
  methods: {
    ...mapActions(["setActiveDay"]),
    setActiveDay_local_method() {
      this.setActiveDay(this.date);
    },
    setDayOfWeek() {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysOfWeek[new Date(this.date).getDay()];
    }
  }
};
</script>
<style scoped>
.day_block {
  width: 60px;
  height: 60px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 7px;
  position: relative;
  transform: rotate(90deg);
}
.name_of_day {
  font-size: 1.2rem;
}
.to_activity {
  display: flex;
  height: 10px;
}
.point_completed,
.point_active {
  width: 5px;
  height: 5px;
  border-radius: 100%;
  margin: 2px 2px 0 2px;
}
</style>
