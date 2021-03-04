<template>
  <li class="mission">
    <input
      id="completed"
      v-model="completed"
      type="checkbox"
      name="completed"
      class="custom_checkbox"
      @click="setChecked"
    />
    <h3 class="mission-title">
      {{ item.title }}
    </h3>
    <img
      src="../../../assets/delete.svg"
      class="delete"
      width="17px"
      @click="deleteMission"
    />
    <img
      src="../../../assets/edit.svg"
      class="edit"
      width="17px"
      @click="editMission"
    />
    <p id="description" class="mission-description">
      {{ item.description }}
    </p>
  </li>
</template>
<script>
import firebase from "firebase";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    item: { type: Object, default: () => {} },
    keyValue: { type: String, default: "" },
    checked: Boolean
  },
  data() {
    return {
      completed: this.item.completed
    };
  },
  computed: {
    ...mapGetters(["user", "activeDay", "isEdit"])
  },
  methods: {
    ...mapActions([
      "setIsEdit",
      "setKeyValueToEdit",
      "setTitleToEdit",
      "setDescriptionToEdit"
    ]),
    setChecked() {
      this.item.completed = this.item.completed ? false : true;
      firebase
        .database()
        .ref(`users/${this.user}/${this.activeDay}`)
        .update({
          [this.keyValue]: this.item
        });
    },
    deleteMission() {
      firebase
        .database()
        .ref(`users/${this.user}/${this.activeDay}`)
        .update({
          [this.keyValue]: null
        });
    },
    editMission() {
      this.setIsEdit(true);
      this.setKeyValueToEdit(true);
      this.setTitleToEdit(this.item.title);
      this.setDescriptionToEdit(this.item.description);
      this.$router.push({ name: "create" });
    }
  }
};
</script>
<style scoped>
.mission {
  box-sizing: border-box;
  width: 300px;
  margin: 15px 0;
  padding: 5px 10px 5px 15px;
  min-height: 30px;
  display: grid;
  grid-template-columns: 10% 75% 9% 6%;
  align-items: center;
  border-radius: 7px;
  overflow-x: auto;
  cursor: default;
}
.mission-description {
  grid-area: 2/1/2/3;
}
.custom_checkbox {
  cursor: pointer;
}
</style>
