const subscribe = document.getElementById('subscribe-modal');
const subscribeClose = subscribe.querySelector('.modal__close');

function setCookie (name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie (name) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
      .pop()
      .split(";")
      .shift();  
  }
}

subscribeClose.addEventListener('click', () => {
  subscribe.classList.remove('modal_active');  
  setCookie('showSubscribeModal', '0');
})

window.onload = function() {
  if (getCookie('showSubscribeModal') !== '0') {
    subscribe.classList.add('modal_active');
  }  
}