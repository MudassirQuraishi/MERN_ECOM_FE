import ExclusiveImage from '../../assets/exclusive_image.png'
import classes from './Offers.module.css'
const Offer = () => {
    return <>
        <h1 className={classes['offer-title']}>Offer Ending soon</h1>
        <div className={classes.offer}>
            <div className={classes["offer-left"]}>
                <h1>Excluisve</h1>
                <h1>Offer For you</h1>
                <p>Only on Best Seller Products</p>
                <button>Check Now</button>
            </div>
            <div className={classes["offer-right"]}>
                <img src={ExclusiveImage} alt='offer' />
            </div>
        </div>
    </>
}
export default Offer