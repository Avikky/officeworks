<template>
  <div>
    <div id="login" class="row">
      <div
        class="form-container login-form-container col absolute-center window-width q-pa-md q-mt-md-sm shadow-5"
      >
        <div
          class="form-box-id text-secondary text-bold text-center shadow-5 content-center items-center q-pa-sm-md"
        >
          <p>Client Sign-In</p>
        </div>
        <div class="app-name">
          <h5 class="q-pa-sm-md logo-text text-bold text-italic text-center">{{appName}}</h5>
        </div>

        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input filled v-model="emailOrUsername" label="Username or Email">
            <template v-slot:append>
              <q-icon name="mail
" />
            </template>
          </q-input>

          <q-input filled type="password" v-model="password" label="Enter Password" lazy-rules>
            <template v-slot:append>
              <q-icon name="vpn_key
            " />
            </template>
          </q-input>

          <q-toggle v-model="rememberMe" label="Remember me" />

          <div class="login-btn">
            <q-btn label="Sign-In" rounded class="q-px-xl q-py-xs" type="submit" color="primary" />
            <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
          </div>
        </q-form>
        <div class="q-pa-md row after-form-div">
          <p class="col-md-6 col-xs-6">
            <router-link to="/register">Creat account</router-link>
          </p>

          <p class="col-md-6 col-xs-6">
            <router-link to="/reset-password">Forgot Password?</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      appName: "Officeworks",
      password: "",
      emailOrUsername: "",
      rememberMe: false
    };
  },
  methods: {
    onSubmit() {
      console.log("hello from login");
    }
  }
};
</script>

<style scoped>
/* #login {
  margin-top: 3rem !important;
  margin-bottom: 6rem !important;
} */

.login-form-container {
  margin-top: 7em;
  /* max-width: 300px; */
  border-radius: 10px;
  margin-bottom: 4em !important;
}

.logo-text {
  display: inline-block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 28px !important;
  text-align: center !important;
}

.form-box-id {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -3.5rem auto 1.3rem auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #0219e3;
  color: #fff !important;
}
.app-name {
  display: flex;
  justify-content: center;
  align-items: center;
}
.after-form-div {
  margin-top: 1.5rem;
}

.login-btn {
  display: flex !important;
  justify-content: center !important;
}
</style>