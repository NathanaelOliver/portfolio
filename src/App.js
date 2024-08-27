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
          <ProjectTile
            key={index}
            index={index}
            project={project}
            expandedIndex={expandedIndex}
            handleTileClick={handleTileClick}
          />
        ))}
      </section>
    </div>
  );
}

function ProjectTile({ index, project, expandedIndex, handleTileClick }) {
  const isExpanded = expandedIndex === index;

  return (
    <div
      className={`ProjectTile ${isExpanded ? "expanded" : ""}`}
      onClick={() => handleTileClick(index)}
    >
      <div className={`ProjectTileLeftColumn`}>
        <div className="ProjectPicture">
          <img src={project.picture} alt={project.caption} />
        </div>
        {isExpanded && <p className="ProjectCaption">{project.caption}</p>}
      </div>
      <div className={`ProjectTileRightColumn`}>
        <h2 className="ProjectTitle">{project.title}</h2>
        <div className="SingleColumn">
          <div className="ProjectPicture">
            <img src={project.picture} alt={project.caption} />
          </div>
          {isExpanded && <p className="ProjectCaption">{project.caption}</p>}
        </div>
        <p className={`ProjectDescription ${isExpanded ? "expanded" : ""}`}>
          {project.description}
        </p>
        {isExpanded && (
          <a href={project.link} className="ProjectLink">
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
