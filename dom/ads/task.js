const rotator = document.querySelector('.rotator');
let activeRotatorCase = null;

setTimeout(function rotate() {
  if (activeRotatorCase != null) {
    activeRotatorCase.classList.remove('rotator__case_active');
    activeRotatorCase = activeRotatorCase.nextElementSibling;
  }
  if (activeRotatorCase === null) {
    activeRotatorCase = rotator.querySelector('.rotator__case');
  }  
  if (activeRotatorCase != null) {
    activeRotatorCase.style.color = activeRotatorCase.dataset.color;
    activeRotatorCase.classList.add('rotator__case_active');
  
    setTimeout(rotate, activeRotatorCase.dataset.speed);
  }  
}, 1000)

