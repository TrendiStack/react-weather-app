import React, { useState } from "react";
import Home from "../../Home/Home";
import Form from "../Form/Form";
import axios from "axios";

import styles from "./SearchButton.module.css";

const SearchButton = () => {
  const [open, setOpen] = useState(false);
  const openSearch = () => setOpen(!open);
  const [city, setCity] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {!open && (
        <div className={styles.searchButtonContainer}>
          <button onClick={openSearch} className={styles.searchButton}>
            Search for places
          </button>
          <i className={`fas fa-location-crosshairs fa-1x ${styles.icon}`}></i>
        </div>
      )}
      {open && <Form close={openSearch} />}
      <Home />
    </>
  );
};

export default SearchButton;
