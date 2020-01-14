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
      this.onStart();
    }
    this.tik();
    this.interval = setInterval(this.tik, 1000);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tik = () => {
    const intervalTime = this.durationValue;
    if (intervalTime <= 0) {
      this.pause();
      this.onCompelete();
    } else {
      this.durationValue = this.durationValue - 1;
      this.onTik();
    }
  };
  get durationValue() {
    return parseFloat(this.durationTime.value);
  }
  set durationValue(time) {
    this.durationTime.value = time;
  }
}
