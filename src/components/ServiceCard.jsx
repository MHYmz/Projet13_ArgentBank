import React from "react";
import "../css/main.css"

const ServiceCard = ({ iconSrc, iconAlt, heading, children }) => {
return (
    <div className="feature-item">
        <img className="feature-icon" src={iconSrc} alt={iconAlt} />
        <h3 className="feature-item-title">{heading}</h3>
        <p>{children}</p>
    </div>
);
};

export default ServiceCard;