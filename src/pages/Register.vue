<template>
  <div id="login" class="row">
    <div
      class="form-container login-form-container col absolute-center window-width q-pa-md q-mt-md-sm shadow-5"
    >
      <div
        class="form-box-id text-secondary text-bold text-center shadow-5 content-center items-center q-pa-sm-md"
      >
        <p>Client Register</p>
      </div>

      <div class="app-name">
        <h5 class="q-pa-sm-md logo-text text-bold text-italic text-center">
          {{ appName }}
        </h5>
      </div>

      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          clearable
          filled
          v-model.trim="userData.surname"
          label="Your surname *"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Field is required']"
        >
          <template v-slot:prepend>
            <q-icon
              name="person_pin
            "
            />
          </template>
        </q-input>
        <q-input
          clearable
          filled
          v-model.trim="userData.name"
          label="Other names *"
          hint="Your Firstname before other names"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Field is required']"
        >
          <template v-slot:prepend>
            <q-icon
              name="person_pin
            "
            />
          </template>
        </q-input>
        <q-input
          clearable
          filled
          type="email"
          v-model.trim="userData.email"
          label="Enter Email"
          lazy-rules
          :rules="[
            val => !!val || 'Email is required',
            val =>
              /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(val) ||
              'Please enter a valid email'
          ]"
        >
          <template v-slot:prepend>
            <q-icon
              name="mail
                      "
            />
          </template>
        </q-input>

        <q-input
          clearable
          filled
          type="tel"
          v-model.trim="userData.phone"
          label="Enter Phone Number"
          hint="Make sure this is your valid line"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Phone number is required',
            val => (val && val.length >= 11) || 'Are you sure your No. is correct'
          ]"
        >
          <template v-slot:prepend>
            <q-icon
              name="fas fa-phone
            "
            />
          </template>
        </q-input>


        <q-input
          clearable
          filled
          type="password"
          v-model.trim="userData.password"
          label="Enter Password"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Password is required',
          val => (val && val.length >= 8) || 'Password must be at least 8 Characters'

          ]"
        >
          <template v-slot:prepend>
            <q-icon
              name="vpn_key
            "
            />
          </template>
        </q-input>
        <q-input
          clearable
          filled
          type="password"
          v-model.trim="confirmPassword"
          label="Confirm Password"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Please confirm password',
            val => (val == userData.password) || 'Password must match',

          ]"
        >
          <template v-slot:prepend>
            <q-icon
              name="vpn_key
            "
            />
          </template>
        </q-input>

        <div class="q-gutter-sm content-center">
          <q-radio v-model="userData.gender" val="Male" label="Male" />
          <q-radio v-model="userData.gender" val="Female" label="Female" />
        </div>

        <div class="register-btn">
          <q-btn
            label="Sign-Up"
            type="submit"
            rounded
            class="q-px-xl q-py-xs"
            color="primary"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "login",
  data() {
    return {
      appName: "Officeworks",
      gender: "Female",
      confirmPassword: "",
      userData: {
        surname: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "Male"
      }
    };
  },

  methods: {
    onSubmit() {
      console.log(this.userData);
    }
  },
  mounted() {
    this.onSubmit();
  }
};
</script>

<style scoped>
.login-form-container {
  margin-top: 10em;
  max-width: 300px;
  border-radius: 10px;
  margin-bottom: 5em;
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
  margin: -2.5rem auto 1rem auto;
}
.register-btn {
  display: flex !important;
  justify-content: center !important;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
