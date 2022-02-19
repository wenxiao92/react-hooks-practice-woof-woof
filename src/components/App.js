import React, {useState, useEffect} from "react";
import DogList from './DogList'
import Dog from './Dog'
import ToggleDog from './ToggleDog'

function App() {
  const[dogs, setDogs] = useState([])
  const[dogInfo, setDogInfo] = useState([])
  const[toggleGood, setToggle] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:3001/pups')
    .then((r) => r.json())
    .then(setDogs)
  },[])

  function handleDog(id){
    //use .find method so that the state is not an array with the object of the dog
    const selectedDog = dogs.find((dog) => dog.id === id)
    setDogInfo(selectedDog)
  }

  //handles the updating the state of the dog array. Need a follow up variable to redisplay the dogs
  function handleUpdateGoodBad(selectedDog){
    const updatedDogs = dogs.map((dog) => 
    dog.id === selectedDog.id ? selectedDog : dog
    )
    setDogs(updatedDogs)
    setDogInfo(selectedDog)
  }

  function handleToggle(){
    setToggle((toggle) => !toggle)
  }

  //displayToggleDog needs to be declared first. It cannot be declared inside the if statement
  //if we use the filter method without the if statement, the search will return the first dog
  let displayToggleDog = dogs;
  if(toggleGood){
    displayToggleDog = displayToggleDog.filter((dog) => dog.isGoodDog)
  }

  return (
    <div className="App">
    <ToggleDog filter={toggleGood} onFilter={handleToggle}/>
    <DogList dogBar={displayToggleDog} clickedDog={handleDog}/>
    <Dog dog={dogInfo} updateDogGoodBad={handleUpdateGoodBad}/>

    </div>
  );
}

export default App;
