import React from "react";

function ToggleDog({filter, onFilter}){


return(
    <div id="filter-div">
    <button id="good-dog-filter" onClick={onFilter}>Filter good dogs: {filter ? "ON" : "OFF"}</button>
  </div>
)
}

export default ToggleDog