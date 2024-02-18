import React from "react";
import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Header from "./Components/Header/Header";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [token, setToken] = useState("");

  function handleSearch(childData) {
    setSearchData(childData);
    // setSearchData(Array.from(searchData));
  }

  // console.log(searchData);

  function handleToken(childData) {
    setToken(childData);
  }

  return (
    <>
      <Header handleToken={handleToken} />
      <SearchBar handleSearch={handleSearch} token={token} />
      {/* {searchData ? console.log(`this is the app ${searchData}`) : null} */}
    </>
  );
}

export default App;
