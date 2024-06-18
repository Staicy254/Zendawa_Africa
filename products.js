const productsContainer = document.querySelector(
  '#products-container'
);
const moreProductsContainer = document.querySelector(
  '#more-products-container'
);
let addToCartBtns;

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  addToCartBtns = document.querySelectorAll('#addToCartBtn');
  console.log(addToCartBtns);

  addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.parentElement.parentElement.id;
      addToCart(productId);
    });
  });
});

const products = [
  {
    id: 'item1',
    image: './assets/images/411.jpeg',
    title: 'La Roche-Posay Cicaplast',
    price: {
      original: 'Ksh. 3,000',
      discounted: 'ksh. 2,800',
    },
  },
  {
    id: 'item2',
    image: './assets/images/412.jpeg',
    title: 'La Roche-Posay Ultra Micellar Water',
    price: {
      original: null,
      discounted: 'ksh. 2,900',
    },
  },
  {
    id: 'item3',
    image: './assets/images/413.jpeg',
    title: 'La Roche-Posay Niacinamide Serum',
    price: {
      original: null,
      discounted: 'ksh. 2,800',
    },
  },
  {
    id: 'item4',
    image: './assets/images/414.jpeg',
    title: 'La Roche-Posay Puryfying Foaming cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,500',
    },
  },
  {
    id: 'item5',
    image: './assets/images/416.jpeg',
    title: 'Cera Ve Moisturizing Cream',
    price: {
      original: 'ksh.2,200',
      discounted: 'ksh. 2,000',
    },
  },
  {
    id: 'item6',
    image: './assets/images/417.jpeg',
    title: 'Cera Ve Hydrating Facial cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,600',
    },
  },
];

const moreProducts = [
  {
    id: 'item7',
    image: './assets/images/412.jpeg',
    title: 'La Roche-Posay Ultra Micellar Water',
    price: {
      original: null,
      discounted: 'ksh. 2,900',
    },
  },
  {
    id: 'item8',
    image: './assets/images/413.jpeg',
    title: 'La Roche-Posay Niacinamide Serum',
    price: {
      original: null,
      discounted: 'ksh. 2,800',
    },
  },
  {
    id: 'item9',
    image: './assets/images/414.jpeg',
    title: 'La Roche-Posay Puryfying Foaming cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,500',
    },
  },
  {
    id: 'item10',
    image: './assets/images/416.jpeg',
    title: 'Cera Ve Moisturizing Cream',
    price: {
      original: 'ksh.2,200',
      discounted: 'ksh. 2,000',
    },
  },
];

const productsInCart = JSON.parse(
  localStorage.getItem('cart') || '[]'
);

function addToCart(productId) {
  const product = [...products, ...moreProducts].find(
    (product) => product.id === productId
  );
  console.log(product);
  console.log(productsInCart);
  productsInCart.push(product);
  localStorage.setItem(
    'cart',
    JSON.stringify(productsInCart)
  );
  alert('Product added to cart');
}

function renderProducts(products) {
  return products
    .map((product) => {
      return `
            <li class="scrollbar-item">
                <div class="shop-card">
                    <div class="card-banner img-holder" style="--width: 540; --height: 720;" id="${
                      product.id
                    }">
                        <img src="${
                          product.image
                        }" width="540" height="720" loading="lazy" alt="" class="img-cover">
                        <div id="title"></div>
                        ${
                          product.price.original
                            ? `<span class="badge" aria-label="20% off">-20%</span>`
                            : ''
                        }
                        <div class="card-actions">
                                <button class="action-btn" id="addToCartBtn" aria-label="add to cart">
                                    <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                                </button>
                            <a href="wish.html">
                                <button class="action-btn" aria-label="add to wishlist">
                                    <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="price">
                            ${
                              product.price.original
                                ? `<del class="del">${product.price.original}</del>`
                                : ''
                            }
                            <span class="span">${
                              product.price.discounted
                            }</span>
                        </div>
                        <h3>
                            <a href="#" class="card-title">${
                              product.title
                            }</a>
                        </h3>
                    </div>
                </div>
            </li>
        `;
    })
    .join('');
}

const productsMarkup = renderProducts(products);
const moreProductsMarkup = renderProducts(moreProducts);

productsContainer.innerHTML = productsMarkup;
moreProductsContainer.innerHTML = moreProductsMarkup;


