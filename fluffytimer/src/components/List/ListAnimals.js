import { useRef, useState } from "react";
import classes from "./ListAnimals.module.css";

const ListAnimals = (props) => {
  const [time, setTime] = useState("00:00");
  const [status, setStatus] = useState(false);

  let minute = useRef(null);
  const onSetHandler = () => {
    console.log(minute.current.value);
    if (minute.current.value === "") {
      setTime("00:00");
      setStatus(false);
      return;
    }
    else {
      setStatus(true);
    }
    let totalHour = parseInt(props.hour);
    let totalMinute = parseInt(props.minute) + parseInt(minute.current.value);
    if (props.hour > 12) {
      totalHour = props.hour - 12;
    }
    if (totalMinute >= 60) {
      totalHour += 1;
      totalMinute = Math.abs(totalMinute - 60);
    }
    setTime(totalHour + ":" + totalMinute);
    minute.current.value = "";
  };
  return (
    <>
      <div className={`${status ? classes.cardTaken : classes.cardSuccess}`}>
        <div className={classes.animals}>{props.animal}</div>
        <h1>{props.checkOut}</h1>
        <input
          type="number"
          min="1"
          className={classes.inputNumber}
          ref={minute}
        />
        <h1>{time}</h1>
        <div className={classes.button}>
          <button onClick={onSetHandler} className={classes.button1}>
            Set
          </button>
        </div>
      </div>
    </>
  );
};

export default ListAnimals;
