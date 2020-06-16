import React from "react";

import "./Header.css";
import { Button } from "@material-ui/core";

function Header(props) {
  const { total } = props;
  return (
    <div className="header-root">
      <div className="header-title">{`${total} Min Timer`}</div>
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
