import React, { useState } from "react";

const initialState = [
  { id: 1, name: "Alice", country: "Austria" },
  { id: 2, name: "Bob", country: "Belgium" },
];

function AddandRemove() {
  const [data, setData] = useState(initialState);
  const [inpData, setInput] = useState({
    name: "",
    country: "",
  });
  const [updateData, setupdateData] = useState({
    oldName: "",
    newName: "",
  });

  const handleDelete = (id) => {
    setData((curr) => {
      return curr.filter((obj) => {
        return obj.id !== id;
      });
    });
  };

  const handleAdd = (newUser) => {
    // !isExistingUser(newUser) && setData(data => [...data, newUser])
    setData((curr) => {
      const pos = curr.findIndex((obj) => {
        return obj.name === newUser.name;
      });
      if (pos > -1) {
        alert("user already exist");
      }
      return pos === -1
        ? [
            ...curr,
            { id: newUser.id, name: newUser.name, country: newUser.country },
          ]
        : curr;
    });
  };

  const handleUpdate = (name1, name2) => {
    setData((curr) => {
      return curr.map((obj) => {
        if (obj.name === name1) {
          return { ...obj, name: name2 };
        } else {
          return obj;
        }
      });
    });
  };

  console.log(data);
  console.log(inpData);

  return (
    <>
      <div>
        <input
          type="text"
          className="addInp"
          placeholder="Enter name"
          onChange={(e) =>
            setInput((data) => ({ ...data, name: e.target.value }))
          }
        />
        <input
          type="text"
          className="addInp"
          placeholder="Enter country"
          onChange={(e) =>
            setInput((data) => ({ ...data, country: e.target.value }))
          }
        />
        <button
          onClick={() =>
            handleAdd({
              id: Math.random(),
              name: inpData.name,
              country: inpData.country,
            })
          }
        >
          Add
        </button>
      </div>
      &nbsp;
      <div>
        <input
          type="text"
          placeholder="existing name"
          onChange={(e) =>
            setupdateData((data) => ({ ...data, oldName: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="New name"
          onChange={(e) =>
            setupdateData((data) => ({ ...data, newName: e.target.value }))
          }
        />
        <button
          onClick={() => handleUpdate(updateData.oldName, updateData.newName)}
        >
          Update
        </button>
      </div>
      <div>&nbsp;</div>
      <div>
        {data.map((ele) => {
          return (
            <div>
              {ele.name}
              <button onClick={() => handleDelete(ele.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default AddandRemove;
