// imports:
import {getProductsFromLs} from './localStorage.js';

function checkCartIfEmpty() {
    const lsProducts = getProductsFromLs();
    const emptyCart = document.getElementById('emptyCart');
    const rowCart = document.getElementById('rowCart');
    if (lsProducts.length === 0) {
        emptyCart.classList.remove('hide');
        rowCart.classList.add('hide');
    } else {
        emptyCart.classList.add('hide');
        rowCart.classList.remove('hide');
    }
}

export default checkCartIfEmpty;