import React from "react";
import "./Card.css";

function Card(props) {
  const { image, project, tech } = props;
  return (
    <>
      <div className="card">
        <img src={image} alt="Avatar" style={{ width: "100%" }} />
        <div>
          <h4>
            <b>{project}:</b>
          </h4>
          <span>Tech used:</span>
          {tech.map((value) => {
            return (
              <p>
                {value}
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card;
