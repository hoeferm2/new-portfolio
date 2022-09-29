import React from "react";

import "../styles/Home.css";

function Blog() {
  return (
    <div className="home">
      <div className="statement">
        <h2> Hello, my name is Matthew Hoefer</h2>
        <div className="prompt">
          <p>I am a web developer with a passion for learning and creating.</p>
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

export default Blog;