import React from "react";
import PlantSearch from "./PlantSearch.jsx";
import PlantList from "./PlantList.jsx";
import axios from "axios";


const Plants = () => {
  const loadPage = () => {
    axios.get('/plants')
      .then(data => console.log(data))
      .catch(err => console.error(err))
  };

  return (
    <div>
      {/* {loadPage()} */}
      <h1>Plants</h1>
      <PlantList />
      <PlantSearch />
    </div>
  );
};

export default Plants;
