import React, { useState } from "react";
import "./Api.css";
import memeData from "./memeData";

function Api() {
  const [data, setData] = useState("");

  const getMeme = () => {
    const memeArray = memeData.data.memes;
    const random = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[random].url;
    setData(url);
  };

  return (
    <>
      <div className="form">
        <input type="text" className="formInp" />
        <input type="text" className="formInp" />
        <button className="formInp" onClick={getMeme}>
          Generate Image
        </button>
        <div style={{ width: "100%" }}>
          <img
            alt="meme generated"
            src={data ? data : "https://i.imgflip.com/1bhw.jpg"}
          />
        </div>
      </div>
    </>
  );
}

export default Api;
