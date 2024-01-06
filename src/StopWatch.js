import React from "react";
import { useState, useReducer } from "react";
import "./index.css";
import Display from "./display";
import Button from "./button";

export default function StopWatch() {
  const [button, setButton] = useState(0);
  const reducer = (time, action) => {
    switch (action.type) {
      case "start":
        return {
          ...time,
          hour: action.payload.hour,
          min: action.payload.min,
          sec: action.payload.sec,
          millSec: action.payload.millSec,
        };
      case "stop":
        return {
          hour: action.payload.hour,
          min: action.payload.min,
          sec: action.payload.sec,
          millSec: action.payload.millSec,
        };
      default:
        return time;
    }
  };

  const [time, dispatch] = useReducer(reducer, {
    hour: 0,
    min: 0,
    sec: 0,
    millSec: 0,
  });

  const [inter, setInter] = useState();

  let h = time.hour,
    m = time.min,
    s = time.sec,
    ms = time.millSec;

  const start = () => {
    setButton(1)
    setInter(setInterval(run, 10));
  };

  const run = () => {
    ms++;
    if (ms === 99) {
      s++;
      ms = 0;
    }
    if (s === 59) {
      m++;
      s = 0;
    }
    if (m === 59) {
      h++;
      m = 0;
    }
    return dispatch({
      type: "start",
      payload: { hour: h, min: m, sec: s, millSec: ms },
    });
  };

  const stop = () => {
    setButton(0)
    clearInterval(inter);
  };

  const reset = () => {
    setButton(0)
    clearInterval(inter);
    dispatch({
      type: "stop",
      payload: {
        hour: 0,
        min: 0,
        sec: 0,
        millSec: 0,
      },
    });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="display">
          <Display time={time} />
        </div>
        <div>
          <Button start={start} reset={reset} stop={stop} button={button} />
        </div>
      </div>
    </div>
  );
}
