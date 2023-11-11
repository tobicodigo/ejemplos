<template>
  <h1>Register</h1>
  <label for="username">Username:</label
  ><input type="text" name="username" :value="username" />
  <span class="error" v-show="!userNameIsCorrect"
    >Username is not correct (max 8 letters)</span
  >

  <label for="email">Email:</label
  ><input type="email" name="email" v-model="email" />
  <span class="error" v-show="!emailIsCorrect">Email is not correct</span>

  <label for="password">Password:</label
  ><input type="password" name="password" :value="password" />
  <span class="error" v-show="!passwordIsCorrect"
    >Password is not correct (max 8 letters)</span
  >

  <fieldset>
  <legend>Gender</legend>

  <div>
    <input type="radio" name="gender" value="male" checked />
    <label for="male">Male</label>
  </div>

  <div>
    <input type="radio" name="gender" value="female" />
    <label for="female">Female</label>
  </div>

  <div>
    <input type="radio" name="gender" value="d" />
    <label for="d">No sé</label>
  </div>

</fieldset>


<fieldset>
  <legend>Profession</legend>
<select name="profession">
  <option value="Estudiante">Estudiante</option>
  <option value="En paro">En paro</option>
  <option value="Jubilado">Jubilado</option>
  <option value="Cuenta propia">Cuenta propia</option>
  <option value="Directivo">Directivo</option>
</select>
</fieldset>



  <button @click="register">register</button>
  <span class="success" v-show="formIsCorrect">Thank you for register</span>

</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
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

      if (
        this.emailIsCorrect &
        this.userNameIsCorrect &
        this.passwordIsCorrect
      ) {
        this.formIsCorrect = true;
      } else {
        this.formIsCorrect = false;
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 10px;
  height: 30px;
}
.error {
  color: red;
}

.success {
  color: green;
  padding-bottom: 20px;

}
</style>
