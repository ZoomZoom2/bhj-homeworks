const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const buttons = document.getElementById('poll__answers');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let data = JSON.parse(xhr.responseText);
    pollTitle.textContent = data.data.title;
    for (let answer of data.data.answers) {
      buttons.innerHTML += `<button class="poll__answer">
        ${answer}
        </button>`;
    }
    document.querySelectorAll('.poll__answer').forEach((button) => {button.onclick = () => {
      alert('Спасибо Ваш голос учтён')
    }})  
  }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();