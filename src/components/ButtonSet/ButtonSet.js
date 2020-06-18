import React from "react";
import { Button } from "@material-ui/core";

import "./ButtonSet.css";

function ButtonSet(props) {
  const { changeTotal, handleTogglePlaying, isPlaying } = props;
  return (
    <div className="buttonSet-root">
      <Button onClick={() => handleTogglePlaying(null)}>
        {isPlaying ? "Pause" : "Play"}
      </Button>
      <Button onClick={() => changeTotal(1 / 20)}>3 sec</Button>
      <Button onClick={() => changeTotal(10)}>10 Min</Button>
      <Button onClick={() => changeTotal(20)}>20 Min</Button>
      <Button onClick={() => changeTotal(30)}>30 Min</Button>
      <Button onClick={() => changeTotal(40)}>40 Min</Button>
      <Button onClick={() => changeTotal(50)}>50 Min</Button>
      <Button onClick={() => changeTotal(60)}>60 Min</Button>
      <div
        style={{
          color: "#fff",
          fontSize: "0.7rem",
          fontWeight: 100,
          marginLeft: "1rem",
        }}
      >
        Last Deployed: 2020-06-19
      </div>
    </div>
  );
}

export default ButtonSet;
