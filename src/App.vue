<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    this.$q.addressbarColor.set();
  }
};
</script>

<style>
body {
  background: #f4f4f4;
}
@media only screen and (min-width: 300px) {
  div.form-container {
    max-width: 45% !important;
  }

  @media only screen and (max-width: 500px) {
    div.form-container {
      max-width: 300px !important;
    }
  }
}
</style>