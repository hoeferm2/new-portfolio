import React from "react";
import { GitHub } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="statement">
        <h2> Matthew Hoefer</h2>
        <div className="prompt">
          <p>A web developer with a passion for learning and creating.</p>
        <a href="https://github.com/hoeferm2"><GitHub/></a>
        <a href="https://twitter.com/gopherlopher"><Twitter/></a>
        <a href="mailto:ningboninja@gmail.com"><Email/></a>
        <a href="https://www.linkedin.com/in/matthew-hoefer-28160997/">
          <LinkedIn/>
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM, BootStrap, MaterialUI,
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL,
              MySQL, MongoDB, SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, HTML, CSS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;