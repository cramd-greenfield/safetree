import React from "react";

const Plant = ({plant}) => {
  return (
    <div>
      <h4>{plant.species}</h4>
      <p><em> {plant.scientificName} </em></p>
      <img src={plant.image} width="150" height="150"/>
    </div>
  );
};

export default Plant;
