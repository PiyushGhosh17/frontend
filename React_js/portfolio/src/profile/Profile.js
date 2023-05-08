import React from "react";
import Navbar from "../navbar/Navbar";
import "./Profile.css";
import logo from "./assets/img1.png";

function Profile() {
  return (
    <>
      <Navbar />
      <div class="introduction">
        <div class="img">
          <img
            src={logo}
            alt="img"
            style={{ border: "1px solid white", borderRadius: "50px" }}
            width="200"
            height="200"
          />
          <h2>Hi, I am Piyush</h2>
        </div>

        <div class="details">
          <p>Hello everybody,I'm React Developer Intern at Axelor.</p>
        </div>
        <h2>SKILLS</h2>
        <div class="skills">
          <label for="react">React.js</label>
          <progress class="progress" id="react" value="25" max="50"></progress>

          <label for="java">Java:</label>
          <progress class="progress" id="java" value="33" max="50"></progress>

          <label for="python">Python:</label>
          <progress
            class="progress"
            for="python"
            value="30"
            max="50"
          ></progress>
        </div>
      </div>
    </>
  );
}

export default Profile;
