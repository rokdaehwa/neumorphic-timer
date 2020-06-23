import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./Timer.css";

const timerSize = "28rem";
const timerThickness = 22;

function Timer(props) {
  const { progress, isPlaying } = props;

  return (
    <div className="timer-root">
      {/* <ul className="marks">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
        <li className="hours"></li>
      </ul> */}
      <div className="timer-wrapper-out">
        <div className="timer-wrapper-in">
          <CircularProgress
            size={timerSize}
            thickness={timerThickness}
            color={isPlaying ? "primary" : "secondary"}
            value={progress / 36}
            variant="static"
          />
        </div>
      </div>
    </div>
  );
}

export default Timer;
