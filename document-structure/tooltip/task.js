function showTip(event) {
  if (Array.from(event.target.classList).includes('has-tooltip')) {
    const tarRect = event.target.getBoundingClientRect(); 

    for (let tip of document.querySelectorAll('.tooltip_active')) {
      tip.remove();
    }  
    
    tip = document.createElement('div');
    tip.className = 'tooltip';
    tip.classList.add('tooltip_active');
    tip.textContent = event.target.title;
    tip.style.left = tarRect.left + tip.offsetLeft + 'px';                  
    tip.style.top = tarRect.bottom + tip.offsetTop + 'px';

    document.body.append(tip);             
  }
  event.preventDefault();
}

function hideTip() {
  for (let tip of document.querySelectorAll('.tooltip_active')) {
    tip.remove();
  }  
}

document.addEventListener('click', showTip);
document.addEventListener('mouseout', hideTip);