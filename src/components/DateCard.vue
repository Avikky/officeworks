<template>
  <div id="dateCard">
    <q-card class="my-card cardate">
      <q-card-section>
        <div class="date-card">
          <h6 class="week">
            <q-btn class="glossy shadow-10" rounded color="deep-orange" :label="dateAndTime.week" />
          </h6>
          <div class="date-wrapper q-gutter-md row items-baseline">
            <h3 class="month text-bold text-white col-sm-8">{{ dateAndTime.month}}</h3>
            <h5 class="day col-sm-4">
              <q-btn round color="primary" :label="dateAndTime.day" />
            </h5>
          </div>
        </div>
        <hr />
        <div class="time-card q-gutter-md row items-baseline">
          <q-btn size="30px" class="col-sm-4 hour text-white glossy bg-deep-orange">
            <span>{{dateAndTime.timeHour}}</span>
          </q-btn>
          <span class="time-colon">:</span>
          <q-btn size="30px" class="col-sm-4 minuites text-white glossy bg-deep-orange">
            <span>{{dateAndTime.timeMin}}</span>
          </q-btn>
          <span class="time-colon">:</span>
          <q-btn size="30px" class="col-sm-4 seconds text-white glossy bg-deep-orange">
            <span>{{dateAndTime.timeSec}}</span>
          </q-btn>
          <q-chip size="19px" class="text-white glossy bg-primary">{{dateAndTime.dayType}}</q-chip>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { date } from "quasar";

export default {
  name: "date-card",
  data() {
    return {
      dateAndTime: {
        week: "",
        month: "",
        day: "",
        timeHour: "",
        timeMin: "",
        timeSec: "",
        dayType: ""
      }
    };
  },
  methods: {
    showTime() {
      var date = new Date();
      var h = date.getHours(); // 0 - 23
      var m = date.getMinutes(); // 0 - 59
      var s = date.getSeconds(); // 0 - 59
      var session = "AM";

      if (h == 0) {
        h = 12;
      }
      if (h > 12) {
        h = h - 12;
        session = "PM";
      }
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      this.dateAndTime.timeHour = h;
      this.dateAndTime.timeMin = m;
      this.dateAndTime.timeSec = s;
      this.dateAndTime.dayType = session;
    },
    showDate() {
      let timeStamp = Date.now();
      this.dateAndTime.week = date.formatDate(timeStamp, "dddd");
      this.dateAndTime.month = date.formatDate(timeStamp, "MMM");
      this.dateAndTime.day = date.formatDate(timeStamp, "Do");
    }
  },
  mounted() {
    setInterval(this.showTime, 1000);
    this.showDate();
  }
};
</script>
<style scoped>
.cardate {
  background-image: radial-gradient(
    circle 248px at center,
    #16d9e3 0%,
    #30c7ec 47%,
    #6666ff 100%
  );
}
.date-card {
  margin-top: 1rem !important;
  margin-bottom: -1.5rem;
}
.week {
  margin-bottom: -1rem;
  margin-top: -2.6rem;
  text-shadow: 2px 2px 4px #000;
}
.month {
  filter: drop-shadow(0 0 0.75rem grey);
  text-shadow: 2px 2px 4px rgb(44, 43, 43);
}
.day {
  filter: drop-shadow(0 0 0.75rem grey);
  text-shadow: 2px 2px 4px #000; /* text-shadow: 1px 1px 0 black, 2px 2px 0 black; */
}

.time-card {
  font-size: 33px;
  font-family: Orbitron;
  letter-spacing: 3px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.time-colon {
  font-size: 60px;
  font-family: Orbitron;
  color: #fff;
}

@media only screen and (max-width: 480px) {
  .time-colon {
    font-size: 30px;
    font-family: Orbitron;
    color: #fff;
  }
  .time-card {
    font-size: 26px;
    font-family: Orbitron;
    letter-spacing: 2px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .hour,
  .minuites,
  .seconds {
    margin-left: -2px;
    margin-right: -2px;
  }
}
</style>