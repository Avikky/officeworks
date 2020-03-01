<template>
  <div id="dashboard" class="q-pa-md">
    <br />
    <br />
    <br />
    <div>
      <date-card />
      <attendance />
    </div>

    <br />
  </div>
</template>

<script>
export default {
  name: "dashboard",
  components: {
    DateCard: () => import("components/DateCard"),
    Attendance: () => import("components/Attendance")
  },
  data() {
    return {
      attendanceSignIn: false,
      attendanceSignOut: "",
      userDetails: {
        name: "",
        id: "",
        Department: "",
        Position: "",
        image: null
      }
    };
  },
  methods: {
    isMobile() {
      console.log("mobile");
    },
    onMainClick() {
      console.log("Clicked on main button");
    },
    onItemClick() {
      console.log("Clicked on an Item");
    }
  },
  mounted() {
    if (this.$q.screen.lt.md) {
      this.isMobile();
    }
  }
};
</script>

<style scoped>
p.attendance {
  padding: 1rem;
  font-size: 19px;
}
</style>
