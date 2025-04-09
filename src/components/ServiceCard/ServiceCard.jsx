import React from "react";
import {
    CardContainer,
    IconImage,
    CardTitle,
} from "./ServiceCardDesign.js"

const ServiceCard = ({ iconSrc, iconAlt, heading, children }) => {
return (
    <CardContainer>
        <IconImage src={iconSrc} alt={iconAlt} />
        <CardTitle className="feature-item-title">{heading}</CardTitle>
        <p>{children}</p>
    </CardContainer>
);
};

export default ServiceCard;