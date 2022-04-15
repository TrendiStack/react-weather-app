import React from "react";
import { useState } from "react";
import Form from "../Form/Form";

import styles from "./SearchButton.module.css";

const SearchButton = () => {
  const [open, setOpen] = useState(false);
  const openSearch = () => setOpen(!open);
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
    </>
  );
};

export default SearchButton;
