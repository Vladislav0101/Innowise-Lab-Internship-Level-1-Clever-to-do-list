<template>
  <div class="auth_box bgc_coral">
    <div class="auth--area bgc_black c_white">
      <h1 class="c_white">
        to<span style="margin:0 15px" class="c_white">-</span>do
      </h1>
      <h2 class="c_white">Registration</h2>
      <form action="registration">
        <input v-model="userLocal.userMail" type="text" placeholder="mail" />
        <input
          v-model="userLocal.userPassword"
          type="password"
          placeholder="password"
        />
        <input
          v-model="userLocal.userPasswordConfirm"
          type="password"
          placeholder="password"
        />
        <button class="submit" @click.prevent="createUser">
          Register
        </button>
      </form>
      <router-link :to="pathSign">
        <div class="from_sign_to_reg">
          Sign in
        </div>
      </router-link>
      <p class="error">{{ submitStatus }}</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import routes from "@/route/routes";

export default {
  data() {
    return {
      userLocal: {
        userMail: null,
        userPassword: null,
        userPasswordConfirm: null
      },
      submitStatus: null
    };
  },
  computed: {
    ...mapGetters(["user"]),
    pathSign() {
      return routes.sign;
    }
  },
  methods: {
    ...mapActions(["registerUser"]),
    async createUser() {
      if (this.userPassword === this.userPasswordConfirm) {
        try {
          await this.registerUser(this.userLocal);
          if (this.user) {
            this.$store.dispatch("setMissions", this.user);
            this.$router.push(routes.root);
            this.submitStatus = true;
          }
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
