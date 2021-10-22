// imports:
import {removeProductsFromLs} from './localStorage.js';
import showAllLsProducts from './showAllLsProducts.js';

// dom elements:
const cartProductsContainer = document.getElementById('cartProductsContainer');
const bodyContainer = document.getElementById('bodyContainer');

// create product cart:
function createProductCart(productData, quantity) {
    const productEl = document.createElement('li');
    productEl.className = 'product';
    let productElStr = `
        <div class="info-box">
            <img class="img-fluid"
            src=${productData.baseImgSrc}
            alt=${productData.title}>
            <div class="text"> 
                <a href="#">${productData.title}</a>
                <span>${quantity} x $${productData.price}</span>
            </div>
        </div>
        <a class="delete-btn" href="#">
            <i class="fa fa-trash-alt"></i>
        </a>
    `;
    productEl.innerHTML = productElStr;

    const deleteBtn = productEl.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', _ => {
        // clear container:
        bodyContainer.innerHTML = '';
        removeProductsFromLs(productData);
        showAllLsProducts(1, true);
    });

    cartProductsContainer.appendChild(productEl);
}

export default createProductCart;