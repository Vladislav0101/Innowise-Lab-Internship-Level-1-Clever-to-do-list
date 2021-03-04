<template>
  <section class="calendar-visible wrapper bgc_coral">
    <div class="calendar_scroll">
      <div class="calendar-box">
        <CalendarOneDay
          v-for="(item, idx) of numberOfDays"
          :key="idx"
          :day="item"
          :date="fullDate(item)"
          :active="arrDaysActiveMissions.includes(fullDate(item)) ? true : null"
          :done="arrDaysDoneMissions.includes(fullDate(item)) ? true : null"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CalendarOneDay from "@/Components/Main/Calendar/CalendarOneDay";
import { mapActions, mapGetters } from "vuex";

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
      this.setArrOfStateMissions();
    }
  },
  mounted() {
    if (this.missions) {
      this.setArrOfStateMissions();
    }
  },
  methods: {
    ...mapActions(["setArrDaysActiveMissions", "setArrDaysDoneMissions"]),
    fullDate(item) {
      return `${this.month}-${item}-${new Date().getFullYear()}`;
    },
    setArrOfStateMissions() {
      let arrToActive_local = [];
      let arrToDone_local = [];
      if (this.missions) {
        Object.entries(this.missions).forEach(missionsOnADay => {
          Object.entries(missionsOnADay[1]).forEach(mission => {
            if (mission[1].completed === true) {
              if (!arrToDone_local.includes(missionsOnADay[0]))
                arrToDone_local.push(missionsOnADay[0]);
            } else {
              if (!arrToActive_local.includes(missionsOnADay[0]))
                arrToActive_local.push(missionsOnADay[0]);
            }
          });
        });
        this.setArrDaysActiveMissions(arrToActive_local);
        this.setArrDaysDoneMissions(arrToDone_local);
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
