const product = [
    { id: 0, image: 'assets/images/407.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 1, image: 'assets/images/408.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 2, image: 'assets/images/409.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 3, image: 'assets/images/410.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 4, image: 'assets/images/411.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 5, image: 'assets/images/412.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 6, image: 'assets/images/413.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 7, image: 'assets/images/414.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 8, image: 'assets/images/415.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 9, image: 'assets/images/416.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 10, image: 'assets/images/417.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 },
    { id: 11, image: 'assets/images/418.jpeg', title: 'La Roche-Posay Sunscreen', price: 2800 }
];

const categories = [...new Set(product.map((item) => item))];

document.getElementById('root').innerHTML = categories.map((item, index) => {
    const { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>ksh.${price}.00</h2> 
                <button onclick='addtocart(${index})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart() {
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
        document.getElementById('totalPrice').innerHTML = "";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total=total+price;
            document.getElementById("total").innerHTML = "ksh." +total+".00";
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}'></img>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>Ksh. ${price}.00</h2>
                    <i class='bx bx-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');
        document.getElementById('totalPrice').innerHTML = `<h2>Total: Ksh. ${total}.00</h2>`;
    }
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}
