// imprts:
import {productDetailssModal} from './modals.js'
import checkLs from './checkLs.js';

// dom elements:
const productsContainer = document.getElementById('productsContainer');

// create all products:
function createProducts(resData) {
    resData.map(productData => {
        let colTabEl = document.createElement('div');
        colTabEl.classList = `col-lg-3
        col-md-4 
        col-sm-6
        col-tab 
        ${productData.className}`;
        let productStr = `
        <div class="tab-box">
            <div class="thumb">
                <a class="imgs" href="#">
                    <img class="one img-fluid" src=${productData.baseImgSrc}
                    alt=${productData.title}>
                    <img class="two img-fluid" src=${productData.placeHolderImgSrc}
                    alt=${productData.title}>
                </a>
                <sapn class="badges ${productData.classColor}">
                    ${productData.badge}
                </sapn>
                <div class="actions"> 
                    <a class="action-btn" href="#">
                        <i class="far fa-heart"></i>
                    </a>
                    <a class="action-btn hide showPrdDetBtn" href="#">
                        <i class="far fa-square"></i>
                    </a>
                    <a class="action-btn hide" href="#">
                        <i class="fa fa-exchange-alt"></i>
                    </a>
                </div>
                <button class="normalBtn add-to-cart-btn">Add To Cart</button>
            </div>
            <div class="content">
                <h5 class="title">
                    <a href="#">${productData.title}</a>
                </h5>
                <span class="price">$${productData.price}</span>
            </div>
        </div>
        `;
        colTabEl.innerHTML = productStr;
        
        const addToCartBtn = colTabEl.querySelector('.tab-box .thumb .add-to-cart-btn');
        addToCartBtn.addEventListener('click', _ => {
            checkLs(productData);
        });

        const showPrdDetBtn = colTabEl.querySelector('.tab-box .thumb .actions .showPrdDetBtn');
        showPrdDetBtn.addEventListener('click', event => {
            event.preventDefault();
            productDetailssModal(productData);
        });

        productsContainer.appendChild(colTabEl);
    });
}

export default createProducts;