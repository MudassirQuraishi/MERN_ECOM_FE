import { useContext } from "react"
import { ShopContext } from '../../utils/context/ShopContext'
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import DisplayProduct from "../../components/DisplayProduct/DisplayProduct";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
const Product = () => {
    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId))
    return <>
        <div className="product-contianer">
            <BreadCrumbs product={product} />
            <DisplayProduct product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    </>
}
export default Product  