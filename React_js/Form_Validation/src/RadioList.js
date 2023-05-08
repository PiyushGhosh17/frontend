import React from "react";

function RadioList(props) {
  const { type, id, name, value, onChange } = props;
  return (
    <input type={type} id={id} name={name} value={value} onChange={onChange} />
  );
}

export default RadioList;
