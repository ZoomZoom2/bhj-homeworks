const tabs1 = document.getElementById('tabs1');
const tab = tabs1.querySelectorAll('.tab');

function onClickTab() {
  tabs1.querySelector('.tab_active').classList.remove('tab_active');
  tabs1.querySelector('.tab__content_active').classList.remove('tab__content_active');
  this.classList.add('tab_active');
  [...tabs1.querySelectorAll('.tab__content')][[...tab].indexOf(this)].classList.add('tab__content_active');
}

tab.forEach((tabItem) => {tabItem.addEventListener('click', onClickTab)});