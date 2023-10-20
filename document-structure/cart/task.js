const incCnt = document.querySelectorAll('.product__quantity-control_inc');
const decCnt = document.querySelectorAll('.product__quantity-control_dec');
const quantity = document.querySelectorAll('.product__quantity-value');
const addBtn = document.querySelectorAll('.product__add');
const product = document.querySelectorAll('.product');
const image = document.querySelectorAll('.product__image')
const cartProducts = document.querySelector('.cart__products');

for (let i = 0; i < incCnt.length; i++) {
  incCnt[i].onclick = () => {
    quantity[i].textContent = Number(quantity[i].textContent) + 1;
  }

  decCnt[i].onclick = () => {
    if (Number(quantity[i].textContent) > 1) {
      quantity[i].textContent = Number(quantity[i].textContent) - 1;
    }
  }

  addBtn[i].onclick = () => {
    const cardProduct = document.querySelector(`.cart__product[data-id = "${product[i].getAttribute('data-id')}"]`);
    if (cardProduct == null) {
      cartProducts.innerHTML +=  
        `<div class="cart__product" data-id="${product[i].getAttribute('data-id')}">
           <img class="cart__product-image" src="${image[i].getAttribute('src')}">
           <div class="cart__product-count">${quantity[i].textContent}</div>
         </div>`;
    } else {
      const cartCount = cardProduct.querySelector('.cart__product-count');
      cartCount.textContent = Number(cartCount.textContent) + Number(quantity[i].textContent);
    }
  }
}