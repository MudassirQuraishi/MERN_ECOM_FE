import React, { createContext, useContext, useState } from "react";
import axios from 'axios'
import { isEqual } from 'lodash';
import { toast } from 'react-toastify';
import { UserContext } from "./UserContext";
import httpErrorHandler from '../genricFunctions/httpErrorHandler';


export const ShopContext = createContext({
    Products: [],
    Product: {},
    cartItems: [],
    getProducts: () => { },
    getProduct: () => { },
    addToCart: () => { },
    getCartItems: () => { },
    getCount: () => { },
});

const ShopContextProvider = (props) => {
    const userCtx = useContext(UserContext);
    const token = userCtx.getToken();

    const [cartItems, setCartItems] = useState([])
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState();
    const getProductsHandler = async (path) => {
        try {
            const response = await axios.get(`http://localhost:8080/api${path}`);
            setAllProducts(response.data.productsData);
        } catch (error) {
            console.error(httpErrorHandler(error.response));
            toast.error('Failed to fetch products')
        }
    };
    const getProductHandler = async (prodId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/product/${prodId}`);
            const newProductData = response.data.productData;
            if (!isEqual(newProductData, product)) {
                setProduct(newProductData);
            }
        } catch (error) {
            console.error(httpErrorHandler(error.response));
            toast.error('Failed to fetch product');
        }
    };
    const addToCartHandler = async (id) => {
        try {
            await axios.post(
                `http://localhost:8080/api/add-to-cart?id=${id}`,
                {},
                {
                    headers: {
                        Authorization: token
                    }
                }
            );
            toast.success('Added to Cart');
        }
        catch (error) {
            console.error(httpErrorHandler(error.response))
            toast.error('Add to cart failed');

        }
    }
    const getCartItemsHandler = async () => {
        try {
            if (token) {

                const response = await axios.get('http://localhost:8080/api/user/get-cart', {
                    headers: { authorization: token }
                });
                setCartItems(response.data.cart.products)
            }
            else {
                setCartItems([])
            }
        } catch (error) {
            console.error(error);
        }
    }
    const getCartItemsCount = () => {
        try {
            if (cartItems.length > 0) {
                return cartItems.length
            }
            else {
                return 0;
            }
        }
        catch (error) {

        }
    }
    const contextValue = {
        Products: allProducts,
        Product: product,
        getProducts: getProductsHandler,
        getProduct: getProductHandler,
        addToCart: addToCartHandler,
        cartItems: cartItems,
        getCartItems: getCartItemsHandler,
        getCount: getCartItemsCount
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider