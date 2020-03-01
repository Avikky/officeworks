<template>
  <div>
    <br />
    <br />
    <q-btn-dropdown
      class="q-ml-xl"
      glossy
      split
      color="primary"
      size="20px"
      rounded
      :label="label  + generalBal"
    >
      <q-list style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section>New tab</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>New incognito tab</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section>Recent tabs</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <br />
    <br />
    <q-list separator bordered class="rounded-borders q-ma-md">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        :label="costTitle + cost"
        caption="Remy"
      >
        <q-card>
          <q-card-section v-html="expenseDescription"></q-card-section>
          <br />
          <q-btn
            color="primary"
            to="/edit-expenses"
            rounded
            class="float-right q-ma-sm"
            glossy
            label="Edit"
          />
        </q-card>
      </q-expansion-item>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="dialog = true" />
    </q-page-sticky>
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
          <div class="text-h6">Record Expenses</div>
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
            <q-input
              filled
              dense
              type="number"
              v-model="amount"
              label="Total Amount"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please type something']"
            />
            <div>
              <p>Describe your Expenses in the box</p>
              <q-editor v-model="expenseDescription" min-height="7rem" />
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
      subject: "",
      amount: "",
      expenseDescription: "Hello world",
      maximizedToggle: true,
      description: "",
      generalBal: 5000,
      label: "General Bal: N ",
      costTitle: "Transport to College Road ",
      cost: "N " + 1500,
      dialog: false
    };
  }
};
</script>
<style scoped>
</style>
