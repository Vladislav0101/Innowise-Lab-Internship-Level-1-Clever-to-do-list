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
import { mapActions } from "vuex";

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
    ...mapActions(["setDaysArray"]),
    countDays() {
      const date = new Date(),
        year = date.getFullYear();
      this.month = date.getMonth();
      const numberDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        numberDays[1] = 29;
      }
      this.setDaysArray(numberDays[this.month]);
      let arr = new Array(numberDays[this.month]).fill();
      return arr
        .map((item, idx) => {
          return idx + 1;
        })
        .slice(date.getDate() - 1, arr.length + 1);
    }
  }
};
</script>
