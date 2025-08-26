import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceGrid() {
  const serviceCards = [
    {
      title: "Web Development",
      services: ["Frontend", "Backend"],
    },
    {
      title: "Fronted Development",
      services: ["React", "Vue.js", "Angular"],
    },
    {
      title: "Backend Development",
      services: ["Python", "Node.js"],
    },
    {
      title: "Product Design",
      services: ["UI", "UX"],
    },
  ];

  return (
    <section className="grid gap-10 mx-0 my-0 grid-cols-2 max-w-[600px] max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:mx-auto">
      {serviceCards.map((card, index) => (
        <ServiceCard key={index} title={card.title} services={card.services} />
      ))}
    </section>
  );
}

export default ServiceGrid;
