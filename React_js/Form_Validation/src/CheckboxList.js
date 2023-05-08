import React from "react";

function CheckboxList(props) {
  const { id, type, name, value, onChange } = props;

  return (
    <input type={type} id={id} name={name} value={value} onChange={onChange} />
  );
}

export default CheckboxList;
