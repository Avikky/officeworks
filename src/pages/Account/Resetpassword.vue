<template>
  <div id="login" class="row">
    <div
      class="form-container login-form-container col absolute-center window-width q-pa-md q-mt-md-sm shadow-5"
    >
      <div
        class="form-box-id text-secondary text-bold text-center shadow-5 content-center items-center q-pa-sm-md"
      >
        <p>Reset Password</p>
      </div>

      <div class="app-name">
        <h5 class="q-pa-sm-md logo-text text-bold text-italic text-center">{{ appName }}</h5>
      </div>

      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input filled type="email" label="Enter Your Email" />

        <div class="reset-btn">
          <q-btn label="Submit" rounded class="q-px-xl q-py-xs" type="submit" color="primary" />
        </div>
      </q-form>
      <div class="q-pa-md row after-form-div">
        <p class="col-md-6 col-xs-6">
          <router-link to="/register">Creat account</router-link>
        </p>
        <p class="col-md-6 col-xs-6">
          <router-link to="/login">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      appName: "Officeworks"
    };
  }
};
</script>

<style scoped>
.login-form-container {
  margin-top: 3em;
  max-width: 300px;
  border-radius: 10px;
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
  margin: -3.5rem auto 4.3rem auto;
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
  margin: -3.5rem auto 2rem auto;
}
.after-form-div {
  margin-top: 1.5rem;
}

.reset-btn {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}
</style>
