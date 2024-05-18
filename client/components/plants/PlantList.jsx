import React from "react";
import Plant from "./Plant.jsx";

const PlantList = ({plants}) => {
  console.log('plant list props: ', plants);

  return (
    <div>
      { plants.map((plantObj, index) => {
        return ( 
        <Plant 
          plant={plantObj} 
          key={index} 
        />
      );
      })}
      {/* < Plant />
      < Plant />
      < Plant /> */}
    </div>
  );
};

export default PlantList;
