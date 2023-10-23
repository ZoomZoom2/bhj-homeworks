const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    let data = JSON.parse(xhr.responseText);
    Object.keys(data.response.Valute).forEach(function(code) {
      items.innerHTML += `<div class="item">
        <div class="item__code">
          ${data.response.Valute[code].CharCode}
        </div>
        <div class="item__value">
          ${data.response.Valute[code].Value}
        </div>
          <div class="item__currency">
            руб.
          </div>
        </div>`;
    })
  }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();