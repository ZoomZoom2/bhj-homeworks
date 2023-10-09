const dropdown = document.querySelector('.dropdown');

function onClickList() {
  const dropdownList = this.querySelector('ul');
  if (dropdownList.classList.contains('dropdown__list_active')) {
    dropdownList.classList.remove('dropdown__list_active')
  } else {
    dropdownList.classList.add('dropdown__list_active')
  }  
}

function onClickItem(event) {
  const value = this.closest('.dropdown').querySelector('.dropdown__value');
  value.textContent = this.querySelector('.dropdown__link').textContent;
  event.preventDefault();
}

dropdown.addEventListener('click', onClickList);
dropdown.querySelectorAll('.dropdown__item').forEach((button) => {button.addEventListener('click', onClickItem)});