import React from "react";
import { CircularProgress, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const timerSize = 500;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  progressWrapper: {
    margin: "0 auto",
    width: timerSize,
    height: timerSize,
    borderRadius: timerSize,
    boxShadow: "20px 20px 60px #c4c4c4, -20px -20px 60px #ffffff",
    padding: 10,
  },
}));

function App() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [total, setTotal] = React.useState(60);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleProgress = (progress) => {
    setProgress(progress);
  };

  const tick = () => {
    if (progress >= total * 60) return;
    setProgress(progress + 1);
    console.log("progress: " + progress);
  };

  const handleTogglePlaying = () => {
    setIsPlaying(!isPlaying);
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
    <div className={classes.root}>
      <div className={classes.progressWrapper}>
        <CircularProgress
          size={timerSize}
          thickness={22}
          value={100 * (1 - progress/(60 * total))}
          variant="static"
        />
      </div>
      <Button onClick={handleTogglePlaying}>Tick</Button>
      <div>{progress}</div>
    </div>
  );
}

export default App;
