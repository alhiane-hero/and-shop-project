// imports:
import {addProductsToLs} from './localStorage.js';
import showAllLsProducts from './showAllLsProducts.js';
import checkLs from './checkLs.js';

// dom elements:
const successFailedModalEl = document.getElementById('successFailedModal');
const successFailedModalContainer = document.getElementById('successFailedModalContainer');
const productDetailssModalEl = document.getElementById('productDetailssModal');
const productDetailssModalContainer = document.getElementById('productDetailssModalContainer');

// auxiliary functions:
function showHideEl(parent, child) {
    child.classList.remove('show');
    window.setTimeout(_ => {
        parent.classList.remove('show');
        child.remove();
    }, 300);
}

// create success hint:
function successFailedModal(imgSrc, title, desc, className) {
    successFailedModalEl.classList.add('show');
    const successFailedModalContent = document.createElement('div');
    successFailedModalContent.classList = `success-Failed-modal-content ${className}`;
    const successFailedModalStr = `
        <img src="../imgs/icons/${imgSrc}"
        alt="check circle icon" />
        <h3>${title}</h3>
        <p>${desc}</p>
    `;
    successFailedModalContent.innerHTML = successFailedModalStr;
    window.setTimeout(_ => successFailedModalContent.classList.add('show'), 0);

    window.setTimeout(_ => {
        showHideEl(successFailedModalEl, successFailedModalContent);
    }, 3000);
    successFailedModalContainer.addEventListener('click', event => {
        if (!(event.target.classList.contains('success-Failed-modal-content'))) {
            showHideEl(successFailedModalEl, successFailedModalContent);
        }
    });

    successFailedModalContainer.appendChild(successFailedModalContent);
}

function productDetailssModal(productData) {
    productDetailssModalEl.classList.add('show');
    let productEl = document.createElement('div');
    productEl.className = 'product';
    const productDetailsStr = `
    <button class="close_modal"><i class="fa fa-times"></i></button>
    <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-12 col-12"> 
            <div class="img"> 
                <img src=${productData.baseImgSrc}
                alt=${productData.title}
                class='img-fluid'>
            </div>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-12 col-12"> 
            <div class="text"> 
                <h3>${productData.title}</h3>
                <div class="reviews_rating d-flex">
                    <ul class="stars d-flex">
                        <li><a href="#"><i class="fas fa-star"></i></a></li>
                        <li><a href="#"><i class="fas fa-star"></i></a></li>
                        <li><a href="#"><i class="fas fa-star"></i></a></li>
                        <li><a href="#"><i class="fas fa-star"></i></a></li>
                        <li><a href="#"><i class="fas fa-star"></i></a></li>
                    </ul>
                    <span class="reviews">(${productData.CustomerReviews} Customer Reviews)</span>
                </div>
                <h4>$${productData.price}
                    <del>$${productData.oldPrice}</del>
                </h4>
                <p class="desc">${productData.productDesc}</p>
                <div class="product-color"> 
                    <span>Color</span>
                    <ul class="colors"> 
                        <li> 
                            <label id="modal-product-color-red">
                            <input class="color-select" type="radio" name="modal-product-color" id="modal-product-color-red" checked><span class="product-color-red"></span>
                            </label>
                        </li>
                        <li> 
                            <label id="modal-product-color-green">
                            <input class="color-select" type="radio" name="modal-product-color" id="modal-product-color-green"><span class="product-color-green"></span>
                            </label>
                        </li>
                        <li> 
                            <label id="modal-product-color-blue">
                            <input class="color-select" type="radio" name="modal-product-color" id="modal-product-color-blue"><span class="product-color-blue"></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <form class="product-form" action="#"> 
                    <div class="plus-minus-inpu"> 
                        <button type='button' class="btn minus-btn">
                            <i class="fa fa-minus"></i>
                        </button>
                        <input id='quantityInput' type="number"
                        name="quantity" value="1">
                        <button type='button' class="btn plus-btn">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                    <input type="submit"
                    class="normalBtn add_to_cart_btn"
                    value="Add To Cart">
                </form>
                <div class="modal_share_icons">
                    <h4>SHARE THIS PRODUCT</h4>
                    <ul class="social-media d-flex">
                        <li><a class="facebook" href="#">
                                <i class="fab fa-facebook-f"></i>
                        </a></li>
                        <li><a class="twitter" href="#">
                            <i class="fab fa-twitter"></i>
                        </a></li>
                        <li><a class="linkedin" href="#">
                            <i class="fab fa-linkedin-in"></i>
                        </a></li>
                        <li><a class="telegram" href="#">
                            <i class="fab fa-telegram"></i>
                        </a></li>
                        <li><a class="whatsapp" href="#">
                            <i class="fab fa-whatsapp"></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;
    productEl.innerHTML = productDetailsStr;
    window.setTimeout(_ => productEl.classList.add('show'), 0);

    const closeModalBtn = productEl.querySelector('.close_modal');
    closeModalBtn.addEventListener('click', _ => {
        showHideEl(productDetailssModalEl, productEl);
    });

    const plusMinusBtns = productEl.querySelectorAll('.text .product-form .btn');
    const quantityInput = productEl.querySelector('.text .product-form #quantityInput');
    plusMinusBtns.forEach(btn => {
        btn.addEventListener('click', _ => {
            if (btn.classList.contains('minus-btn')) {
                if (parseInt(quantityInput.value) <= 1) {
                    alert("Sorry, Limit Reached");
                } else {
                    quantityInput.value = parseInt(quantityInput.value) - 1;
                }
            } else {
                quantityInput.value = parseInt(quantityInput.value) + 1;
            }   
        });
    });

    const productForm = productEl.querySelector('.text .product-form');
    productForm.addEventListener('submit', event => {
        event.preventDefault();
        const quantity = parseInt(quantityInput.value);
        checkLs(productData, quantity);
    });

    productDetailssModalContainer.appendChild(productEl);
}

export {
    successFailedModal,
    productDetailssModal
};