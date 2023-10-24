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

// import data from './data.json' assert { type: 'json' };
// document.addEventListener('DOMContentLoaded', () => {
//   const filterBtns = document.querySelectorAll('button');
//   const cards = document.getElementsByClassName('card-container');
//   const cardContainer = document.querySelector('.card-container');
//   const h2 = document.getElementById('title');
//   filterBtns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       const target = e.target.value;
//       if (target === 'day') {
//         dayInfo();
//       } else if (target === 'week') {
//         weekInfo();
//       } else if (target === 'month') {
//         monthInfo();
//       }
//     });
//   });
//   function dayInfo() {
//     for (let i = 0; i < cards.length; i++) {
//       const h2 = document.createElement('h2');
//       h2.classList.add('amount');
//       cards[i].appendChild(h2);
//       h2.innerHTML = `${data[i].timeframes.daily.current} hrs`;
//       const p = document.createElement('p');
//       p.classList.add('data');
//       cards[i].appendChild(p);
//       p.innerHTML = `Last Week - ${data[i].timeframes.daily.previous} hrs`;
//     }
//   }
//   function weekInfo() {
//     for (let i = 0; i < cards.length; i++) {
//       console.log(data[i].timeframes.weekly.current);
//       h2[i].innerText = data[i].timeframes.daily.previous;
//     }
//   }
//   function monthInfo() {
//     console.log('yiiiissss');
//   }
// });
