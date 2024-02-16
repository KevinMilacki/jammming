import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Header from "./Components/Header/Header";
import SearchResults from "./Components/SearchResults/SearchResults";

function App() {
  const [searchData, setSearchData] = useState("Default");

  function handleSearch(childData) {
    setSearchData(childData);
  };

  return (
    <>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <SearchResults searchData={searchData} />
    </>
  );
}

export default App;
