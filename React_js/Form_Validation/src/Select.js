import React from "react";

function Select(props) {
  const { id, name, onChange } = props;

  return (
    <select id={id} name={name} onChange={onChange}>
      <option value="">Choose a server </option>
      <option value="Apache">Apache</option>
      <option value="Nginx">Nginx</option>
      <option value="Node.js">Node.js</option>
      <option value="IIS Web Server">IIS Web Server</option>
    </select>
  );
}

export default Select;
