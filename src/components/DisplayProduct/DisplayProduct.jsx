import React from 'react'
import classes from './DisplayProduct.module.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../utils/context/ShopContext'
const DisplayProduct = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    const onClickHandler = () => {
        addToCart(product._id)
    }
    if (!product) {
        return null
    }
    return (
        <div className={classes["product-display"]}>
            <div className={classes.left}>
                <div className={classes["image-list"]}>
                    {
                        product.sideImages.map((imageSrc, index) => {
                            return <img src={imageSrc} alt="" key={index} />
                        })
                    }
                </div>
                <div className={classes["display-image"]}>
                    <img className={classes['main-image']} src={product.mainImage} alt="" />
                </div>
            </div>
            <div className={classes.right}>
                <h1> {product.name} </h1>
                <div className={classes.star}>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className={classes.prices}>
                    <div className={classes["old-price"]}>&#8377;{product.originalPrice}</div>
                    <div className={classes["new-price"]}>&#8377;{product.discountedPrice}</div>
                </div>
                <div className={classes.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloremque dolorum. Sequi est cum animi aliquid repellat reiciendis, iusto voluptate?

                </div>
                <div className={classes["size-chart"]}>
                    <h1>Select Size</h1>
                    <div className={classes.sizes}>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={onClickHandler}>Add To Cart</button>
                <p className={classes.category}><span>Category :</span>{product.category}</p>
                <p className={classes.category}>
                    <span>Tags :</span>
                    {product.tags.map((tag, index) => (
                        <React.Fragment key={tag}>
                            {tag}
                            {index !== product.tags.length - 1 && ' , '}
                        </React.Fragment>
                    ))}
                </p>

            </div>
        </div>
    )
}
export default DisplayProduct