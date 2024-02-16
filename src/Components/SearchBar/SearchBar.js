import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ handleSearch }) {
  const [data, setData] = useState();

  function sendData(e) {
    e.preventDefault();
    handleSearch(data);
  }

  return (
    <>
      <form onSubmit={sendData}>
        <label id="search">Search</label>
        <div className={styles.container}>
        <input
          type="text"
          id="search"
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></input>
        <button>Search</button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
