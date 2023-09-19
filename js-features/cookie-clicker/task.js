const counterElement = document.getElementById('clicker__counter');
const speedElement = document.getElementById('clicker__speed');
const cookieElement = document.getElementById('cookie');
let counter = Number(counterElement.textContent);
let lastClick = new Date();

const clickCookie = function() {
  counter += 1;
  counterElement.textContent = counter;
  if (counter % 2 == 0) {
    cookieElement.width = 200;
  } else {
    cookieElement.width = 250;
  }  
  let currentClick = new Date();
  let differentMilliSeconds = currentClick - lastClick;
  if (differentMilliSeconds > 0) {
    speedElement.textContent = (1000 / differentMilliSeconds).toFixed(2);
  } else {
    speedElement.textContent = 0;
  }  
  lastClick = currentClick;
} 

cookieElement.onclick = clickCookie;