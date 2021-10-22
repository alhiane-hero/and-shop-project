// imports:
import {addProductsToLs, getProductsFromLs} from './localStorage.js';
import showAllLsProducts from './showAllLsProducts.js';
import {successFailedModal} from './modals.js';

function checkLs(productData, quantity = 1) {
    const lsProducts = getProductsFromLs();
    if (lsProducts.some(product => product.id === productData.id)) {
        successFailedModal('failled_icon.svg',
        'Failed!',
        'This product is already added in your Cart',
        'red');
    } else {
        addProductsToLs(productData);
        showAllLsProducts(quantity);
        successFailedModal('success_icon.svg',
        'Success!',
        'Successfully added to your Cart',
        'green');
    }
}

export default checkLs;