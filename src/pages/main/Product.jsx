import React, { useContext, useEffect } from "react";
import { ShopContext } from '../../utils/context/ShopContext';
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import DisplayProduct from "../../components/DisplayProduct/DisplayProduct";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";


const Product = () => {
    const shopCtx = useContext(ShopContext);
    const { productId } = useParams();

    useEffect(() => {
        shopCtx.getProduct(productId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId]);

    const productData = shopCtx.Product;
    const relatedProducts = shopCtx.Products

    if (!productData) {
        return null;
    }

    return (
        <div className="product-container">
            <BreadCrumbs product={productData} />
            <DisplayProduct product={productData} />
            <DescriptionBox />
            <RelatedProducts products={relatedProducts} id={productData._id} />
        </div>
    );
};

export default Product;
