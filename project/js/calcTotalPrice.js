// dom elements:
const cartProductsCountEl = document.getElementById('cartProductsCount');
const subTotalEl = document.getElementById('subTotal');
const subtotalAmount = document.getElementById('subtotalAmount');
const totalAmount = document.getElementById('totalAmount');

// calc total prices:
function calculation(productsList, totalPrice, isitWork) {
    cartProductsCountEl.innerHTML = productsList.length.toString();
    subTotalEl.innerHTML = `$${totalPrice}`;
    if (isitWork) {
        subtotalAmount.innerHTML = `$${totalPrice}`;
        totalAmount.innerHTML = `$${totalPrice}`;
    }
}

export default calculation;