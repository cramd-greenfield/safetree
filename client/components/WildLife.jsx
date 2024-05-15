import React, { useState } from 'react';



const WildLife = () => {

  /**
   * So I know we will have a array that holds our data, and our input box is what the user will type into
   * we need those two to be updated within the state
   * 
   * for our Axios get, we will just set the search to the entire external api Allyn talked about,
   * 
   * 
   * in our get request
   */

  //[IMPORTANT]
  //WHEN USING useState, the second variable is always a function to update the first variable
  //we will have a array that will get updated in the state
  const [list, updateList] = useState([])
  //also our input value will get updated in the state too
  //set it to a empty string, because the input box will be empty at first
  const [emptyInput, updatedInput] = useState('')

  /**
   * const Animal = sequelize.define(
  'Animal',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    species: DataTypes.STRING,
    isPredator: DataTypes.BOOLEAN,
    location: DataTypes.STRING
  }
)
   */
  /**
   * [QUESTIONS FOR TEAM]
   * I'm thinking about how to get the three specific property Allyn said we want for our schema table,
   * which is the species, isPredator, and location. These will result after searching it's name
   */

  /**
   * [What's NEXT!!!!]
   * Set up a function, that makes the data from the input, our updatedInput() argument in the useState
   */

  
  /**
   * after speaking to Mike we want to create a button that triggers loadList
   * 
   * use console logs to observe the response data to make sure it's what we desire
   */
//set up a method for our axios
  const loadList = () => {
    console.log('hello')
    axios.get(`https://api.api-ninjas.com/v1/animals?name=${updatedInput}`, {
      headers: {
        'x-api-key': 'tc3I3hxkNGZ68GEUawweJA==ywLVNlUXNO8JeerJ'
      },
      params: {
        name: emptyInput
      }
    })
    .then((response) => {
      //we will update the list, with this data we just retrieved, but we need to figure how to get just the results we desire
      updateList(response);
    })
    .catch((response) => {
      console.error('Animal was not retrieved!', response)
    })
  }

  return (
    <div>
      <div>
        <input type='text' placeholder='Search animal here'></input>
        <button onClick={loadList}>Search</button>
      </div>
      <div>
        <h1>Animal List</h1>
      </div>
    </div>
  )
}

export default WildLife;