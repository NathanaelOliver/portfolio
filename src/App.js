// src/App.js
import React, { useState } from "react";
import "./App.css";
import { projects, title, description } from "./projects.js";

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleTileClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="App">
      <header className="Header">
        <h1 className="Title">{title}</h1>
        <p className="Description">{description}</p>
      </header>
      <section className="Projects">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`ProjectTile ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => handleTileClick(index)}
          >
            <div
              className={`ProjectTileLeftColumn ${
                expandedIndex === index ? "expanded" : ""
              }`}
            >
              <div className="ProjectPicture">
                <img src={project.picture} alt={project.caption} />
              </div>
              {expandedIndex === index && (
                <p className="ProjectCaption">{project.caption}</p>
              )}
            </div>
            <div
              className={`ProjectTileRightColumn ${
                expandedIndex === index ? "expanded" : ""
              }`}
            >
              <h2 className="ProjectTitle">{project.title}</h2>
              <p
                className={`ProjectDescription ${
                  expandedIndex === index ? "expanded" : ""
                }`}
              >
                {project.description}
              </p>
              {expandedIndex === index && (
                <a href={project.link} className="ProjectLink">
                  Learn More
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
