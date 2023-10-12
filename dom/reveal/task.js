const adBlocks = document.querySelectorAll('.reveal');

function isElVisible (el) {
  const {top, bottom} = el.getBoundingClientRect();
  
  if (bottom < 0) {
    return false;
  }

  if (top > window.innerHeight) {
    return false;
  }
  return true;
}

window.addEventListener('scroll', () => {
  for (el of adBlocks) {
    if (isElVisible(el)) {
      el.classList.add('reveal_active');
    }
  }
})