import classes from './NewCollections.module.css'
import Item from '../Item/Item'
import new_collections from '../../assets/new_collections'

const NewCollections = () => {
    return <>
        <div className={classes["new-collections"]}>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className={classes.collections}>
                {new_collections.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    </>
}
export default NewCollections
