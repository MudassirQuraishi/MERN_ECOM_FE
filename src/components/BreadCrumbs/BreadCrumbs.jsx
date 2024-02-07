import classes from './BreadCrumbs.module.css'
import arrow_icon from '../../assets/breadcrum_arrow.png'
const BreadCrumbs = (props) => {
    const { product } = props;

    return <>
        <div className={classes.breadcrumb}>
            HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    </>
}
export default BreadCrumbs