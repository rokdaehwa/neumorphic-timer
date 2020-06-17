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
  const [progress, setProgress] = React.useState(60 * 60);
  const [total, setTotal] = React.useState(60);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const tick = () => {
    if (progress <= 0) {
      alert('Time Done!');
      changeTotal(total);
      return;
    }
    setProgress(progress - 1);
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

  const changeTotal = (total) => {
    handleTogglePlaying(false);
    setTotal(total);
    setProgress(60 * total);
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
        <Header total={total} progress={progress} />
        <Timer progress={progress} isPlaying={isPlaying} />
        <ButtonSet
          changeTotal={changeTotal}
          handleTogglePlaying={handleTogglePlaying}
          isPlaying={isPlaying}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
