import classes from './RelatedProducts.module.css'
import Item from '../Item/Item.jsx'
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
const RelatedProducts = (props) => {
    const { products } = props
    const shuffledProducts = shuffleArray([...products]);
    const productsData = shuffledProducts.slice(0, 4);

    return (
        <div className={classes["realated-products"]}>
            <h1>Related Products</h1>
            <hr />
            <div className={classes["related-products-item"]}>
                {productsData.map((item, i) => (
                    <Item
                        key={i}
                        id={item._id}
                        name={item.name}
                        image={item.mainImage}
                        old_price={item.originalPrice}
                        new_price={item.discountedPrice}
                    />
                ))}
            </div>
        </div>
    )
}
export default RelatedProducts