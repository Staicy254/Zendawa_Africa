const productsContainer = document.querySelector(
  '#products-container'
);
const moreProductsContainer = document.querySelector(
  '#more-products-container'
);
let addToCartBtns;
let wishListBtns;

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  addToCartBtns = document.querySelectorAll('#addToCartBtn');
  wishListBtns = document.querySelectorAll('#addToWishlistBtn');

  addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.parentElement.parentElement.id;
      addToCart(productId);
    });
  });

  wishListBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.parentElement.parentElement.id;
      addToWishlist(productId);
    });
  });
});

const products = [
  {
    id: 'item1',
    image: './assets/images/406.jpeg',
    title: 'La Roche-Posay Sunscreen',
    price: {
      original: 'ksh. 3,000',
      discounted: 'ksh. 2,800',
    },
  },
  {
    id: 'item2',
    image: './assets/images/409.jpeg',
    title: 'Cera Ve Hydrating Cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,900',
    },
  },
  {
    id: 'item3',
    image: './assets/images/410.jpeg',
    title: 'Advanced Snail Mucin Power Essence',
    price: {
      original: null,
      discounted: 'ksh. 2,800',
    },
  },
  {
    id: 'item4',
    image: './assets/images/411.jpeg',
    title: 'La Roche-Posay Cicaplast',
    price: {
      original: null,
      discounted: 'ksh. 2,500',
    },
  },
  {
    id: 'item5',
    image: './assets/images/412.jpeg',
    title: 'La Roche-Posay Micellar Water Ultra',
    price: {
      original: 'ksh.2,200',
      discounted: 'ksh. 2,000',
    },
  },
  {
    id: 'item6',
    image: './assets/images/413.jpeg',
    title: 'La Roche-Posay Pure Niacinamide Serum',
    price: {
      original: null,
      discounted: 'ksh. 2,600',
    },
  },
  {
    id: 'item7',
    image: './assets/images/414.jpeg',
    title: 'La Roche-Posay Purifying Foaming cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,600',
    },
  },
];

const moreProducts = [
  {
    id: 'item8',
    image: './assets/images/415.jpeg',
    title: 'CeraVe Hydrating Foaming Oil Cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,900',
    },
  },
  {
    id: 'item9',
    image: './assets/images/416.jpeg',
    title: 'CeraVe Moisturizing Cream',
    price: {
      original: null,
      discounted: 'ksh. 2,500',
    },
  },
  {
    id: 'item10',
    image: './assets/images/417.jpeg',
    title: 'CeraVe Hydrating Facial Cleanser',
    price: {
      original: 'ksh.2,200',
      discounted: 'ksh. 2,000',
    },
  },
  {
    id: 'item11',
    image: './assets/images/418.jpeg',
    title: 'CeraVe Renewing SA Cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,500',
    },
  },
  {
    id: 'item12',
    image: './assets/images/419.jpeg',
    title: 'The Ordinary, Suncare(Sunscreen)',
    price: {
      original: null,
      discounted: 'ksh. 2,500',
    },
  },
  {
    id: 'item13',
    image: './assets/images/420.jpeg',
    title: 'Nivea Sunscreen SPF 30',
    price: {
      original: null,
      discounted: 'ksh. 2,500',
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
  productsInCart.push(product);
  localStorage.setItem(
    'cart',
    JSON.stringify(productsInCart)
  );
  alert('Product added to cart');
}

function addToWishlist(productId) {
  const product = [...products, ...moreProducts].find(
    (product) => product.id === productId
  );
  const wishlist = JSON.parse(
    localStorage.getItem('wishlist') || '[]'
  );
  wishlist.push(product);
  localStorage.setItem(
    'wishlist',
    JSON.stringify(wishlist)
  );
  alert('Product added to wishlist');
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
                              <button class="action-btn" id="addToWishlistBtn" aria-label="add to wishlist">
                                  <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                              </button>
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


