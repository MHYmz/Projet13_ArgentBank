import React from "react";
import serviceData from "../../data/serviceData";
import ServiceCard from "../ServiceCard/ServiceCard";
import { ServiceWrapper } from "./ServiceListDesign.js";

function ServiceList() {
  return (
    <ServiceWrapper>
      {serviceData.map((service) => (
        <ServiceCard
          key={service.iconSrc}
          iconSrc={service.iconSrc}
          iconAlt={service.iconAlt}
          heading={service.heading}
        >
          {service.details}
        </ServiceCard>
      ))}
    </ServiceWrapper>
  );
}

export default ServiceList;
