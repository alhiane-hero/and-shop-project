// imports:
import {getProductsFromLs} from './localStorage.js';
import calculation from './calcTotalPrice.js';
import createProductCart from './createProductCart.js';
import createProductsOfCart from './cart.js';

// fix values:
let totalPrice = 0;

// show all localStorage Products:
function showAllLsProducts(quantity = 1, isItWork = false) {
    // set total amount to it value:
    if (isItWork) {
        const subtotalAmount = document.getElementById('subtotalAmount');
        const totalAmount = document.getElementById('totalAmount');
        const lsProducts = getProductsFromLs();
        if (lsProducts.length > 0) {
            window.setTimeout(_ => {
                const product_total = document.querySelectorAll('.inner_product_total');
                let total = 0;
                product_total.forEach(product => {
                    total += parseInt(product.innerHTML.substr(1));
                    subtotalAmount.innerHTML = `$${total}`;
                    totalAmount.innerHTML = `$${total}`;
                });
            }, 0);
        }
    }
    // clear counter:
    totalPrice = 0;
    // clear containers:
    cartProductsContainer.innerHTML = '';
    const producstData = getProductsFromLs();
    producstData.forEach(productData => {
        // create new product cart:
        createProductCart(productData, quantity);
        // create products of cart:
        if (isItWork) {
            createProductsOfCart(productData);
        }
        // calc total price:
        totalPrice += (productData.price * quantity);
    });
    // cart products count - calc total prices:
    calculation(producstData, totalPrice, isItWork);
}

export default showAllLsProducts;