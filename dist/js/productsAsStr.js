import {getProductsFromLs} from './localStorage.js';

function productsAsStr() {
    let lsProducts = getProductsFromLs();
    let arrOfObjs = [];
    [...lsProducts].forEach(product => {
        arrOfObjs.push(JSON.stringify(product));
    });
    return arrOfObjs;
}

export default productsAsStr;