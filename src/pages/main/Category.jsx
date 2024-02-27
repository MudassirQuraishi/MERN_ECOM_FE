import React, { useContext, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import Item from "../../components/Item/Item"
import { ShopContext } from "../../utils/context/ShopContext"
import arrow from '../../assets/dropdown_icon.png'
import classes from './Category.module.css'

const Category = (props) => {

    const shopCtx = useContext(ShopContext)
    const location = useLocation();

    useEffect(() => {
        shopCtx.getProducts(location.pathname);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    const filteredProducts = shopCtx.Products.filter(item => {
        return item.category === props.category
    });
    return (
        <>
            <div>
                <img src={props.banner} alt="" className={classes.banner} />
                <div className={classes.sort}>
                    <p>
                        <span>1-12</span> out of {filteredProducts.length} products
                    </p>
                    <div className={classes.dropdown}>
                        Sort by<img src={arrow} alt="" />
                    </div>
                </div>
                <div className={classes["shop-category"]}>
                    <div className={classes.products}>
                        {filteredProducts.map((item) => (
                            <Item key={item._id} id={item._id} name={item.name} image={item.mainImage} old_price={item.originalPrice} new_price={item.discountedPrice} />
                        ))}
                    </div>
                </div>
                <div className={classes.loadmore}>
                    Explore More
                </div>
            </div>
        </>
    );
}

export default Category;
