import React from "react";

function Input(props) {
  const { id, placeholder, type, name, className, onChange } = props;

  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        className={className}
        onChange={onChange}
      />
      <div></div>
    </>
  );
}

export default Input;
