class Timer {
  constructor(durationTime, startButton, pauseButton) {
    this.durationTime = durationTime;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    this.tik();
    this.interval = setInterval(this.tik, 1000);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tik = () => {
    const intervalTime = parseFloat(this.durationTime.value);
    if (intervalTime <= 0) {
      this.pause();
    } else {
      this.durationTime.value = intervalTime - 1;
    }
  };
}
const duration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer1 = new Timer(duration, startButton, pauseButton);
