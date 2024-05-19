import React from "react";

const Plant = ({plant}) => {
  console.log('plant: ', plant);
  return (
    <div>
      <h4>{plant.species || plant.common_name}</h4>
      <p><em> {plant.scientificName || plant.scientific_name} </em></p>
      <img src={plant.image || plant.image_url} width="150" height="150"/>
    </div>
  );
};

export default Plant;
