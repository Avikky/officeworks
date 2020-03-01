<template>
  <div>
    <br />
    <!-- <q-list separator>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Image rounded avatar</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Image rounded avatar</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Image rounded avatar</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Image rounded avatar</q-item-section>
      </q-item>
    </q-list>-->
    <q-list separator>
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="person_pin" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>CEO</q-item-section>

          <q-item-section side>
            <div class="row items-center">
              <q-icon name="star" color="red" size="24px" />
              <q-icon name="star" color="red" size="24px" />
              <q-icon name="star" color="red" size="24px" />
            </div>
          </q-item-section>
        </template>

        <q-card>
          <q-card-section>
            <p>
              <strong>Name:</strong> Anih victor C.
            </p>
            <p>
              <strong>Proffesion:</strong> Software Engineer
            </p>
            <p>
              <strong>Nationality:</strong> Nigeria
            </p>
            <p>
              <strong>BirthDay:</strong> 16-December
            </p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="fas fa-cog" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>Recent Projects</q-item-section>
        </template>

        <q-card>
          <q-card-section>
            <q-list separator>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar rounded>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>Project One</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar rounded>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>Project Two</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="fas fa-users" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>Managers</q-item-section>
        </template>

        <q-card>
          <q-card-section>
            <q-list separator>
              <q-expansion-item>
                <template v-slot:header>
                  <q-item-section avatar>
                    <q-avatar icon="person_pin" color="primary" text-color="white" />
                  </q-item-section>

                  <q-item-section>Engineer Remy</q-item-section>

                  <q-item-section side>
                    <div class="row items-center">
                      <q-badge color="orange">Lead</q-badge>
                    </div>
                  </q-item-section>
                </template>

                <q-card>
                  <q-card-section>
                    <p>
                      <strong>Name:</strong> Anih victor C.
                    </p>
                    <p>
                      <strong>Proffesion:</strong> Software Engineer
                    </p>
                    <p>
                      <strong>Nationality:</strong> Nigeria
                    </p>
                    <p>
                      <strong>BirthDay:</strong> 16-December
                    </p>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>