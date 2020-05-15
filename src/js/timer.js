'use strict';

const refs = {
  day: document.querySelector('span[data-value="days"]'),
  hour: document.querySelector('span[data-value="hours"]'),
  min: document.querySelector('span[data-value="mins"]'),
  sec: document.querySelector('span[data-value="secs"]'),
  timer: document.querySelector('#timer-1'),
};

const targetDate = new Date('June 01, 2021').getTime();

const intervalId = setInterval(function () {
  const realDate = Date.now();

  const time = targetDate - realDate;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));


  refs.day.textContent = `${days}`;
  refs.hour.textContent = `${hours}`;
  refs.min.textContent = `${mins}`;
  refs.sec.textContent = `${secs}`;

  if (time < 0) {
    clearInterval(intervalId);
    refs.timer.innerHTML = '<p class="deadline-message">Time is up!</p>';
  }
}, 1000);

function pad(value) {
  return String(value).padStart(2, '0');
}
