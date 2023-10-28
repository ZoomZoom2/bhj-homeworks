const form = document.getElementById("signin__form");
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

window.onload = function() {
	if (localStorage.user_id === undefined) {
	  welcome.classList.remove('welcome_active');
	  signin.classList.add('signin_active');
	} else {
  	userId.textContent = localStorage.user_id;
    signin.classList.remove('signin_active');
	  welcome.classList.add('welcome_active');
	};
};

form.addEventListener('submit', (e) => {
	e.preventDefault();

  let xhr = new XMLHttpRequest();
  let formData = new FormData(form);
	
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth'); 
  xhr.send(formData);
	xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 201) {
	    let answerObject = JSON.parse(xhr.responseText);
		
      if (answerObject.success === true) {
	      localStorage.user_id = answerObject.user_id;
	      userId.textContent = localStorage.user_id;
	      signin.classList.remove('signin_active');
	      welcome.classList.add('welcome_active');
  	  } else if (answerObject.success === false) {
		    alert("Неверные логин/пароль.");
		  };
    }  
  };
});