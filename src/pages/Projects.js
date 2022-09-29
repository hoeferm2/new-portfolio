import React from "react";
import WhacAMole from "../components/projects/Whac-a-mole";
import Liftr from "../components/projects/Liftr";
import Dog4u from "../components/projects/Dog4u";
import ECommerce from "../components/projects/E-commerce";
import Typing from "../components/projects/Typing";
import CommandLine from "../components/projects/CommandLine";
import "../styles/Projects.css"


export default function ImgMediaCard() {
    return (
      <div className="projects">
      <WhacAMole />
      <Liftr />
      <Dog4u />
      <ECommerce />
      <Typing />
      <CommandLine/>
    

      </div>
      
    );
  }