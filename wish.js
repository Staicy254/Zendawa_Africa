function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let total = 0;
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your wishlist is empty.</p>';
    } else {
      cartItemsContainer.innerHTML = cart
        .map((item, index) => {
          const { id, image, title, price } = item;
          total += price.discounted;
          return `
              <div class='cart-item'>
                <div class='row-img'>
                  <img class='rowimg' src='${image}'></img>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Ksh. ${price.discounted}.00</h2>
                <button id='remove-btn' data-id="${id}">Remove</button>
              </div>
            `;
        })
        .join('');
      // document.getElementById(
      //   'totalPrice'
      // ).innerHTML = `<h2>Total: Ksh. ${total}.00</h2>`;
    }
  }
  
  function removeItemFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newItems = cart.filter((item) => item.id !== index);
    localStorage.setItem('cart', JSON.stringify(newItems));
    loadCart();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    document
      .getElementById('clear-cart')
      .addEventListener('click', () => {
        localStorage.removeItem('cart');
        loadCart();
      });
  
    document
      .getElementById('cart-items')
      .addEventListener('click', (event) => {
        if (event.target.id === 'remove-btn') {
          const index = event.target.dataset.id;
          console.log(index);
          removeItemFromCart(index);
        }
      });
  });
  
  