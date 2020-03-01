<template>
  <div>
    <br />
    <q-form @submit.prevent="onSubmit" class="q-pa-md">
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

      <div class="float-right q-ma-md">
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subject: "",
      amount: "",
      expenseDescription: ""
    };
  }
};
</script>
<style scoped>
</style>