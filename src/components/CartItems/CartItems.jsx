import { useContext, useEffect, useState } from 'react'
import classes from './CartItems.module.css'
import { ShopContext } from '../../utils/context/ShopContext'

import remove_icon from '../../assets/cart_cross_icon.png'
const CartItems = () => {
    const shopCtx = useContext(ShopContext);
    useEffect(() => {
        shopCtx.getCartItems();
    }, [])
    const [dataFetched, setDataFetched] = useState(false);
    const all_products = shopCtx.cartItems ? shopCtx.cartItems : null;
    console.log(all_products)
    let subTotal = 0;
    let shippingFee, cartTotal;

    if (all_products) {
        all_products.forEach(product => {
            subTotal += Number(product.totalPrice);
        });

        shippingFee = subTotal > 1500 ? 'FREE' : 99;
        cartTotal = shippingFee === 'FREE' ? subTotal : subTotal + shippingFee;
    }


    return (
        <div className={classes["cart-items"]}>
            <div className={classes["cart-item-format-main"]}>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_products && all_products.map((e) => {

                return (
                    <div key={e.id}>
                        <div className={classes["cart-items-format"]}>
                            <img src={e.product.mainImage} alt="" className={classes["cart-icon-product-icon"]} />
                            <p>{e.product.name}</p>
                            <p>${e.product.discountedPrice}</p>
                            <button className={classes["cart-items-quantity"]}>{e.quantity}</button>
                            <p>${e.totalPrice}</p>
                            <img src={remove_icon} alt="" className={classes["cart-items-remove-icon"]} />
                        </div>
                        <hr />
                    </div>
                )
            })}
            {all_products && all_products.length > 0 && <div className={classes["cart-items-down"]}>
                <div className={classes["cart-items-total"]}>
                    <h1>Cart Total</h1>
                    <div>
                        <div className={classes["cart-items-total-item"]}>
                            <p>SubTotal</p>
                            <p>&#8377;{subTotal}</p>
                        </div>
                        <hr />
                        <div className={classes["cart-items-total-item"]}>
                            <p>Shipping Fee</p>
                            <p>{shippingFee}</p>
                        </div>
                        <hr />
                        <div className={classes["cart-items-total-item"]}>
                            <h3>Total</h3>
                            <h3>&#8377;{cartTotal}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className={classes["cart-items-promocode"]}>
                    <p>If you have a Promo code, Enter it here</p>
                    <div className={classes["cart-item-promobox"]}>
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>}

        </div>
    )

}
export default CartItems