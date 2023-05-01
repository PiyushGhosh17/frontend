import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  // ---------------------  states --------------------------------
  const [formData, setformData] = useState({
    username: "",
    password: "",
    city: "",
    web_server: "",
    role: "",
    mail: false,
    payroll: false,
    selfService: false,
  });

  // ---------------------- Error ------------------------------------
  const [error, setError] = useState({
    userErr: false,
    passErr: false,
  });

  // ---------------------------- validation ---------------------------

  const user = /[A-Za-z]{1,20}/;
  const char8 = /[A-Za-z]{1,20}/;
  const digit = /[0-9]{1,20}/;

  const validateUser = (username) => {
    if (!user.test(username)) {
      if (!formData.username) {
        setError((error) => ({ ...error, userErr: true }));
        return false;
      }
    }
    setError((error) => ({ ...error, userErr: false }));
    return true;
  };

  const validatePass = (pass) => {
    if (
      !(char8.test(pass) && digit.test(pass)) ||
      formData.password.length < 8
    ) {
      setError((error) => ({ ...error, passErr: true }));
      return false;
    }

    setError((error) => ({ ...error, passErr: false }));
    return true;
  };

  // --------------------- handleChange ---------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformData((formData) => ({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ---------------------- validation ---------------------------
  const validate = () => {
    if (validateUser(formData.username) && validatePass(formData.password)) {
      return true;
    } else {
      return false;
    }

    // setError((error) => ({ ...error, userErr: false, passErr: false }));
  };

  // ----------------------- handleSubmit ------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(
        "Login successfull.Your credencials: " +
          formData.username +
          " ," +
          formData.password +
          "," +
          formData.city +
          "," +
          formData.web_server +
          "," +
          formData.role +
          " ."
        // (formData.mail ? "Mail" : " ,") +
        // (formData.payroll ? "Payroll" : " ,") +
        // +(formData.selfService ? "selfService" : " .")
      );
    }
  };

  console.log({ error });

  return (
    <>
      <h2>FORM</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Username:</label>
        <div>
          <input
            id="username"
            type="text"
            name="username"
            onChange={handleChange}
          />
          {error.userErr ? (
            <p id="errMsg">Please Enter username</p>
          ) : (
            <p id="errMsg"></p>
          )}
        </div>

        <label htmlFor="password">Password:</label>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          {!formData.password && error.passErr ? (
            <p id="errMsg">Please Enter password</p>
          ) : error.passErr ? (
            <p id="errMsg">Passowrd must be 8 character and 1 digit.</p>
          ) : (
            <p id="errMsg"></p>
          )}
        </div>

        <label htmlFor="city">City of Employement:</label>
        <input
          id="city"
          className="city"
          name="city"
          type="text"
          onChange={handleChange}
        />

        <label htmlFor="web_server">Web server:</label>
        <div>
          <select id="web_server" name="web_server" onChange={handleChange}>
            <option value="">Choose a server </option>
            <option value="Apache">Apache</option>
            <option value="Nginx">Nginx</option>
            <option value="Node.js">Node.js</option>
            <option value="IIS Web Server">IIS Web Server</option>
          </select>
        </div>

        <label className="div"> Please specify your role: </label>
        <div className="div">
          <input
            type="radio"
            id="admin"
            name="role"
            value="Admin"
            onChange={handleChange}
          />
          <label htmlFor="admin"> Admin </label>
          <br />
          <input
            type="radio"
            id="eng"
            name="role"
            value="engineer"
            onChange={handleChange}
          />
          <label htmlFor="eng"> Engineer </label>
          <br />
          <input
            type="radio"
            id="Mang"
            name="role"
            value="manager"
            onChange={handleChange}
          />
          <label htmlFor="Mang"> Manager </label>
          <br />
          <input type="radio" id="guest" name="Guest" onChange={handleChange} />
          <label htmlFor="guest"> Guest </label>
          <br />
        </div>

        <label className="div"> Sign-on to the following: </label>
        <div className="div">
          <input
            id="mail"
            type="checkbox"
            name="mail"
            onChange={handleChange}
          />
          <label htmlFor="mail"> Mail </label>
          <br />
          <input
            id="payroll"
            type="checkbox"
            name="payroll"
            onClick={handleChange}
          />
          <label htmlFor="payroll"> Payroll </label>
          <br />
          <input
            id="selfservice"
            type="checkbox"
            name="selfservice"
            onClick={handleChange}
          />
          <label htmlFor="selfservice"> self-service </label>
        </div>

        <div className="btn">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </>
  );
}

export default App;
