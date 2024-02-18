import React from "react";
import { useState, useEffect } from "react";
import styles from "./SearchResults.module.css";

function SearchResults({ data, handleChange }) {
  const [sdata, setsData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    setsData(data);
    // console.log(data);
  }, [data]);

  function handleClick(event, key) {
    // console.log(event.target);
    // console.log(key);
    handleChange(key);
  }

  function renderList() {
    return data.map((data) => (
      <div
        className={styles.resultsCard}
        key={data.id}
        onClick={(event) => handleClick(event, data.id)}
      >
        {data.images.length ? (
          <img src={data.images[0].url} alt="" />
        ) : (
          <div>
            <img height="100px"></img>
          </div>
        )}
        <div>
          <h3>{data.name}</h3>

          <p>{data.genres[0]}</p>
        </div>
      </div>
    ));
  }

  return <div className={styles.resultsContainer}> {renderList()}</div>;
}

export default SearchResults;
