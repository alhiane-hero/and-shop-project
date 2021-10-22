// imports:
import {getProductsFromLs} from './localStorage.js';

// values that i need:
const lsProducts = getProductsFromLs();

function cartStructure() {
    const cartStr = `
    <div class="row"> 
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="table_desc mb-5">
                <div class="table_page">
                    <table> 
                        <thead> 
                            <tr> 
                                <th class="product_remove">Remove</th>
                                <th class="product_img">Image</th>
                                <th class="product_title">Product</th>
                                <th class="product_price">Price</th>
                                <th class="product_quantity">Quantity</th>
                                <th class="product_total">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${
                            lsProducts.map(product => {
                                return `
                                    <tr> 
                                        <td class="product_remove"> 
                                            <i class="fa fa-trash-alt"></i>
                                        </td>
                                        <td class="product_img">
                                            <a href="#">
                                                <img src=${product.baseImgSrc}
                                                alt="product image" 
                                                clas="img-fluid">
                                            </a>
                                        </td>
                                        <td class="product_title">
                                            <a href="#">${product.title}</a>
                                        </td>
                                        <td class="product_price">
                                            ${product.price}
                                        </td>
                                        <td class="product_quantity"> 
                                            <input type="number" min="1" max="100" value="1">
                                        </td>
                                        <td class="product_total">
                                            ${product.price}
                                        </td>
                                    </tr>
                                `
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <div class="cart_submit"> 
                    <button class="normalBtn clear_cart_btn">Clear Cart</button>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="coupon_code left mb-4 mb-md-0">
                <h3 class="coupon_title">COUPON</h3>
                <div class="coupon_inner">
                    <p class="desc">Enter your coupon code if you have one.</p>
                    <form class="coupon_form" action="#">
                        <input type="text" placeholder="Coupon code" required>
                        <button class="normalBtn" type="submit">Apply Coupon</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="coupon_code right mb-4 mb-lg-0">
                <h3 class="coupon_title">CART TOTAL</h3>
                <div class="coupon_inner">
                    <div class="cart_subtotal d-flex justify-content-between align-items-center">
                        <p>Subtotal</p>
                        <p class="cart_amount">$122.00</p>
                    </div>
                    <div class="cart_subtotal d-flex justify-content-between align-items-center">
                        <p>Shipping</p>
                        <p class="cart_amount"><span>Flat Rate: </span>$00</p>
                    </div>
                    <a class="with_border" href="#">Calculate shipping</a>
                    <div class="cart_subtotal d-flex justify-content-between align-items-center">
                        <p>Total</p>
                        <p class="cart_amount">$122.00</p>
                    </div>
                    <div class="checkout_btn">
                        <a class="normalBtn" href="#">Proceed to Checkout </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return cartStr;
}

export {
    cartStructure
}