const valueInput = document.querySelector('.value-input');
const progressCircle = document.querySelector('.progress');
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray= circumference;
function setProgress(percent) {
  progressCircle.style.strokeDashoffset = circumference - (circumference * percent / 100)
}

valueInput.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    setProgress(valueInput.value);
  }
})
