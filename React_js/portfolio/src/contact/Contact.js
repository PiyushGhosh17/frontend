import React from "react";
import "./Contact.css";
import Navbar from "../navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <h2 className="contactUs">Contact Us</h2>
      <div className="container">
        <form>
          <label for="name">NAME :</label>
          <input id="name" className="name-input" type="text" />

          <label for="email">Email :</label>
          <input id="email" className="email-input" type="email" />

          <label for="number">Ph number :</label>
          <input id="number" className="number-input" type="number" />

          <label for="message">Message :</label>
          <textarea id="message" rows="4" cols="20"></textarea>

          <input class="input" type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}

export default Contact;
