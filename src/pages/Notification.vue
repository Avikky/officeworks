<template>
  <div>
    <br />
    <q-pull-to-refresh @refresh="refresh" color="primary" icon="fas fa-bell">
      <q-list bordered class="rounded-borders q-ma-lg">
        <q-item-label header>New Notification</q-item-label>
        <q-item clickable v-ripple class="shadow-1">
          <q-item-section avatar>
            <q-avatar v-if="notifications.announcement.isAnnoucement">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
            <q-avatar v-else color="red" text-color="white" icon="fas fa-bell" />
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">Brunch this weekend?</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Janet</span>
              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?
            </q-item-label>
          </q-item-section>
          <q-item-section side top class="text-bold">01 feb 2020</q-item-section>
          <q-item-section side top>
            <q-badge class="bg-orange">new</q-badge>
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator />
      <q-list bordered class="rounded-borders q-ma-md">
        <q-item-label header>Older Notification</q-item-label>
        <q-item clickable v-ripple class="shadow-1">
          <q-item-section avatar>
            <q-avatar v-if="notifications.announcement.isAnnoucement">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
            <q-avatar v-else color="red" text-color="white" icon="fas fa-bell" />
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">Brunch this weekend?</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Janet</span>
              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?
            </q-item-label>
          </q-item-section>
          <q-item-section side top>01 feb 2020</q-item-section>
        </q-item>
      </q-list>
      <!-- <div>
        <p class="q-mt-xl text-center">You have Zero notification, pull to refresh</p>
        <div class="fixed-center">
          <q-avatar
            size="100px"
            font-size="52px"
            color="secondary"
            text-color="white"
            icon="fas fa-bell"
          />
          <br />
          <br />
          <q-btn color="primary" @click="$router.back()"
 label="Go back" />
        </div>
      </div>-->
    </q-pull-to-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      notifications: {
        messages: {
          isMessages: false,
          from: "",
          time: "",
          date: ""
        },
        announcement: {
          isAnnouncement: false,
          type: "",
          message: "",
          time: "",
          date: ""
        },
        projectStatus: {
          isProjectStatus: false,
          from: "",
          projectName: "",
          status: "",
          time: "",
          date: ""
        }
      }
    };
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        this.items.push({}, {}, {}, {}, {}, {}, {});
        done();
      }, 1000);
    }
  },

  created() {
    this.$q.addressbarColor.set("#6666ff");
  }
};
</script>
<style scoped>
</style>