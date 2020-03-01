<template>
  <div class="shadow-2">
    <q-bar dark class="bg-secondary text-white">
      <div class="col text-center text-weight-bold">{{title}}</div>
    </q-bar>
    <q-toolbar class="text-white q-pa-sm bg-secondary">
      <q-btn flat round dense icon="sort">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Order by date</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Order by time</q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-menu>
      </q-btn>
      <q-input
        dense
        rounded
        input-class="text-white"
        standout="bg-grey-4 text-primary"
        outlined
        placeholder="Search"
        v-model="search"
        class="q-ml-md text-white"
      >
        <template v-slot:append class="text-white">
          <q-icon v-if="search === ''" name="search" />
          <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
        </template>
      </q-input>
      <q-btn flat round dense icon="more_vert">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Mark all as read</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section class="text-center">Delete all</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      search: "",
      deleteMessageDailog: false
    };
  }
};
</script>
