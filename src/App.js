// src/App.js
import React, { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Project 1",
    picture: "https://via.placeholder.com/150",
    caption: "Caption 1",
    link: "https://example.com",
    description:
      "This is a description for Project 1. It should be long enough to test the truncation. What if this text is obscenely long. Will it go around to the next line and cycle around. I wonder what the word is called for htat. Its called wrapping. I wonder if the text is obscenely long if it will wrap and i wonder if the tile will grow in height to mathc the size of the text. i willl use this as a test to find out.",
  },
  {
    title: "Project 2",
    picture: "https://via.placeholder.com/150",
    caption: "Caption 2",
    link: "https://example.com",
    description: "This is a description for Project 2.",
  },
  // Add more projects as needed
];

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleTileClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="App">
      <header className="Header">
        <h1 className="Title">Your Title Here</h1>
        <p className="Description">
          This is a description paragraph that provides more details about the
          title.
        </p>
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
            <div className="ProjectPicture">
              <img src={project.picture} alt={project.caption} />
            </div>
            <div className="ProjectContent">
              <h2 className="ProjectTitle">{project.title}</h2>
              <p className="ProjectDescription">{project.description}</p>
              {expandedIndex === index && (
                <>
                  <p className="ProjectCaption">{project.caption}</p>
                  <a href={project.link} className="ProjectLink">
                    Learn More
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
