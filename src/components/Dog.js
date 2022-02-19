import React from "react";

function Dog({dog, updateDogGoodBad}){

function handleClick(){
  fetch(`http://localhost:3001/pups/${dog.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "isGoodDog": !dog.isGoodDog
    }),
  })
  .then((r) => r.json())
  .then(updateDogGoodBad)
}

return(
    <div id="dog-summary-container">
    <h1>DOGGO:</h1>
    <div id="dog-info">
    <img src={dog.image} alt={dog.name} />
        <h2>{dog.name}</h2>
        <button onClick={handleClick}> {dog.isGoodDog ? "Good" : "Bad"} Dog!</button>
    </div>
  </div>
)}

export default Dog