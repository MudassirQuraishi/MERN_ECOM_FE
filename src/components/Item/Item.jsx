import { Link } from 'react-router-dom'
import classes from './Item.module.css'
const Item = (props) => {
    const { image, name, old_price, new_price, id } = props
    return <>
        <div className={classes.item}>
            <Link to={`/product/${id}`}>
                <img onClick={window.scrollTo(0, 0)} src={image} alt="" />
            </Link>
            <p>{name}</p>
            <div className={classes["item-prices"]}>
                <div className={classes["item-price-new"]}>${new_price} </div>
                <div className={classes["item-price-old"]}>${old_price} </div>
            </div>
        </div>
    </>
}
export default Item