import ListAnimals from "./ListAnimals";
import { useEffect, useState } from "react";

const List = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  if (hour > 12) {
    hour = hour - 12;
  }
  let checkOutTime = hour + ":" + minute;
  const [animals, setAnimals] = useState([
    {
      animal: "Elephant",
      id: Math.random(),
    },
    {
      animal: "Dragon",
      id: Math.random(),
    },
    {
      animal: "Dog",
      id: Math.random(),
    },
    {
      animal: "Panda",
      id: Math.random(),
    },
    {
      animal: "Lion",
      id: Math.random(),
    },
    {
      animal: "Monkey",
      id: Math.random(),
    },
  ]);

  return animals.map((elem) => (
    <ListAnimals
      animal={elem.animal}
      checkOut={checkOutTime}
      hour = {hour}
      minute = {minute}
      key={elem.id}
    />
  ));
};

export default List;
