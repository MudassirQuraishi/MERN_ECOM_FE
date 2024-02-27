import React, { useContext, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Popular from "../../components/Popular/Popular";
import Offer from "../../components/Offers/Offers";
import NewCollections from "../../components/NewCollections/NewCollections";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { ShopContext } from "../../utils/context/ShopContext";
const HomePage = () => {
    const shopCtx = useContext(ShopContext);
    // useEffect(() => {
    //     shopCtx.fetchPopular();
    // }, [])
    return (
        <>
            <section id="carousel" >
                <Carousel />
            </section>
            <section id="popular">
                <Popular />
            </section>
            <section id="offer">
                <Offer />
            </section>
            <section id="new-collection">
                <NewCollections />
            </section>
            <section>
                <NewsLetter />
            </section>
        </>
    );
};
export default HomePage;
