import React from "react";
import { useState } from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  };
  return (
    <div>
      <i
        onClick={props.close}
        className={`fa-solid fa-xmark fa-2x ${styles.icon}`}
      ></i>
      <div className={styles.searchContainer}>
        <form className={styles.searchForm}>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Search Location"
            value={inputText}
          />
          <button onClick={addItem} className={styles.formButton}>
            Search
          </button>
        </form>
        <div>
          {items.map((location) => (
            <li className={styles.prevLocation}>
              <span className={styles.locText}>{location}</span>
              <i className={`fa-solid fa-angle-right ${styles.arrow}`}></i>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
