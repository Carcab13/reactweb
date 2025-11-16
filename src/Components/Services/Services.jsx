import React from "react";
import "./Services.css";
import { FaCode, FaCube } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

const servicesData = [
  {
    icon: <FaCode />,
    title: "Front-end Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    tags: ["React", "JavaScript", "Web Design"],
  },
  {
    icon: <FaCube />,
    title: "3D-Printing",
    description: "High-quality 3D printed prototypes, models, and custom designs.",
    tags: ["Prototyping", "Custom Designs", "Models"],
  },
  {
    icon: <FiLayers />,
    title: "Sticker Printing",
    description: "Custom stickers and decals for branding, events, and personal use.",
    tags: ["Custom Design", "Branding", "Decals"],
  },
];

const ServiceCard = ({ icon, title, description, tags }) => (
  <div className="card">
    <div className="card-top">
      <div className="icon-wrapper">
        {icon}
      </div>
    </div>
    <div className="card-bottom">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="title">Services</h2>
      <div className="container">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
