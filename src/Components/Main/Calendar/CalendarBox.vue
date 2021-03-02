<template>
  <section class="calendar-visible wrapper bgc_coral">
    <div class="calendar_scroll">
      <div class="calendar-box">
        <CalendarOneDay
          v-for="(item, idx) of numberOfDays"
          :key="idx"
          :day="item"
          :date="month + '-' + item + '-' + new Date().getFullYear()"
          :active="
            arrDaysActiveMissions.includes(
              month + '-' + item + '-' + new Date().getFullYear()
            )
              ? true
              : null
          "
          :done="
            arrDaysDoneMissions.includes(
              month + '-' + item + '-' + new Date().getFullYear()
            )
              ? true
              : null
          "
        />
      </div>
    </div>
  </section>
</template>

<script>
import CalendarOneDay from "@/Components/Main/Calendar/CalendarOneDay";
import { mapGetters } from "vuex";

export default {
  components: {
    CalendarOneDay
  },
  props: {
    numberOfDays: {
      type: Array,
      default: () => {
        return {};
      }
    },
    month: {
      type: Number,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters(["missions", "arrDaysActiveMissions", "arrDaysDoneMissions"])
  },
  watch: {
    missions() {
      let arrToActive_local = [];
      let arrToDone_local = [];
      Object.entries(this.missions).forEach(item => {
        Object.entries(item[1]).forEach(item2 => {
          if (item2[1].completed === true) {
            if (!arrToDone_local.includes(item[0]))
              arrToDone_local.push(item[0]);
          } else {
            if (!arrToActive_local.includes(item[0]))
              arrToActive_local.push(item[0]);
          }
        });
      });
      this.$store.commit("setArrDaysActiveMissions", arrToActive_local);
      this.$store.commit("setArrDaysDoneMissions", arrToDone_local);
    }
  },
  mounted() {
    if (this.missions) {
      let arrToActive_local = [];
      let arrToDone_local = [];
      if (this.missions) {
        Object.entries(this.missions).forEach(item => {
          Object.entries(item[1]).forEach(item2 => {
            if (item2[1].completed === true) {
              if (!arrToDone_local.includes(item[0]))
                arrToDone_local.push(item[0]);
            } else {
              if (!arrToActive_local.includes(item[0]))
                arrToActive_local.push(item[0]);
            }
          });
        });
        this.$store.commit("setArrDaysActiveMissions", arrToActive_local);
        this.$store.commit("setArrDaysDoneMissions", arrToDone_local);
      }
    }
  }
};
</script>

<style scoped>
.calendar-visible {
  overflow-x: scroll;
  height: 105px;
  overflow: hidden;
  padding: 0px 17px;
}
.calendar_scroll {
  overflow-x: hidden;
  height: 100vw;
  max-height: 1200px;
  margin-left: -125px;
  width: max-content;
  display: inline-block;
  transform: rotate(-90deg);
  transform-origin: right top;
}
.calendar-box {
  width: 100px;
}
</style>
