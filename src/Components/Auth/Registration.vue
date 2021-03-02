<template>
  <div class="registration_box bgc_coral">
    <div class="registration--area bgc_black c_white">
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
      <div class="from_sign_to_reg" @click="$router.push({ name: 'sign' })">
        Sign in
      </div>
      <p class="error">{{ submitStatus }}</p>
    </div>
  </div>
</template>
<script>
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
  computed: {
    loading() {
      return this.$store.loading;
    }
  },
  methods: {
    createUser() {
      if (this.userPassword === this.userPasswordConfirm) {
        this.$store
          .dispatch("registerUser", this.user)
          .then(() => {
            this.submitStatus = true;
          })
          .catch(err => {
            this.submitStatus = err.message;
          });
      } else {
        this.submitStatus = "Check your password";
      }
    }
  }
};
</script>
<style scoped>
.registration_box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
h1,
h2 {
  margin-bottom: 2rem;
}
.registration--area {
  text-align: center;
  padding: 25px;
  border-radius: 7px;
}
form {
  display: flex;
  flex-direction: column;
  position: relative;
}
input {
  width: 200px;
  height: 30px;
  font-size: 1rem;
  margin: 5px;
  border: 1px solid #fcfcfc;
  border-radius: 7px;
  background: none;
  color: #fcfcfc;
  padding-left: 10px;
  transition: all 0.1s linear;
}
input:hover {
  background-color: #fcfcfc;
  color: black;
  cursor: pointer;
}
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
button:hover {
  box-shadow: 0 0 10px 0px #fcfcfc;
  cursor: pointer;
}
.from_sign_to_reg {
  width: max-content;
  margin: 0 auto;
}
.from_sign_to_reg:hover {
  cursor: pointer;
  color: white;
}
.error {
  position: absolute;
  color: #f44336;
  background: #000000d9;
  font-weight: 600;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.1s linear;
}
</style>
