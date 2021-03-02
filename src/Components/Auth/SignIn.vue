<template>
  <div class="sign_in_box bgc_coral">
    <div class="sign_in--area bgc_black c_white">
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
        <button class="submit" @click.prevent="signIn">
          sign in
        </button>
      </form>
      <div class="from_sign_to_reg" @click="$router.push('/registration')">
        Registration
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
        userPassword: null
      },
      submitStatus: null
    };
  },
  methods: {
    signIn() {
      this.$store
        .dispatch("signIn", this.user)
        .then(() => {
          if (this.$rout.name !== "main") this.$router.push({ name: "main" });
        })
        .catch(err => {
          this.submitStatus = err.message;
        });
    }
  }
};
</script>
<style scoped>
.sign_in_box {
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
.sign_in--area {
  position: relative;
  text-align: center;
  padding: 20px;
  border-radius: 7px;
}
form {
  display: flex;
  flex-direction: column;
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
  outline: none;
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
  margin: 1rem auto;
  font-size: 14px;
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
