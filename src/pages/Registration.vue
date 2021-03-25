<template>
  <div class="auth_box bgc_coral">
    <div class="auth--area bgc_black c_white">
      <h1 class="c_white">
        to<span style="margin:0 15px" class="c_white">-</span>do
      </h1>
      <h2 class="c_white">Registration</h2>
      <form action="registration">
        <input v-model="user.userMail" type="text" placeholder="mail" />
        <input
          v-model="user.userPassword"
          type="password"
          placeholder="password"
        />
        <input
          v-model="user.userPasswordConfirm"
          type="password"
          placeholder="password"
        />
        <button class="submit" @click.prevent="createUser">
          Register
        </button>
      </form>
      <router-link :to="{ name: 'sign' }">
        <div class="from_sign_to_reg">
          Sign in
        </div>
      </router-link>
      <p class="error">{{ submitStatus }}</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import getCurrentUser from "../utils/firebaseInit";

export default {
  data() {
    return {
      user: {
        userMail: null,
        userPassword: null,
        userPasswordConfirm: null
      },
      submitStatus: null
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    createUser() {
      if (this.userPassword === this.userPasswordConfirm) {
        try {
          this.registerUser(this.user);
          this.$router.push({ name: "main" });
          this.submitStatus = true;
        } catch (err) {
          this.submitStatus = err.message;
          setTimeout(() => {
            this.submitStatus = null;
          }, 3000);
        }
      } else {
        this.submitStatus = "Check your password";
      }
    }
  }
};
</script>
<style scoped>
button {
  height: 40px;
  width: max-content;
  padding: 7px;
  margin: 1rem auto;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  transition: all 0.1s linear;
}
</style>
