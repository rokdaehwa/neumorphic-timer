import React from "react";

import "./Header.css";
import { Button } from "@material-ui/core";

function Header(props) {
  const { total, progress } = props;

  const formatSeconds = (secondsInt) => {
    let min = Math.floor(secondsInt / 60);
    let sec = secondsInt % 60;

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    return `${min}:${sec}`;
  };

  return (
    <div className="header-root">
      <div className="header-title">{`${total} Min Timer`}</div>
      <div className="header-progress">{formatSeconds(progress)}</div>
      <div className="header-actions">
        <Button
          className="header-button"
          onClick={() => document.body.requestFullscreen()}
        >
          Full Screen
        </Button>
      </div>
    </div>
  );
}

export default Header;
