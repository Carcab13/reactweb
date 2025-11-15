import React from "react";
import "./Projects.css";

const Services = () => {
  return (
    <section id="projects" className="services-section">
      <h2 className="tittle">Projects</h2>
      <div className="container">
        <div class="card">
          <div class="card-top">
            <span class="emoji">🌿</span>
          </div>
          <div class="card-bottom">
            <h2>Nature Escape</h2>
            <p>
              Relax and recharge with peaceful moments surrounded by nature.
            </p>
            <div class="tags">
              <span class="tag">Wellness</span>
              <span class="tag">Outdoors</span>
              <span class="tag">Relaxation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
