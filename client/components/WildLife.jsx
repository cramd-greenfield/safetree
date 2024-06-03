import React, { useState, useEffect } from "react";
import axios from "axios";
// require("dotenv").config();
// const { ANIMALS_API_KEY } = process.env;
// console.log(process.env)

const WildLife = () => {
  const [list, updateList] = useState([]);
  const [emptyInput, updatedInput] = useState("");

  useEffect(() => {
    console.log("Updated list:", list);
  }, [list]);

  const loadList = () => {
    axios
      .get("/wildlife")
      .then((response) => {
        console.log("Frontend Axios Response:", response.data);
        updateList(response.data);
      })
      .catch((error) => {
        console.error("Error locating animal list:", error);
      });
  };
  //send POST request to backend with empty input in the body

  const searchAnimal = () => {
    axios
      .post(`/wildLifeSearch`, {
        searchInput: emptyInput,
      })
      .then((response) => {
        console.log('NEW RESPONSE:', response);

        
        //console.log('Formatted response', animals);
        updateList(response.data);

        // console.log(list);
      })
      .catch((error) => {
        console.error("Error locating animal list:", error);
      });
  };

  const updatedInputTrigger = (event) => {
    // console.log(event.target.value);
    //updatedInput is the update function to the input string
    updatedInput(event.target.value);

    
  };

  const deleteAnimal = (species) => {
    axios
      .delete(`/wildlife`, {species})
      .then((response) => {
        console.log("Animal deleted:", response.data);
        //return the lost of every animal but the one deleted
        updateList(list.filter((animal) => animal.species !== species));
      })
      .catch((error) => {
        console.error("Error deleting animal:", error);
      });
  };

  return (
    <div>
      <div>
        {/* input form that holds the users text */}
        <input
          type="text"
          placeholder="Search animal here"
          value={emptyInput}
          onChange={updatedInputTrigger}
        ></input>
        {/* onClick event, once the search button is clicked, it invokes the axios function */}
        <button onClick={searchAnimal}>Search</button>
      </div>
      <div>
        <h1>
          <u>Animal List</u>
        </h1>
        {list.map((animal, index) => (
          <div key={index}>
            <h3>{animal.species}</h3>
            <p>{animal.isPredator ? "Predator" : "Not a predator"}</p>
            <p>{animal.location}</p>
            <button onClick={() => deleteAnimal(animal.species)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WildLife;
