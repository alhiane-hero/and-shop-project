// imports:
import {removeProductsFromLs, getProductsFromLs} from './localStorage.js';
import showAllLsProducts from './showAllLsProducts.js';
import checkCartIfEmpty from './check_cart_if_empty.js';

// dom elements:
const bodyContainer = document.getElementById('bodyContainer');
const subtotalAmount = document.getElementById('subtotalAmount');
const totalAmount = document.getElementById('totalAmount');

let value = 1;
let total = 0;
window.setTimeout(_ => {
    total = parseInt(subtotalAmount.innerHTML.substr(1));
}, 0);

function createProductsOfCart(productData) {
    let cartEl = document.createElement('tr');
    cartEl.className = 'cartEl';
    const cartStr = `
        <td class="product_remove"> 
            <button class='remove_product_btn'>
                <i class="fa fa-trash-alt"></i>
            </btn>
        </td>
        <td class="product_img">
            <a href="#">
                <img src=${productData.baseImgSrc}
                alt="product image" 
                clas="img-fluid">
            </a>
        </td>
        <td class="product_title">
            <a href="#">${productData.title}</a>
        </td>
        <td class="product_price">
            $${productData.price}
        </td>
        <td class="product_quantity"> 
            <input type="number" min="1" max="100"
            value=${value} class='quantityInput'>
        </td>
        <td class="product_total inner_product_total">
            $${productData.price}
        </td>
    `;
    cartEl.innerHTML = cartStr;
    
    const quantityInput = cartEl.querySelector('.quantityInput');
    const product_total = cartEl.querySelector('.inner_product_total');
    quantityInput.addEventListener('input', _ => {
        const quantity = parseInt(quantityInput.value);
        value = quantity.toString();
        product_total.innerHTML = `$${productData.price * quantity}`;
        total += productData.price;
        subtotalAmount.innerHTML = `$${total}`;
        totalAmount.innerHTML = `$${total}`;
        total = parseInt(subtotalAmount.innerHTML.substr(1));
    });

    // set value to input:
    quantityInput.value = value;
    product_total.innerHTML = `$${productData.price * value}`;

    const remove_product_btn = cartEl.querySelector('.remove_product_btn');
    remove_product_btn.addEventListener('click', _ => {
        // clear container:
        bodyContainer.innerHTML = '';
        removeProductsFromLs(productData);
        showAllLsProducts(1, true);
        checkCartIfEmpty();
    });

    bodyContainer.appendChild(cartEl);
}

export default createProductsOfCart;