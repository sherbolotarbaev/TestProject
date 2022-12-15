var h1 = document.getElementsByTagName("h1")[0];
var start = document.getElementById("strt");
var stop = document.getElementById("stp");
var reset = document.getElementById("rst");
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;

function tick() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
}
function add() {
  tick();
  h1.textContent =
    (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);
  timer();
}
function timer() {
  t = setTimeout(add, 1000);
}

timer();
start.onclick = timer;
stop.onclick = function () {
  clearTimeout(t);
};
reset.onclick = function () {
  h1.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
};

// colors
var colorBtns = document.getElementsByClassName("colorButton");
for (var btn of colorBtns) {
  btn.addEventListener("click", function (event) {
    console.log(event);
    var color = event.target.innerHTML;
    document.body.style.color = color;
  });
}
