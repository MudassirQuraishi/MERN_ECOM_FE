import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Popular from "../../components/Popular/Popular";
import Offer from "../../components/Offers/Offers";
import NewCollections from "../../components/NewCollections/NewCollections";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
const HomePage = () => {
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
