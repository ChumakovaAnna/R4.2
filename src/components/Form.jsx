import React from "react";
import moment from "moment";

export default function Form({onHandleAdd}) {
  let date;
  let distance;

  const handleAddItem = (evt) => {
    evt.preventDefault();
    if (date && distance) {
      onHandleAdd(date, distance)

      const formDate = document.getElementById("date");
      formDate.value = "";
      const formDistance = document.getElementById("distance");
      formDistance.value = "";
    }
  }

  const handleValue = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    
    if (name === 'date') {

      if (!moment(value, "YYYY-DD-MM") || value.length < 9) {
        console.log("Некорректная дата!");
      }

      date = value
    }
    
    if (name === 'distance') {
      const distanceNumber = parseInt(value)
      if(isNaN(distanceNumber)){
        console.log("Некорректное число!");
      }
      
      distance = distanceNumber;
    }
  }
  
  return (
    <form className="form" onClick={handleAddItem}>
      <div>
        <label htmlFor="date">Дата (ДД-ММ-ГГГГ)</label>
        <input id="date" name="date" type="date" onChange={handleValue}></input>
      </div>
      <div>
        <label htmlFor="distance">Пройдено км</label>
        <input id="distance" name="distance" type="number" onChange={handleValue}></input>
      </div>
      <button className="button_form" type="submit">OK</button>
    </form>
  );
}