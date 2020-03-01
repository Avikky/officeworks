<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar v-if="!isMessages">
        <q-btn flat color="primary" @click="drawer = !drawer" class="shadow-10" round icon="menu"></q-btn>
        <q-space></q-space>
        <div class="q-pa-md float-right">
          <q-btn round color="secondary">
            <q-avatar
              class="q-mr-md-sm shadow-10"
              size="55px"
              font-size="15px"
              color="primary"
              text-color="white"
              icon="fas fa-user"
              v-if="userDetails.image == null"
            >
              <q-badge color="red" floating>1</q-badge>
            </q-avatar>

            <q-avatar size="55px" v-else>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              <q-badge color="red" floating>1</q-badge>
            </q-avatar>
            <q-menu fit anchor="bottom middle" self="top middle">
              <user-card />
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      :width="250"
      :breakpoint="500"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" color="primary" />
            </q-item-section>
            <q-item-section>{{ menuItem.label }}</q-item-section>
          </q-item>

          <q-separator v-if="menuItem.separator" />
        </q-list>
        <div class="q-pa-lg">
          <q-btn color="deep-orange" icon="fas fa-power-off" label="Logout" />
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated>
      <q-tabs v-model="tab" class="bg-grey-3 text-primary shadow-2">
        <q-route-tab name="home" icon="home" to="/dashboard"></q-route-tab>
        <q-route-tab name="mails" icon="mail" to="/messages">
          <q-badge color="red" floating>1</q-badge>
        </q-route-tab>
        <q-route-tab name="search" icon="search" to="/search-user" />
        <q-route-tab alert="red" name="notification" icon="fas fa-bell" to="/notification" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
const menuList = [
  { icon: "fas fa-money-check-alt", label: "Payments", separator: true },
  { icon: "send", label: "Requests", separator: true },
  { icon: "fas fa-project-diagram", label: "Projects", separator: true },
  { icon: "fas fa-chart-line", label: "Expenditures", separator: true },
  {
    icon: "fas fa-comment-dots",
    label: "Surgestions",
    separator: true
  },
  { icon: "fas fa-balance-scale", label: "Code of Conducts", separator: true }
];
export default {
  name: "MainLayout",
  components: {
    UserCard: () => import("components/UserCard")
  },
  data() {
    return {
      tab: "home",
      userDetails: {
        image: null
      },
      drawer: false,
      isMessages: false,
      menuList
    };
  },

  methods: {
    checkRoute() {
      if (this.$route.path == "/messages") {
        this.isMessages = true;
      } else {
        this.isMessages = false;
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
<style  scoped>
</style>