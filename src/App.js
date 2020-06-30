import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";

import NoSleep from "nosleep.js";

import ErrorBoundary from "components/ErrorBoundary";
import Timer from "components/Timer";
import Header from "components/Header";
import Footer from "components/Footer";
import TimerDrawer from "components/TimerDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "calc(100%-240px)",
    height: "100%",
    backgroundColor: "#e6e6e6",
    display: "flex",
    flexDirection: "column",
    // paddingTop: `env(safe-area-inset-top)`,
    // paddingLeft: `env(safe-area-inset-left)`,
    // paddingRight: `env(safe-area-inset-right)`,
  },
}));

let noSleep = new NoSleep();

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(60 * 60);
  const [index, setIndex] = React.useState(0);
  const [totalList, setTotalList] = React.useState([60 * 60]);
  const [timeList, setTimeList] = React.useState([]);

  const tick = () => {
    if (progress <= 0) {
      console.log("end?", index === totalList.length - 1);
      if (index === totalList.length - 1) {
        handleTogglePlaying(false);
        alert("Time Done!");
        setIndex(0);
        setProgress(totalList[0]);
        return;
      } else {
        console.log("index: ", totalList[index + 1]);
        setProgress(totalList[index + 1]);
        setIndex(index + 1);
        return;
      }
    }
    setProgress(progress - 1);
    console.log(`progress: ${progress}`);
  };

  const handleTogglePlaying = (v) => {
    if (v == null) {
      setIsPlaying(!isPlaying);
      noSleep.enable();
      return;
    } else {
      noSleep.disable();
      setIsPlaying(v);
      return;
    }
  };

  const renderTotalList = (totalList) => {
    if (totalList.length === 0) {
      alert("Add Time");
      return;
    }
    handleTogglePlaying(false);
    setTotalList(totalList);
    setProgress(totalList[0]);
    setOpen(false);
  };

  const handleOpen = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const handleTimeList = (list) => {
    if (list === null) return;
    setTimeList(list);
  };

  const deleteTime = (index) => {
    handleTogglePlaying(false);
    const newList = [...timeList];
    newList.splice(index, 1);
    handleTimeList(newList);
  };

  const addTime = (value) => {
    handleTogglePlaying(false);
    const newList = [...timeList];
    newList.push(value);
    handleTimeList(newList);
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
        <Header index={index} totalList={totalList} />
        <TimerDrawer
          timeList={timeList}
          open={open}
          handleOpen={handleOpen}
          handleTimeList={handleTimeList}
          deleteTime={deleteTime}
          addTime={addTime}
          renderTotalList={renderTotalList}
        />
        <Timer progress={progress} isPlaying={isPlaying} onClick={handleOpen} />
        <Footer
          handleTogglePlaying={handleTogglePlaying}
          isPlaying={isPlaying}
          progress={progress}
          handleOpen={handleOpen}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
