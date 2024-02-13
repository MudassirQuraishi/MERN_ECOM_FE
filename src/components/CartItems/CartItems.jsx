import { useContext } from 'react'
import classes from './CartItems.module.css'
import { ShopContext } from '../../utils/context/ShopContext'

import remove_icon from '../../assets/cart_cross_icon.png'
const CartItems = () => {
    const { all_products, cartItems, removeFromCart, getCartAmount } = useContext(ShopContext)
    const subTotal = getCartAmount();
    const shippingFee = subTotal > 100 ? 'FREE' : 10;
    const cartTotal = shippingFee === 'FREE' ? subTotal : shippingFee + subTotal;
    console.log(cartItems)

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
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className={classes["cart-items-format"]}>
                                <img src={e.image} alt="" className={classes["cart-icon-product-icon"]} />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className={classes["cart-items-quantity"]}>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} alt="" className={classes["cart-items-remove-icon"]} onClick={() => { removeFromCart(e.id) }} />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            {<div className={classes["cart-items-down"]}>
                <div className={classes["cart-items-total"]}>
                    <h1>Cart Total</h1>
                    <div>
                        <div className={classes["cart-items-total-item"]}>
                            <p>SubTotal</p>
                            <p>${subTotal}</p>
                        </div>
                        <hr />
                        <div className={classes["cart-items-total-item"]}>
                            <p>Shipping Fee</p>
                            <p>{shippingFee === 'FREE' ? 'FREE' : `$${shippingFee}`}</p>
                        </div>
                        <hr />
                        <div className={classes["cart-items-total-item"]}>
                            <h3>Total</h3>
                            <h3>${cartTotal}</h3>
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