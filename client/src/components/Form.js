import Swipe from "./Swipe";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { UseContext, useState, useEffect } from "react";

function Form() {
  const [selected, setSelected] = useState({});
  const { id } = useParams();
useEffect(()=>{
  fetch(`/museums/${id}`)
  .then((r) => r.json())
  .then((selected) => setSelected(selected));
}, [])
  
console.log(selected.tours)

  return (
    <>
    <span> A guide to choosing your tour: </span>
    <p>Standard Tour:</p>
    <p>Standard group size is 20 people. Learn from experienced professionals who are passionate about history and culture.</p>
    <p>Extended Tour:</p>
    <p> Standard group size is 10 people. A hands on tour with a small group and extra attention to details. Make a day of it!</p>
    <p>Private Tour:</p>
    <p>Just you and your guests. Skip the line and take advantage of small groups and professional guides who will adapt the tour to your interests and answer all of your questions. </p>
    <img src={selected.image}/>
    <p>{selected.name}</p> 
    <p>{selected.address}</p> 
  
      <Swipe />
    </>
  );
}

export default Form;

 