import React from "react";
import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import styles from "./SearchBar.module.css";
import axios from "axios";

function SearchBar({ token }) {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [searchKey, setSearchKey] = useState("");

  async function sendData(e) {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setData(data.artists.items);
   
  }
  
  function handleChange(childData) {
    setId(childData);
    console.log(id);
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
              e.preventDefault();
              setSearchKey(e.target.value);
            }}
          ></input>
          <button>Search</button>
        </div>
      </form>
      {/* {console.log(data)} */}
      {data ? <SearchResults data={data} handleChange={handleChange} /> : null}
    </>
  );
}

export default SearchBar;
