import React from "react";
import styles from "./SearchResults.module.css";

function SearchResults( { searchData } ) {
    return(
        <>
        <p>{searchData}</p>
        </>
    );
};

export default SearchResults;
