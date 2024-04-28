import React from "react";
import './Card.css';

const Card = ({ title, description, image }) => {
    return (
        <div className="card">
            <div className="card-left">
                <img src={image} alt={title} />
            </div>
            <div className="card-right">
                <h3>{title}</h3>
                <div className="Card-button">Shop Now!</div>
            </div>
        </div>
    );
};

export default Card;
