import data from './data.json' assert { type: 'json' };
const nums = document.querySelectorAll('h2');
const p = document.querySelectorAll(' .data ');
const filterBtns = document.querySelectorAll('button');

let target = '';
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    target = e.target.value;

    if (target == 'day') {
      dayInfo();
    } else if (target == 'week') {
      weekInfo();
    } else {
      monthInfo();
    }
  });
});

function dayInfo() {
  for (let i = 0; i < data.length; i++) {
    nums[i].innerText = `${data[i].timeframes.daily.current}hrs`;
    p[i].innerText = `Last Week - ${data[i].timeframes.daily.previous}hrs`;
  }
}

function weekInfo() {
  for (let i = 0; i < data.length; i++) {
    nums[i].innerText = `${data[i].timeframes.weekly.current}hrs`;
    p[i].innerText = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
  }
}

function monthInfo() {
  for (let i = 0; i < data.length; i++) {
    nums[i].innerText = `${data[i].timeframes.monthly.current}hrs`;
    p[i].innerText = `Last Week - ${data[i].timeframes.monthly.previous}hrs`;
  }
}
