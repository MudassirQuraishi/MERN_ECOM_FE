import classes from './RelatedProducts.module.css'
import data_product from '../../assets/data.js'
import Item from '../Item/Item.jsx'
const RelatedProducts = () => {
    return (
        <div className={classes["realated-products"]}>
            <h1>Related Products</h1>
            <hr />
            <div className={classes["related-products-item"]}>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}
export default RelatedProducts