// imports:
import createProducts from './createProducts.js';

// get all products from api:
function getAllProducts() {
    fetch("../apis/data.json")
    .then(res => res.json())
    .then(resData => {
        createProducts(resData.data);
    })
}

export default getAllProducts;