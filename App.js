import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import cardData from "./components/CardData";

import "./style.css";

function MyApp() {
    let card = cardData.map((cardItem) => {
        return (
            <Card 
            cardContent = {{
                    imgSrc : cardItem.imgSrc,
                    placeName : cardItem.placeName,
                    known : cardItem.known,
                    placeDescription : cardItem.placeDescription
                }}
             />
        )
    });
    
    
    return(
        <div>
            <Header />
            <Hero />
            <div className = "card-text">
                <h2>--Destinations--</h2>
            </div>
            <div className = "card-container">
                {card}
            </div>
            <Footer />
        </div>
    );
}
export default MyApp;
