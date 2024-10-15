import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about__intro">
        <span>Front-end project with React</span>
      </div>
      <div className="about__container">
        <span>
          "Freedom is the freedom to say that two plus two make four. If that is
          granted, all else follows."
        </span>
        <span>- George Orwell, 1984</span>
      </div>
    </div>
  );
}

export default About;
