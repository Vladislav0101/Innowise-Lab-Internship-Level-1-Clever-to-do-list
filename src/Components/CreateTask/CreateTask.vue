<template>
  <div class="wrapper">
    <Header :is-created="true" />
    <form class="creation">
      <label for="title">Title</label>
      <input
        v-if="!isEdit"
        v-model="mission.title"
        class="input-title"
        name="title"
        placeholder="title"
      />
      <input v-else v-model="toEdit.title" class="input-title" name="title" />
      <label for="description">Description</label>
      <textarea
        v-if="!isEdit"
        v-model="mission.description"
        class="input-description"
        name="description"
        placeholder="description"
      />
      <textarea
        v-else
        v-model="toEdit.description"
        class="input-description"
        name="description"
      />
      <div class="date">
        <label for="day">Day</label>
        <label for="month">Month</label>
        <label for="year">Year</label>
        <input v-model="date.day" name="day" class="date-item" />
        <select v-model="date.month" name="month" class="date-item">
          <option v-for="(month, idx) in months" :key="idx" :value="idx + 1">
            {{ month.match(/^.{0,3}/).toString() }}
          </option>
        </select>
        <input v-model="date.year" name="year" class="date-item" />
      </div>
      <button type="submit" @click.prevent="setMission">save</button>
    </form>
  </div>
</template>
<script>
import Header from "@/Components/Main/Header/Header";
import firebase from "firebase";
import { mapGetters } from "vuex";

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
      }
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
      const dateToKey = `${myDate.getMonth()}-${myDate.getDate()}-${myDate.getFullYear()}`;

      if (this.isEdit) {
        firebase
          .database()
          .ref("users/" + this.user + "/" + this.activeDay)
          .update({
            [this.keyValueToEdit]: null
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
        firebase
          .database()
          .ref("users/" + this.user + "/" + dateToKey)
          .update({
            [+new Date()]: this.mission
          });
        this.$store.commit("isEdit", false);
        this.$router.push({ name: "main" });
      } else {
        const block_creation = document.querySelector(".creation");
        block_creation.classList.add("error_to_sent");
        setTimeout(() => {
          block_creation.classList.remove("error_to_sent");
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
