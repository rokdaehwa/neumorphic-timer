import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ErrorBoundary from "components/ErrorBoundary";

import Timer from "components/Timer";
import Header from "components/Header";
import ButtonSet from "components/ButtonSet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e6e6e6",
    display: "flex",
    flexDirection: "column",
  },
}));


function App() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [total, setTotal] = React.useState(60);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const tick = () => {
    if (progress >= total * 60) return;
    setProgress(progress + 1);
    console.log(`progress: ${progress}`);
  };

  const handleTogglePlaying = (v) => {
    if (v == null) {
      setIsPlaying(!isPlaying);
      return;
    } else {
      setIsPlaying(v);
      return;
    }
  };

  const handleTotal = (total) => {
    setTotal(total);
  };

  const resetProgress = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const changeTotal = (total) => {
    handleTogglePlaying(false);
    resetProgress();
    handleTotal(total);
  };

  React.useEffect(() => {
    console.log("useEffect");
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
        <Header total={total} />
        <Timer total={total} progress={progress} isPlaying={isPlaying} />
        <ButtonSet changeTotal={changeTotal} handleTogglePlaying={handleTogglePlaying} isPlaying={isPlaying}/>
      </div>
    </ErrorBoundary>
  );
}

export default App;
