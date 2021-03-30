<template>
  <div class="wrapper">
    <Header :is-created="true" />
    <form :class="{ creation: true, error_to_sent: errorInCreation }">
      <label for="title">Title</label>
      <input
        v-if="!isEdit"
        id="title"
        v-model="mission.title"
        class="input-title"
        placeholder="title"
      />
      <input v-else id="title" v-model="toEdit.title" class="input-title" />
      <label for="description">Description</label>
      <textarea
        v-if="!isEdit"
        id="description"
        v-model="mission.description"
        class="input-description"
        placeholder="description"
      />
      <textarea
        v-else
        id="description"
        v-model="toEdit.description"
        class="input-description"
      />
      <div class="date">
        <label for="day">Day</label>
        <label for="month">Month</label>
        <label for="year">Year</label>
        <input id="day" v-model="date.day" class="date-item" />
        <select id="month" v-model="date.month" class="date-item">
          <option v-for="(month, idx) in months" :key="idx" :value="idx + 1">
            {{ month.match(/^.{0,3}/).toString() }}
          </option>
        </select>
        <input id="year" v-model="date.year" class="date-item" />
      </div>
      <button type="submit" @click.prevent="setMission">save</button>
    </form>
  </div>
</template>
<script>
import Header from "@/Components/Main/Header/Header";
import { mapActions, mapGetters } from "vuex";
import routes from "@/route/routes";

export default {
  components: {
    Header
  },
  data() {
    return {
      mission: {
        title: null,
        description: null,
        completed: false
      },
      date: {
        month: null,
        day: null,
        year: null
      },
      toEdit: {
        title: null,
        description: null
      },
      errorInCreation: false
    };
  },
  computed: {
    ...mapGetters([
      "months",
      "user",
      "isEdit",
      "titleToEdit",
      "descriptionToEdit",
      "activeDay",
      "keyValueToEdit"
    ])
  },
  mounted() {
    if (this.isEdit) {
      this.toEdit.title = this.titleToEdit;
      this.toEdit.description = this.descriptionToEdit;
    }
  },
  methods: {
    ...mapActions(["setIsEdit", "setNewMission", "removeMission"]),
    setMission() {
      const myDate = new Date(
        Object.entries(this.date)
          .reduce((cur, item) => {
            if (item[0] === "month") item[1]++;
            cur.push(item[1]);
            return cur;
          }, [])
          .join("-")
      );
      let dateToKey = `${myDate.getMonth()}-${myDate.getDate()}-${myDate.getFullYear()}`;

      if (this.isEdit) {
        this.removeMission({
          user: this.user,
          activeDay: this.activeDay,
          keyValueToEdit: this.keyValueToEdit
        });
        this.mission.title = this.toEdit.title;
        this.mission.description = this.toEdit.description;
      }
      if (
        (this.mission.title || this.toEdit.title) &&
        this.date.month &&
        this.date.day &&
        this.date.year
      ) {
        this.setNewMission({
          user: this.user,
          dateToKey: dateToKey,
          mission: this.mission
        });
        this.setIsEdit(false);
        this.$router.push(routes.root);
      } else {
        this.errorInCreation = true;
        setTimeout(() => {
          this.errorInCreation = false;
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
.creation {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  margin: 10px auto;
  padding: 10px;
  transition: all 0.2s linear;
}
.error_to_sent {
  outline: 1px solid rgb(255, 15, 15) !important;
  background-color: rgba(255, 47, 47, 0.329);
}
.date {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  width: max-content;
}
.date-item {
  width: 50px;
  margin: 5px 10px;
  outline: none;
}
label {
  font-size: 1.5rem;
}
.date label {
  font-size: 1rem;
}
.date input {
  max-width: 200px;
}
input,
.input-description {
  width: 400px;
  margin: 10px;
  padding: 3px 5px;
}
label[for="description"] {
  margin-top: 15px;
}
.input-description {
  min-height: 100px;
  resize: none;
}
button {
  font-size: 1.2rem;
  width: 80px;
  margin-top: 5px;
}
</style>
