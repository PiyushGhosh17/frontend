import React from "react";
import "./Error.css";
import Navbar from "../navbar/Navbar";

function Error() {
  return (
    <>
      <Navbar />
      <div className="error">Page not Found</div>
    </>
  );
}

export default Error;
