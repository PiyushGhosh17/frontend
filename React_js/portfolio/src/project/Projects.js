import React from "react";
import Navbar from "../navbar/Navbar";
import Card from "../card/Card";
import "./Projects.css";
import amazone from "./assets/amazone.png";
import crypto from "./assets/crypto.jpeg";
import analysis from "./assets/analysis.png";

function Projects() {
  return (
    <>
      <Navbar />
      <div className="project">Projects</div>
      <div className="cards">
        <Card image={amazone} project="Amazone Clone" tech={["Reactjs"]} />
        <Card
          image={crypto}
          project="Crypto Tracker"
          tech={["Reactjs", "RapidApi"]}
        />
        <Card
          image={analysis}
          project="Olympic Data Analysis"
          tech={["Python", "Streamlit"]}
        />
      </div>
    </>
  );
}

export default Projects;
