import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItem] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function addItem() {
    setListItem((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="itemInput"
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item) => (
            <ListItem text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
