import data from './data.json' assert {type: 'json'};

const dailyBtn = document.querySelector('#daily-frequency');
const weeklyBtn = document.querySelector('#weekly-frequency');
const monthlyBtn = document.querySelector('#monthly-frequency');

let activitiesSection = document.querySelector('#activities-section');

const bgColors = {
  Work : 'hsl(15, 100%, 70%)',
  Entertainment : 'hsl(195, 74%, 62%)',
  Study: 'hsl(348, 100%, 68%)',
  Exercise : 'hsl(145, 58%, 55%)',
  Social : 'hsl(264, 64%, 52%)',
  'Self Care' : 'hsl(43, 84%, 65%)'
};

function renderCards (freq = 'daily') {
  activitiesSection.innerHTML = '';
  data.forEach( activity => {
    activitiesSection.innerHTML += `
    <div class="activity-card">
      <div class="card-bg" style="background-color: ${bgColors[activity.title]}">
        <img src="./images/icon-${activity.title === 'Self Care' ? 'self-care' : activity.title.toLowerCase()}.svg" alt="${activity.title}-icon">
      </div>

      <div class="card-data">
        <div class="card-data-activity">
          <h3>${activity.title}</h3>
          <img src="./images/icon-ellipsis.svg" alt="options-img">
        </div>
        <div class="card-data-hours">
          <h2>${activity.timeframes[freq].current}hrs</h2>
          <p>Previous - ${activity.timeframes[freq].previous}hrs</p>
        </div>
      </div>
    </div>
    `
  });
};

//Add and remove [active] class
function updateClass (freq) {
  let currentFreq = document.querySelector('#'+freq+'-frequency');
  let allFreqs = document.querySelectorAll('.frequencies');
  allFreqs.forEach(freq => {
    if (freq == currentFreq && !currentFreq.classList.contains('active')) {
      currentFreq.classList.add('active');
    } else {
      freq.classList.remove('active');
    }
  });
};

renderCards();

// Adding Functionality to the Frequency Buttons
dailyBtn.addEventListener('click',() => {
  renderCards('daily');
  updateClass('daily');
});
weeklyBtn.addEventListener('click',() => {
  renderCards('weekly');
  updateClass('weekly');
});
monthlyBtn.addEventListener('click',() => {
  renderCards('monthly');
  updateClass('monthly');
});

