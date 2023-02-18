import React, { useState } from "react";
import Form from "./Form";
import trainingItem from "./trainingItem";
import List from "./List";


export default function TrainingHistory() {
  const [trainings, setTrainings] = useState([
    trainingItem('2002-05-05', 7), 
    trainingItem('2001-12-12', 10), 
    trainingItem('2000-02-01', 5), 
  ]);

  console.log(trainings)
  const handleAdd = (date, distance) => {

    const index = trainings.findIndex(tr => tr.date.isSame(date));

    if (index !== -1) {
      const newDistance = trainings[index].distance + distance

      setTrainings(prev => prev.map(item => 
        item.date.isSame(date) ? {...item, distance: newDistance} : {...item}
      ));
      
    } else {
      const newTraining = trainingItem(date, distance);
      setTrainings(prev => [...prev, newTraining]);
    }
  }

  const handleRemove = (item) => {
    const id = item.id;
    setTrainings(prev => prev.filter(i => i.id !== id));
  }

  return (
    <>
      <Form onHandleAdd={handleAdd}></Form>
      <List array={trainings} onRemove={handleRemove}></List>
    </>
  )
}