const book = document.getElementById('book');
const fontSizeControl = book.querySelector('.book__control_font-size');
const textColorControl = book.querySelector('.book__control_color');
const backgroundColorControl = book.querySelector('.book__control_background');

function changeFont(e) {
  if (!this.classList.contains('font-size_active')) {
    fontSizeControl.querySelector('.font-size_active').classList.remove('font-size_active');
    this.classList.add('font-size_active');

    if (this.dataset.size === 'small') {
      book.classList.remove('book_fs-big');
      book.classList.add('book_fs-small');
    } else if (this.dataset.size === 'big') {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-small');
      book.classList.remove('book_fs-big');
    }  
  }
  e.preventDefault();
}

function changeTextColor(e) {
  if (!this.classList.contains('color_active')) {
    textColorControl.querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active');

    if (this.dataset.textColor === 'black') {
      book.classList.remove('book_color-gray');
      book.classList.remove('book_color-whitesmoke');
      book.classList.add('book_color-black');
    } else if (this.dataset.textColor === 'gray') {
      book.classList.remove('book_color-black');
      book.classList.remove('book_color-whitesmoke');
      book.classList.add('book_color-gray');
    } else {
      book.classList.remove('book_color-black');
      book.classList.remove('book_color-gray');
      book.classList.add('book_color-whitesmoke');
    }  
  }
  e.preventDefault();
}

function changeTextBackground(e) {
  if (!this.classList.contains('color_active')) {
    backgroundColorControl.querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active');

    if (this.dataset.bgColor === 'black') {
      book.classList.remove('book_bg-gray');
      book.classList.remove('book_bg-white');
      book.classList.add('book_bg-black');
    } else if (this.dataset.bgColor === 'gray') {
      book.classList.remove('book_bg-black');
      book.classList.remove('book_bg-white');
      book.classList.add('book_bg-gray');
    } else {
      book.classList.remove('book_bg-black');
      book.classList.remove('book_bg-gray');
      book.classList.add('book_bg-white');
    }  
  }
  e.preventDefault();
}

for (let el of fontSizeControl.querySelectorAll('.font-size')) {
  el.addEventListener('click', changeFont)
}

for (let el of textColorControl.querySelectorAll('.color')) {
  el.addEventListener('click', changeTextColor)
}

for (let el of backgroundColorControl.querySelectorAll('.color')) {
  el.addEventListener('click', changeTextBackground)
}
