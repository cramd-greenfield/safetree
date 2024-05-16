import React, { useState } from 'react';
import axios from 'axios';
require("dotenv").config();
// const { ANIMALS_API_KEY } = process.env;
console.log(process.env)


const WildLife = () => {


  const [list, updateList] = useState([])
  const [emptyInput, updatedInput] = useState('')
  
  
  const loadList = () => {
    
    axios.get('/wildlife')
    .then((response) => {
      // console.log('Response:', response.data);
      updateList(response.data);
    })
    .catch((error) => {
      console.error('Error locating animal list:', error);
    });
  }

  const searchAnimal = () => {
    axios.get(`https://api.api-ninjas.com/v1/animals?name=${emptyInput}`, {

    })
    .then((response) => {
      console.log('NEW RESPONSE:', response);
      updateList(response.data);
    })
    .catch((error) => {
      console.error('Error locating animal list:', error);
    });
  }


  const updatedInputTrigger = (event) => {
    console.log(event.target.value);
    //updatedInput is the update function to the input string
    updatedInput(event.target.value)

    updatedInput(event.target.value)
  }

  return (
    <div>
      <div>
        {/* input form that holds the users text */}
        <input type='text' placeholder='Search animal here' value={emptyInput} onChange={updatedInputTrigger}></input>
        {/* onClick event, once the search button is clicked, it invokes the axios function */}
        <button onClick={searchAnimal}>Search</button>
      </div>
      <div>
        <h1>Animal List</h1>
      </div>
    </div>
  )
}

export default WildLife;