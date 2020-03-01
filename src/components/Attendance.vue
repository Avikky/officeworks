<template>
  <div>
    <!-- <p class="attendance" v-if="!attendanceSignIn"> -->
    <q-toggle
      v-model="attendanceSignIn"
      :checked-icon="checkAttendance"
      @input="showDialog"
      color="red"
      label="Sign-In Attendance"
      unchecked-icon="clear"
      :disable="attendanceIsDisabled"
    />
    <!-- </p> -->
    <!-- <p class="attendance" v-else>
      Sign-Out Attendance
      <q-checkbox
        keep-color
        v-model="attendanceSignIn"
        @click="attendanceSignIn = true"
        color="red"
      />
    </p>-->

    <q-dialog
      v-model="attendanceSignInDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-primary text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6 q-mb-md">
            <q-icon name="fas fa-check-square" class="text-white q-pa-lg" />
            <span>Recorded Taken</span>
          </div>
          <div class="text-center">
            <p>
              Please remember to Sign Out by
              <q-chip color="orange lighten-5">5:00 PM</q-chip>
            </p>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  name: "attendance",
  data() {
    return {
      checkAttendance: "check",
      attendanceSignIn: false,
      attendanceSignOut: false,
      persistent: false,
      attendanceSignInDialog: false,
      attendanceIsDisabled: false
    };
  },
  methods: {
    showDialog() {
      this.attendanceSignInDialog = true;
      this.attendanceIsDisabled = true;
    }
  }
};
</script>
<style scoped>
</style>