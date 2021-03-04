<template>
  <div class="auth_box bgc_coral">
    <div class="auth--area bgc_black c_white">
      <h1 class="c_white">
        to<span style="margin:0 15px" class="c_white">-</span>do
      </h1>
      <form action="sign-in">
        <input v-model="user.userMail" type="text" placeholder="mail" />
        <input
          v-model="user.userPassword"
          type="password"
          placeholder="password"
        />
        <button class="submit" @click.prevent="signIn_local_method">
          sign in
        </button>
      </form>
      <router-link :to="{ name: 'registration' }">
        <div class="from_sign_to_reg">
          Registration
        </div>
      </router-link>
      <p class="error">{{ submitStatus }}</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        userMail: null,
        userPassword: null
      },
      submitStatus: null
    };
  },
  methods: {
    ...mapActions(["signIn"]),
    signIn_local_method() {
      try {
        this.signIn(this.user);
        if (this.$route.name !== "main") this.$router.push({ name: "main" });
      } catch (err) {
        this.submitStatus = err.message;
        setTimeout(() => {
          this.submitStatus = null;
        }, 3000);
      }
    }
  }
};
</script>
<style scoped>
button {
  height: 40px;
  width: max-content;
  margin: 1rem auto;
  font-size: 14px;
}
</style>
