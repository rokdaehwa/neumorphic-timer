import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NoSleep from "nosleep.js";

import ErrorBoundary from "components/ErrorBoundary";
import Collapse from "@material-ui/core/Collapse";

import Timer from "components/Timer";
import Header from "components/Header";
import ButtonSet from "components/ButtonSet";
import Watch from "components/Watch";
import Footer from "components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e6e6e6",
    display: "flex",
    flexDirection: "column",
  },
}));

let noSleep = new NoSleep();

function App() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(60 * 60);
  const [total, setTotal] = React.useState(60);
  const [show, setShow] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const tick = () => {
    if (progress <= 0) {
      alert("Time Done!");
      changeTotal(total);
      return;
    }
    setProgress(progress - 1);
    console.log(`progress: ${progress}`);
  };

  const handleTogglePlaying = (v) => {
    if (v == null) {
      setIsPlaying(!isPlaying);
      // noSleep.enable();
      return;
    } else {
      // noSleep.disable();
      setIsPlaying(v);
      return;
    }
  };

  const changeTotal = (total) => {
    handleTogglePlaying(false);
    setTotal(total);
    setProgress(60 * total);
  };

  const handleShow = () => {
    setShow(!show);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        tick();
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <ErrorBoundary>
      <div className={classes.root}>
        <Collapse in={show}>
          <Header total={total} progress={progress} />
        </Collapse>
        <Timer progress={progress} isPlaying={isPlaying} />
        {/* <Watch /> */}
        <Collapse in={show}>
          <ButtonSet
            changeTotal={changeTotal}
            handleTogglePlaying={handleTogglePlaying}
            isPlaying={isPlaying}
          />
        </Collapse>
        <Footer
          show={show}
          handleShow={handleShow}
          handleTogglePlaying={handleTogglePlaying}
          isPlaying={isPlaying}
          progress={progress}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
