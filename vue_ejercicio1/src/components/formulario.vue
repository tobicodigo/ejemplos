<template>
  <h1>Register</h1>
  <label for="username">Username:</label
  ><input type="text" name="username" :value="username" />
  <span v-show="!userNameIsCorrect">Username is not correct (max 8 letters)</span>

  <label for="email">Email:</label
  ><input type="email" name="email" v-model="email" />
  <span v-show="!emailIsCorrect">Email is not correct</span>

  <label for="password">Password:</label
  ><input type="password" name="password" :value="password" />
  <span v-show="!passwordIsCorrect">Password is not correct (max 8 letters)</span>

  <button @click="register">register</button>

  <span v-show="formIsCorrect">Thank you for register</span>
</template>

<script>
export default {
  data() {
    return {
      username: "username",
      email: "email",
      password: "password",
      userNameIsCorrect: true,
      emailIsCorrect: true,
      passwordIsCorrect: true,
      formIsCorrect: false,
    };
  },
  methods: {
    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    register() {
      this.userNameIsCorrect = true;
      this.emailIsCorrect = true;
      this.passwordIsCorrect = true;

      if (this.username.length > 10) {
        this.userNameIsCorrect = false;
        alert("username not correct");
      }

      if (!this.validateEmail(this.email)) {
        this.emailIsCorrect = false;
        alert("email not correct");
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 10px;
  margin-bottom: 50px;
}
span {
  color: red;
}
</style>
