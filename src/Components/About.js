import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function About() {
  return (
    <div className="home">
      <div>
        <Link to="/stories/spring-summer">
          <img alt="Spring/Summer Collection"></img>
        </Link>
        <h3> Our Spring/Summer Collection</h3>
      </div>

      <div>
        <Link to="/stories/fashion-week">
          <img alt="Fashion Week Diaries"></img>
        </Link>
        <h3>Fashion Week Diaries: Inside our Studio</h3>
      </div>
      <div>
        <Link to="/stories/sustainability">
          <img alt="Sustainability"></img>
        </Link>
        <h3>Sustainability</h3>
      </div>
      <div>
        <Link to="/stories/collaboration">
          {" "}
          <img alt="Concept x Brand Collaboration"></img>
        </Link>
        <h3>Concept x Brand: Bringing together two worlds</h3>
      </div>
    </div>
  );
}

export default About;
