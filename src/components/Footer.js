import React from "react";
import { GitHub, Instagram, Twitter, Email, LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://github.com/hoeferm2"><GitHub/></a>
        <a href="https://www.instagram.com/hoefadoef">
          <Instagram/>
          </a>
        <a href="https://twitter.com/gopherlopher">
          <Twitter/>
          </a>
          <a href="https://www.linkedin.com/in/matthew-hoefer-28160997/">
          <LinkedIn/>
          </a>
          <a href="mailto:ningboninja@gmail.com"><Email/></a>
      </div>
      <p> &copy; 2022 Matthew Hoefer</p>
    </div>
  );
}

export default Footer;