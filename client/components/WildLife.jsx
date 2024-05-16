import React, { useState } from 'react';
import axios from 'axios';


const WildLife = () => {


  const [list, updateList] = useState([])

  const [emptyInput, updatedInput] = useState('')

  const loadList = () => {
    
    axios.get('/wildlife')
    .then((response) => {
      console.log('Response:', response.data);
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
  }

  return (
    <div>
      <div>
        {/* input form that holds the users text */}
        <input type='text' placeholder='Search animal here' value={emptyInput} onChange={updatedInputTrigger}></input>
        {/* onClick event, once the search button is clicked, it invokes the axios function */}
        <button onClick={loadList}>Search</button>
      </div>
      <div>
        <h1>Animal List</h1>
      </div>
    </div>
  )
}

export default WildLife;