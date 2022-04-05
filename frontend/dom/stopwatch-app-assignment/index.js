/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let stopwatch = document.getElementById('stopwatch');
let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');

// TODO: answer here
startbtn.addEventListener('click', start);
stopbtn.addEventListener('click', stop);
resetbtn.addEventListener('click', reset);

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

function start() {
  // TODO: answer here
  interval = setInterval(runTime,1000)
}

function stop() {
  // TODO: answer here
  clearInterval(interval);
  interval = null;
}

function reset() {
  // TODO: answer here
  stop();
  stopwatch.innerHTML = '00:00:00';
  seconds = 0;
  minutes = 0;
  hours = 0;
}

function runTime() {
  // TODO: answer here
  seconds++;

  let second = seconds % 60;
  let minute = Math.floor(seconds / 60);
  let hour = Math.floor(minute / 60);

  if (second == 60) {
    minute++
    second = 0;
  }
  if (minute == 60) {
    hour++
    minute = 0;
    second = 0;
  }

  if (second < 10 || second == 0) {
    second = '0' + second;
  }
  if (minute < 10 || minute == 0) {
    minute = '0' + minute;
  }
  if (hour < 10 || hour == 0) {
    hour = '0' + hour;
  }
  stopwatch.innerHTML = `${hour}:${minute}:${second}`;
}