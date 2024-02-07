import React, { useContext } from "react"
import Item from "../../components/Item/Item"
import { ShopContext } from "../../utils/context/ShopContext"
import arrow from '../../assets/dropdown_icon.png'
import classes from './Category.module.css'


const Category = (props) => {
    const { all_products } = useContext(ShopContext)
    return <>
        <div >
            <img src={props.banner} alt="" className={classes.banner} />
            <div className={classes.sort}>
                <p>
                    <span>1-12</span> out of 36 products
                </p>
                <div className={classes.dropdown}>
                    Sort by<img src={arrow} alt="" />
                </div>
            </div>
            <div className={classes["shop-category"]}>
                <div className={classes.products}>
                    {all_products.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                        }
                        return null
                    })}
                </div>
            </div>
            <div className={classes.loadmore}>
                Explore More
            </div>
        </div>
    </>
}
export default Category