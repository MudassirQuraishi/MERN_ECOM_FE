import React, { createContext, useState } from "react";
import all_products from '../../assets/all_product.js'

export const ShopContext = createContext({
    all_products: [],
    cartItems: {},
    addToCart: () => { },
    removeFromCart: () => { },
    getCartAmount: () => { },
    getTotalCartItem: () => { }
});
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0
    }
    return cart;
}
const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())
    const addToCartHandler = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCartHandler = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmountHandler = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }
    const getTotalCartItemsHandler = () => {
        let totalCartItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCartItems += cartItems[item];
            }
        }
        return Number(totalCartItems)
    }
    const contextValue = {
        all_products: all_products,
        cartItems: cartItems,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        getCartAmount: getTotalCartAmountHandler,
        getTotalCartItem: getTotalCartItemsHandler
    }
    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}
export default ShopContextProvider