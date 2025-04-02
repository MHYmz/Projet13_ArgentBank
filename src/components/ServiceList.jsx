import React from "react";
import serviceData from "../data/serviceData";
import ServiceCard from "../components/ServiceCard";

function ServiceList() {
  return (
    <div>
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
    </div>
  );
}

export default ServiceList;
