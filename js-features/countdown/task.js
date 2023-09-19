const timerElement = document.getElementById('timer');
let seconds = timerElement.textContent;
let hours = 0;
let minutes = 0;

function formatDateStr(hours, minutes, seconds) {
  let hoursStr = hours;
  let minutesStr = minutes;
  let secondStr = seconds;
  if (hours < 10) {
    hoursStr = '0' + hours;
  }
  if (minutes < 10) {
    minutesStr = '0' + minutes;
  }
  if (seconds < 10) {
    secondStr = '0' + seconds;
  }
  return `${hoursStr}:${minutesStr}:${secondStr}`;
}

timerElement.textContent = formatDateStr(hours, minutes, seconds);

const timerInc = function() {
  if (seconds > 0) {
    seconds -= 1;
    timerElement.textContent = formatDateStr(hours, minutes, seconds);
  } else {
    if (minutes > 0) {
      minutes -= 1;
      seconds = 59;
      timerElement.textContent = formatDateStr(hours, minutes, seconds);
    } else {
      if (hours > 0) {
        hours -= 1;
        minutes = 59
        seconds = 59;
        timerElement.textContent = formatDateStr(hours, minutes, seconds);
      } else {
        clearInterval(intervalID);
        alert('Вы победили в конкурсе!');
        let link = document.createElement('a');
	      link.setAttribute('href', '/README.md');
	      link.setAttribute('download', 'README.md');
        link.setAttribute('target', "_blank");
	      link.click();
      }  
    }  
  }
}

const intervalID = setInterval(timerInc, 1000);