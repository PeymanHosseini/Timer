const duration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer1 = new Timer(duration, startButton, pauseButton, {
  onStart() {
    console.log("timer is started");
  },
  onTik() {
    console.log("timer is running");
  },
  onCompelete() {
    console.log("timer is done");
  }
});
