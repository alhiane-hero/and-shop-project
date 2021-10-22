// add products to localStorage:
function addProductsToLs(product) {
    const products = getProductsFromLs();
    localStorage.setItem('product', 
        JSON.stringify([...products, product])
    );
}

// remove products from localStorage:
function removeProductsFromLs(productData) {
    const products = getProductsFromLs();
    localStorage.setItem('product', JSON.stringify(
        products.filter(product => product.title !== productData.title)
    ));
}

// get products from localStorage:
function getProductsFromLs() {
    const products = JSON.parse(localStorage.getItem('product'));
    return localStorage.getItem('product') != null ? products : [];
}

// exports:
export {
    addProductsToLs,
    removeProductsFromLs,
    getProductsFromLs
}