<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="q-mx-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6666ff"
          fill-opacity="1"
          d="M0,192L40,192C80,192,160,192,240,160C320,128,400,64,480,69.3C560,75,640,149,720,197.3C800,245,880,267,960,261.3C1040,256,1120,224,1200,202.7C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
      </svg>

      <q-page-sticky position="top-left" :offset="[18, 18]" v-if="!isLogin">
        <q-btn fab label="Back" color="primary" @click="goback()" />
      </q-page-sticky>

      <router-view />
    </q-page-container>
    <q-footer id="initial-footer" reveal class="bg-transparent text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6666ff"
          fill-opacity="1"
          d="M0,256L48,256C96,256,192,256,288,250.7C384,245,480,235,576,229.3C672,224,768,224,864,234.7C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    goback() {
      return this.$router.back();
    },
    checkRoute() {
      if (this.$route.path == "/login") {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    }
  },
  watch: {
    $route() {
      this.checkRoute();
    }
  },
  mounted() {
    this.checkRoute();
  }
};
</script>
<style>
#initial-footer {
  margin-bottom: -7px !important;
}
.back-btn {
  margin: -6rem auto 4rem auto !important;
}
</style>