import React from "react";

function DogList({dogBar, clickedDog}){

const displayDogNames = dogBar.map((eachDog) => (
    <span key={eachDog.id} onClick={() => clickedDog(eachDog.id)}> {eachDog.name} </span>
))


return(
    <div id="dog-bar"> {displayDogNames}</div>

)
}

export default DogList