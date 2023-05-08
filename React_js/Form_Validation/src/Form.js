import React, { useState } from "react";
import "./Form.css";
import Input from "./Input";
import Select from "./Select";
import RadioList from "./RadioList";
import CheckboxList from "./CheckboxList";

function Form() {
  // ------------------------ FormData-State ------------------
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
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  //   ------------------------ handleChange ----------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformData((formData) => ({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ---------------------- validation ---------------------------

  const validate = () => {
    const errors = {};

    const errorMessage = {
      username: `User Name is required`,
      password: `Password is required`,
    };

    const regex = {
      username: /[A-Za-z]{1,20}/,
      password: /[A-Za-z]{1,20}[0-9]{1,20}/,
    };

    const regexError = {
      username: `User Name is required`,
      password: `Passoword must be 8 character and 1 digit`,
    };

    Object.keys(regex).forEach((key) => {
      if (formData[key] && formData[key] != "") {
        if (!regex[key].test(formData[key])) {
          errors[key] = regexError[key];
        }
      } else {
        errors[key] = errorMessage[key];
      }
    });

    return errors;
  };
  //  ------------------------------- handleSubmit --------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setError(errors);

    if (Object.keys(errors)?.length === 0) {
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
      );
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">Username:</label>
      <div className="input">
        <Input
          id="username"
          type="text"
          name="username"
          onChange={handleChange}
        />
        {error.username ? (
          <p id="errMsg">{error.username}</p>
        ) : (
          <p id="errMsg"></p>
        )}
      </div>

      <label htmlFor="password">Password:</label>
      <div className="input">
        <Input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        {error.password ? (
          <p id="errMsg">{error.password}</p>
        ) : (
          <p id="errMsg" style={{ visibility: "hidden", margin: 0 }}>
            no error
          </p>
        )}
      </div>

      <label htmlFor="city">City of Employement:</label>
      <div className="input">
        <Input
          id="city"
          className="city"
          name="city"
          type="text"
          onChange={handleChange}
        />
      </div>

      <label htmlFor="web_server">Web server:</label>

      <div>
        <Select
          id="web_server"
          name="web_server"
          onChange={handleChange}
        ></Select>
      </div>

      <label> Please specify your role: </label>
      <div className="div">
        <RadioList
          type="radio"
          id="admin"
          name="role"
          value="Admin"
          onChange={handleChange}
        />
        <label htmlFor="admin"> Admin </label>
        <br />
        <RadioList
          type="radio"
          id="engineer"
          name="role"
          value="engineer"
          onChange={handleChange}
        />
        <label htmlFor="engineer"> Engineer </label>
        <br />
        <RadioList
          type="radio"
          id="Mang"
          name="role"
          value="manager"
          onChange={handleChange}
        />
        <label htmlFor="Mang"> Manager </label>
        <br />
        <RadioList
          type="radio"
          id="guest"
          name="Guest"
          onChange={handleChange}
        />
        <label htmlFor="guest"> Guest </label>
        <br />
      </div>

      <label className="div"> Sign-on to the following: </label>
      <div className="div">
        <CheckboxList
          id="mail"
          type="checkbox"
          name="mail"
          onChange={handleChange}
        />
        <label htmlFor="mail"> Mail </label>
        <br />
        <CheckboxList
          id="payroll"
          type="checkbox"
          name="payroll"
          onClick={handleChange}
        />
        <label htmlFor="payroll"> Payroll </label>
        <br />
        <CheckboxList
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
  );
}

export default Form;
