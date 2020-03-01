<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-secondary">
      <q-toolbar v-if="!isSearch">
        <q-btn flat dense color="white" @click="drawer = !drawer" round icon="menu"></q-btn>
        <q-space></q-space>
        <div>Projects</div>
        <q-space></q-space>
        <q-btn flat @click="isSearch" dense icon="search" />
      </q-toolbar>
      <q-toolbar v-else>
        <q-btn flat dense color="white" @click="!isSearch" icon="fas fa-times" />
        <q-space></q-space>
        <div>
          <q-input
            dense
            rounded
            type="search"
            input-class="text-white"
            standout="bg-transparent text-primary"
            placeholder="Search"
            v-model="searchText"
            class="q-ml-md text-white"
          >
            <template v-slot:append class="text-white">
              <q-icon v-if="searchText === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="searchText = ''" />
            </template>
          </q-input>
        </div>
        <q-space></q-space>
        <q-btn flat dense icon="search" @click="isSearch = true" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="270"
      :breakpoint="500"
      overlay
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
  {
    icon: "fas fa-money-check-alt",
    label: "Payments",
    separator: true
  },
  { icon: "send", label: "Requests", separator: true },
  { icon: "fas fa-project-diagram", label: "Projects", separator: true },
  { icon: "fas fa-chart-line", label: "Expenditures", separator: true },
  { icon: "fas fa-comment-dots", label: "Surgestions", separator: true },
  { icon: "fas fa-balance-scale", label: "Code of Conducts", separator: true }
];
export default {
  name: "ProjectLayout",
  data() {
    return {
      tab: "",
      drawer: false,
      menuList,
      isSearch: false,
      searchText: "",
      hide: ""
    };
  },
  methods: {
    isSearch(hideklas) {
      if (this.isSearch) {
        this.hide = "hidden";
      } else {
        this.hide = "";
      }
    }
  }
};
</script>
