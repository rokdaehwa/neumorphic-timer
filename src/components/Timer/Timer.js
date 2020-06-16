import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./Timer.css";

const timerSize = "30rem";
const timerThickness = 22;

function Timer(props) {
  const { progress, total, isPlaying } = props;

  return (
    <div className="timer-root">
      <div className="timer-wrapper">
        <CircularProgress
          size={timerSize}
          thickness={timerThickness}
          color={(isPlaying) ? "primary" : "secondary" }
          value={100 * (1 - progress / (60 * total))}
          variant="static"
        />
      </div>
    </div>
  );
}

export default Timer;
