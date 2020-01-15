const duration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let durationTime;

const timer1 = new Timer(duration, startButton, pauseButton, {
  onStart(totalDuration) {
    durationTime = totalDuration;
  },
  onTik(timeRemaining) {
    // calculating DashOffset
    //  ( perimeter*timeRemaining ) / totalDuration - perimeter
    // for example offset at start will be p*30 / 30-p

    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / durationTime - perimeter
    );
  },
  onCompelete() {
    console.log("timer is done");
  }
});
