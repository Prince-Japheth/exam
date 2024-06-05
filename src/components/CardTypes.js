import React, { useState } from 'react';
import { bankingCards } from "../constants";
import "../styles/cardtypes.css";

const Cards = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % bankingCards.length);
        setShowDetails(false);
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="container">
            <h2>Our Cards</h2>
            <hr />
            <br />
                <div className="wrapp" data-aos="fade-up">
                    <div className="content">
                        <img
                            className="cardtypeimage"
                            src={bankingCards[currentCardIndex].imageUrl}
                            alt={bankingCards[currentCardIndex].title}
                            data-aos="fade-up"
                        />
                        <div className="description">
                            <h1 data-aos="fade-up">{bankingCards[currentCardIndex].title}</h1>
                            <p data-aos="fade-up">{bankingCards[currentCardIndex].description}</p>
                            {showDetails && (
                            <div className="details">
                                <p>{bankingCards[currentCardIndex].details}</p>
                            </div>
                        )}
                        <div className="button-container">
                            <button className="next bus-btn bg-blue-gradient"  onClick={toggleDetails} data-aos="fade-up"> View Info </button>
                            <button className="next bus-btn bg-blue-gradient"  onClick={nextCard} data-aos="fade-up"> Next Card </button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Cards;