var dom = 0;
var fan = 0;
function myFunction() {
  var sliderValue1 = document.getElementById("1").value;
  var sliderValue2 = document.getElementById("2").value;
  if (sliderValue1 >= 0 && sliderValue1 <= 25) {
    dom = 0;
    fan = 0;
  } else if (sliderValue1 > 25 && sliderValue1 <= 50) {
    dom = 1;
    fan = 1;
  } else if (sliderValue1 > 50 && sliderValue1 <= 75) {
    dom = 2;
    fan = 2;
  } else if (sliderValue1 > 75 && sliderValue1 <= 100) {
    dom = 3;
    fan = 3;
  }
  if (sliderValue2 >= 0 && sliderValue2 <= 25) {
    dom += 0;
    fan += 0;
  } else if (sliderValue2 > 25 && sliderValue2 <= 50) {
    dom += 1;
    fan += 1;
  } else if (sliderValue2 > 50 && sliderValue2 <= 75) {
    dom += 2;
    fan += 2;
  } else if (sliderValue2 > 75 && sliderValue2 <= 100) {
    dom += 3;
    fan += 3;
  }
  document.getElementById("dom").innerHTML = "Sum: " + dom;
  document.getElementById("fan").innerHTML = "Sum: " + fan;
}

const sliderContainers = document.querySelectorAll('.slider-container');
const nextBtn = document.getElementById('next-btn');

let currentContainer = 0;

const perSpan = document.getElementById('per');
let percentage = 0;

// Show the current container and hide the others
function showCurrentContainer() {
  for (let i = 0; i < sliderContainers.length; i++) {
    sliderContainers[i].classList.remove('visible');
  }
  sliderContainers[currentContainer].classList.add('visible');
}

// Set up event listener for the next button
nextBtn.addEventListener('click', function() {
  currentContainer++;
  window.scrollTo(0, 0);
  percentage+=10;
  perSpan.innerHTML = percentage;
  if (currentContainer >= sliderContainers.length) {
    // If there are no more containers, next button becoms results
    nextBtn.textContent = 'Results';
	myFunction();
	
  } else {
    // Otherwise, show the next container and hide the previous one
    showCurrentContainer();
  }

});
