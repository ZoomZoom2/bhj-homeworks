const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function(event) {
    if (event.total > 0) {
      progress.value = Number(event.loaded / event.total).toFixed(2);
    }  
  }

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  const formData = new FormData(form);
  xhr.send(formData);
})