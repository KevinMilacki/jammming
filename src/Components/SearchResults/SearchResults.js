import React from "react";
import { useState, useEffect } from "react";
import styles from "./SearchResults.module.css";

function SearchResults({ artist, getAlbums, albums }) {
  const [sdata, setsData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    setsData(artist);
    // console.log("rerender");
  }, [artist]);

  function handleClick(event, key) {
    getAlbums(key);
  }

  function renderList() { 
    return artist.map((data) => (
      <div
        className={styles.artistCard}
        key={data.id}
        onClick={(event) => handleClick(event, data.id)}
      >
        {data.images.length ? (
          <img src={data.images[0].url} alt="" />
        ) : (
          <div>
            <img height="100px" alt="No Image"></img>
          </div>
        )}
        <div>
          <h3>{data.name}</h3>
          {/* {console.log("re-render")} */}
          <p>{data.genres[0]}</p>
        </div>
      </div>
     
    ));
  }

  function renderAlbulm() {
    return albums.map((data) => ( 
      <div key={data.id} className={styles.albumsCard}>  
        <img src={data.images[2].url} alt={data.name}></img>
        <p>{data.name}</p> 
      </div> 
    ))
  };

  return (
    <>
   <div className={styles.displayContainer} >
     <div className={styles.artistContainer}>{renderList()}</div>
     {console.log(albums)}
       <div className={styles.albumsContainer}>{(!albums ? <p>Loading..</p> : renderAlbulm() )} </div>
    </div> 
    </>
   )

}


export default SearchResults;
