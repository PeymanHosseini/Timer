class Timer {
  constructor(durationTime, startButton, pauseButton, callbacks) {
    this.durationTime = durationTime;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTik = callbacks.onTik;
      this.onCompelete = callbacks.onCompelete;
    }
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tik();
    this.interval = setInterval(this.tik, 20);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tik = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      this.onCompelete();
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      this.onTik(this.timeRemaining);
    }
  };
  get timeRemaining() {
    return parseFloat(this.durationTime.value);
  }
  set timeRemaining(time) {
    this.durationTime.value = time.toFixed(2);
  }
}
