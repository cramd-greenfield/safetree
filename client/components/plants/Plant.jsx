import React from "react";
import axios from "axios";

const Plant = ({plant}) => {
  // console.log('plant: ', plant);

  const updatePlant = () => {
    // make axios patch req
    axios.patch(`/plants/${plant.id}`, {
      plant: {
        isObserved: !plant.isObserved
      }
    })
  };

  const deletePlant = () => {
    axios.delete(`/plants/${plant.id}`)
  }

  return (
    <div>
      <button onClick={updatePlant}>🔎</button>
      <button onClick={deletePlant}>❌</button>
      <h4>{plant.species}</h4>
      <p><em> {plant.scientificName} </em></p>
      <img src={plant.image} width="150" height="150"/>
    </div>
  );
};

export default Plant;
