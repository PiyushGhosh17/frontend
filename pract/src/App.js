import React from "react";
import { useState } from "react";
import "./App.css";
import API from "./Api";
import AddandRemove from "./AddandRemove";

const initialList = [
  {
    id: "a",
    task: "Learn React",
    isComplete: false,
  },
  {
    id: "b",
    task: "Learn Nextjs",
    isComplete: true,
  },
];

function App() {
  const [list, setList] = useState(initialList);

  const handleComplete = (id) => {
    setList((list) => {
      return list.map((item) => {
        if (item.id === id) return { ...item, isComplete: !item.isComplete };
        return item;
      });
    });
  };

  /*
  useEffect(() => {
    const timer = setInterval(() => console.log("mounted"), 2000);
    const isSamerender = true;
    fetch().then((img) => isSamrender && setImage());

    //cleanup
    return () => {
      isSamerender = false;
    };
  }, [id]);
  */

  return (
    <>
      {/* <nav style={{ display: "flex" }}>
        <p style={{ marginRight: "5px" }}>First</p>
        <p>Secound</p>
      </nav> */}
      <hr></hr>
      <div className="App">
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <span
                style={{
                  textDecoration: item.isComplete ? "line-through" : "none",
                }}
              >
                {item.task}
              </span>
              <button onClick={() => handleComplete(item.id)}>
                {item.isComplete ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ul>
        <hr />
        <AddandRemove />
        <hr />
        <API />
      </div>
    </>
  );
}

export default App;
