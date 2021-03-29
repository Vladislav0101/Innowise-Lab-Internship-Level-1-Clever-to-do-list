<template>
  <div class="auth_box bgc_coral">
    <div class="auth--area bgc_black c_white">
      <h1 class="c_white">
        to<span style="margin:0 15px" class="c_white">-</span>do
      </h1>
      <form action="sign-in">
        <input v-model="userLocal.userMail" type="text" placeholder="mail" />
        <input
          v-model="userLocal.userPassword"
          type="password"
          placeholder="password"
        />
        <button class="submit" @click.prevent="signIn_local_method">
          sign in
        </button>
      </form>
      <router-link :to="pathRegistration">
        <div class="from_sign_to_reg">
          Registration
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
        userPassword: null
      },
      submitStatus: null
    };
  },
  computed: {
    ...mapGetters(["user"]),
    pathRegistration() {
      return routes.routes.registration;
    }
  },
  methods: {
    ...mapActions(["signIn"]),
    async signIn_local_method() {
      try {
        await this.signIn(this.userLocal);
        if (this.user) {
          this.$router.push(routes.root);
        }
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
