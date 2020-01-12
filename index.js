class Timer {
  constructor(durationTime, startButton, pauseButton) {
    this.durationTime = durationTime;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
  }
  start = () => {
    console.log("hello world");
  };
}
const duration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer1 = new Timer(duration, startButton, pauseButton);
