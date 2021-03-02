<template>
  <div class="wrapper">
    <Header />
    <CalendarBox :number-of-days="numberOfDays" :month="month + 1" />
    <FieldBox />
  </div>
</template>
<script>
import CalendarBox from "@/Components/Main/Calendar/CalendarBox.vue";
import Header from "@/Components/Main/Header/Header";
import FieldBox from "@/Components/Main/TasksField/FieldBox";

export default {
  components: {
    Header,
    CalendarBox,
    FieldBox
  },
  data() {
    return {
      numberOfDays: this.countDays()
    };
  },
  methods: {
    countDays() {
      const date = new Date();
      this.month = date.getMonth();
      const numberDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      this.$store.commit("setDaysArray", numberDays[this.month]);
      let arr = [];
      for (let i = 1; i <= numberDays[this.month]; i++) {
        arr.push(i);
      }
      return arr.slice(date.getDate() - 1, arr.length + 1);
    }
  }
};
</script>
