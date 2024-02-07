import classes from './Popular.module.css'
import Item from '../Item/Item'
import data_product from '../../assets/data';
const Popular = () => {
    return <>
        <div className={classes.popular}>
            <h1>Popular In Woman</h1>
            <hr />
            <div className={classes["popular-item"]}>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    </>
}
export default Popular