<template>
  <div>
    <q-pull-to-refresh @refresh="refresh" color="primary" icon="fas fa-envelope-open">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="leave" label="Leave Requests" />
        <q-tab name="others" label="Other Requests" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="leave">
          <q-list separator>
            <!-- <q-item-label header>New Notification</q-item-label> -->
            <q-item clickable v-ripple class="shadow-1">
              <q-item-section>
                <q-item-label class="text-bold">Leave Request</q-item-label>
                <q-item-label caption lines="1">
                  I'll be in your neighborhood doing errands this
                  weekend. Do you want to grab brunch?
                </q-item-label>
              </q-item-section>
              <!-- <q-item-section side top class="text-bold">01 feb 2020</q-item-section> -->
              <q-item-section side middle>
                <q-badge class="bg-orange">Pending</q-badge>
              </q-item-section>
            </q-item>
          </q-list>

          <!-- <div>
            <p class="q-mt-xl text-center">You have No leave request, pull to refresh</p>
            <div class="fixed-center">
            <q-avatar
                size="100px"
                font-size="52px"
                color="secondary"
                text-color="white"
                icon="fas fa-envelope-open"
            />
            <br />
            <br />
            <q-btn color="primary" @click="$router.back()" label="Go back" />
            </div>
          </div>-->
        </q-tab-panel>

        <q-tab-panel name="others">
          <q-list separator>
            <!-- <q-item-label header>New Notification</q-item-label> -->
            <q-item clickable v-ripple class="shadow-1">
              <q-item-section>
                <q-item-label class="text-bold">Permittion request</q-item-label>
                <q-item-label caption lines="1">
                  I'll be in your neighborhood doing errands this
                  weekend. Do you want to grab brunch?
                </q-item-label>
              </q-item-section>
              <!-- <q-item-section side top class="text-bold">01 feb 2020</q-item-section> -->
              <q-item-section side middle>
                <q-badge class="bg-orange">Pending</q-badge>
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
      </q-tab-panels>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="add" @click="dialog = true" color="primary" />
      </q-page-sticky>
    </q-pull-to-refresh>
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white text-black">
        <q-bar class="bg-secondary text-white">
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-black">Minimize</q-tooltip>
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Apply for Leave</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit.prevent="onSubmit" class="q-gutter-md">
            <q-input
              filled
              dense
              v-model="subject"
              label="Subject"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-select
              dense
              filled
              v-model="request"
              :options="requestType"
              label="Type of request"
            />
            <q-input
              v-if="request == 'Other kind of request'"
              filled
              dense
              v-model="specificRequest"
              label="Please Specify Request"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please type something']"
            />
            <div>
              <q-editor v-model="editor" min-height="7rem" />
            </div>

            <div>
              <q-btn label="Submit" type="submit" color="primary" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      tab: "leave",
      dialog: false,
      maximizedToggle: true,
      requestType: ["Leave request", "Other kind of request"],
      request: "",
      specificRequest: "",
      subject: "",
      editor: ""
    };
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        this.items.push({}, {}, {}, {}, {}, {}, {});
        done();
      }, 1000);
    },
    onSubmit() {
      console.log("submit from request");
    }
  },
  mounted() {
    this.refresh();
    this.onSubmit();
  }
};
</script>
<style scoped>
</style>