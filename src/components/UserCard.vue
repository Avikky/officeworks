<template>
  <q-card class="my-card user-details-card text-center">
    <q-card-section>
      <div class="avartar-image">
        <q-avatar
          class="q-mr-md-sm shadow-10"
          size="70px"
          font-size="25px"
          color="secondary"
          text-color="white"
          icon="fas fa-user"
          v-if="userDetails.image == null"
        />
        <q-avatar
          v-else
          class="shadow-10"
          size="100px"
          font-size="52px"
          color="primary"
          text-color="white"
        >
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </div>
      <p>
        <strong class>
          <q-chip class="glossy user-details" square icon="person_pin">Name:</q-chip>
        </strong>
        <q-chip class="glossy user-details-value" square icon="bookmark">Anih Victor Chinecherem</q-chip>
      </p>
      <p>
        <strong class>
          <q-chip class="glossy user-details" square icon="fas fa-id-badge">User ID:</q-chip>
        </strong>
        <q-chip class="glossy user-details-value" square icon="bookmark">A.victor/11345/2020</q-chip>
      </p>
      <p class="row">
        <strong class>
          <q-chip class="glossy dept user-details" square icon="fas fa-id-badge">Department:</q-chip>
        </strong>
        <q-chip class="glossy dept user-details-value" square icon="bookmark">Software</q-chip>
      </p>
      <p>
        <strong>
          <q-chip class="glossy user-details" square icon="fas fa-id-badge">Position:</q-chip>
        </strong>
        <q-chip class="glossy user-details-value" square icon="bookmark">Intern</q-chip>
      </p>
      <p>
        <q-btn color="red" rounded class="glossy" to="/profile">Please Complete your profile</q-btn>
      </p>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "user-card",
  data() {
    return {
      userDetails: {
        name: "",
        id: "",
        Department: "",
        Position: "",
        image: null
      }
    };
  }
};
</script>
<style scoped>
.avartar-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -65px;
  margin-bottom: 20px;
}
.user-details-card {
  margin-top: 55px;
}
.user-details {
  font-size: 12px !important;
}
@media only screen and (max-width: 330px) {
  .user-details-value {
    font-size: 10px !important;
  }
  .user-details {
    font-size: 10px !important;
  }
  .dept {
    /* margin-right: -5px; */
    font-size: 10px !important;
  }
}
@media only screen and (min-width: 360px) {
  .user-details-value {
    font-size: 10px !important;
  }
  .user-details {
    font-size: 10px !important;
  }
  .dept {
    font-size: 10px !important;
  }
  .dept-value {
    /* margin-right: -4rem !important; */
    font-size: 10px !important;
  }
}
</style>