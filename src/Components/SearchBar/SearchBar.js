import React from "react";
import { useState, useRef } from "react";
import SearchResults from "../SearchResults/SearchResults";
import styles from "./SearchBar.module.css";
import axios from "axios";

function SearchBar({ token }) {
  const [artist, setArtist] = useState([]);
  const [id, setId] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [albums, setAlbums] = useState ([]);
  const inputRef = useRef(null);

  async function sendData(e) {
    e.preventDefault();
    const artists = inputRef.current.value;
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { 
        q: artists ,
        type: "artist",
        limit: 5,
      },
    });

    setArtist(data.artists.items);
   
  }
  
  // function handleChange(childData) {
  //   setId(childData);
    
  //    getAlbums(id);
  // }
 
  async function getAlbums(e) {
    // e.preventDefault();
    const URL = `https://api.spotify.com/v1/artists/${id}/albums`
    
    const { data } = await axios.get(URL,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      parms: {
        limit: 10,
      },
      })
    //   console.log(id);
    //  console.log(data.items);
    setAlbums(data.items);  
  }

  function handleClick (){
    inputRef.current.focus()
    // console.log(inputRef)
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
              // setSearchKey(e.target.value);
            }}
            ref={inputRef} 
          ></input> 
          <button onClick={handleClick} className={styles.searchButton}>Search</button>
        </div>
      </form>
      {/* {console.log(data)} */}
      {artist ? <SearchResults artist={artist} albums={albums} getAlbums={getAlbums} /> : null}
    </>
  );
}

export default SearchBar;
