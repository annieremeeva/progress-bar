const valueInput = document.querySelector('.value-input');

const progressCircle = document.querySelector('.progress');
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  progressCircle.style.strokeDashoffset = circumference - (circumference * percent / 100);
}

valueInput.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    setProgress(valueInput.value);
    valueInput.value='';
  }
})

const animateToggle = document.querySelector('.animate-toggle');

animateToggle.addEventListener('change', () => {
  progressCircle.classList.toggle('animated')
})

const hideToggle = document.querySelector('.hide-toggle');

hideToggle.addEventListener('change', () => {
  document.querySelector('.progress-wrapper').classList.toggle('hidden');
})
