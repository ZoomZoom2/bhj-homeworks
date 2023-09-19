const deadElement = document.getElementById('dead');
const lostElement = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;

function getHoles(index) {
  return document.getElementById(`hole${index}`);
}

const clickBall = function() {
  if (this.classList.contains('hole_has-mole')) {
    counterDead += 1;
  } else {
    counterLost += 1;
  }
  deadElement.textContent = counterDead;
  lostElement.textContent = counterLost;
  if (counterDead == 10) {
    alert('Вы победили!');
    counterDead = 0;
    counterLost = 0;
    deadElement.textContent = counterDead;
    lostElement.textContent = counterLost;
  } else if (counterLost == 5) {
    alert('Вы проиграли!');
    counterDead = 0;
    counterLost = 0;
    deadElement.textContent = counterDead;
    lostElement.textContent = counterLost;
  }
}

for (let index = 1; index < 10; index++) {
  getHoles(index).onclick = clickBall;
}
