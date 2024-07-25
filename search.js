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
  
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchResultsContainer = document.getElementById('search-results-container');
  
    if (query) {
      const results = searchProducts(query);
      searchResultsContainer.innerHTML = renderProducts(results);
    }
  });
  
  function searchProducts(query) {
    const allProducts = [...products, ...moreProducts];
    return allProducts.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  function renderProducts(products) {
    return products
      .map((product) => {
        return `
          <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3>${product.title}</h3>
            <p>${product.price.discounted}</p>
          </div>
        `;
      })
      .join('');
  }
  