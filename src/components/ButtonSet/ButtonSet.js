import React from "react";
import { Button } from "@material-ui/core";

import "./ButtonSet.css";

function ButtonSet(props) {
  const { changeTotal } = props;
  return (
    <div className="buttonSet-root">
      {/* <Button onClick={() => changeTotal(1 / 20)}>3 sec</Button> */}
      <Button onClick={() => changeTotal(10)}>10 Min</Button>
      <Button onClick={() => changeTotal(20)}>20 Min</Button>
      <Button onClick={() => changeTotal(30)}>30 Min</Button>
      <Button onClick={() => changeTotal(40)}>40 Min</Button>
      <Button onClick={() => changeTotal(50)}>50 Min</Button>
      <Button onClick={() => changeTotal(60)}>60 Min</Button>
    </div>
  );
}

export default ButtonSet;
