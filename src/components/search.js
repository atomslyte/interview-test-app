import React, { useState } from "react";
// import axios from "axios";
import "../styles/search.scss";
// import { Data } from "../context/dataProvider.context";

const Search = () => {
  // const { setData } = useContext(Data);
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
    // fetchData();
    console.log(query);
  };

  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `http://www.omdbapi.com/?t=${query}&apikey=${process.env.REACT_APP_API_KEY}`
  //     );
  //     console.log("data");
  //     // setData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect = (() => fetchData(), []);

  return (
    <div className="search">
      <div className="container">
        <label htmlFor="search" className="search__label">
          Search
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="search__input"
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
