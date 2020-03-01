<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-secondary">
      <q-toolbar>
        <q-btn dense class="text-white q-pa-xs" @click="$router.back()" icon="chevron_left">Back</q-btn>
        <q-space></q-space>
        <q-space></q-space>

        <q-space></q-space>
      </q-toolbar>
    </q-header>

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
export default {
  name: "ExpensesLayout",
  data() {
    return {
      tab: ""
    };
  }
};
</script>
