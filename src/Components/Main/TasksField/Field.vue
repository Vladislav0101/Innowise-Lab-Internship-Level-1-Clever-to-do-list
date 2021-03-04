<template>
  <div>
    <div v-if="missionsForActiveDay" class="field bgc_coral">
      <div class="current_missions">
        <h3 class="c_white">current</h3>
        <ul>
          <Mission
            v-for="(item, key) in active"
            :key="key"
            :item="item"
            :key-value="key"
            :checked="false"
          />
        </ul>
      </div>
      <div class="completed_missions">
        <h3 class="c_white">completed</h3>
        <ul>
          <Mission
            v-for="(item, key) in done"
            :key="key"
            :item="item"
            :key-value="key"
            :checked="true"
          />
        </ul>
      </div>
    </div>
    <div v-else class="no_field bgc_coral c_white">There are no missions</div>
  </div>
</template>
<script>
import Mission from "@/Components/Main/TasksField/Mission";
import { mapGetters } from "vuex";

export default {
  components: {
    Mission
  },
  data() {
    return {
      active: {},
      done: {},
      activeMissions: null
    };
  },
  computed: {
    ...mapGetters(["activeDay", "missions", "missionsForActiveDay"])
  },
  watch: {
    missionsForActiveDay() {
      this.completedMissions();
    }
  },
  mounted() {
    this.completedMissions();
  },
  methods: {
    completedMissions() {
      this.active = {};
      this.done = {};
      if (this.missionsForActiveDay) {
        Object.keys(this.missionsForActiveDay).forEach(item => {
          if (this.missionsForActiveDay[item].completed === false) {
            this.active[item] = this.missionsForActiveDay[item];
          } else {
            this.done[item] = this.missionsForActiveDay[item];
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.field {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.no_field {
  padding: 25px;
  text-align: center;
  font-size: 1.5rem;
}
.completed_missions,
.current_missions {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
}
</style>
