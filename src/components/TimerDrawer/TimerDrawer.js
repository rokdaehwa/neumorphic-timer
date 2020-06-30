import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const times = [10, 20, 30, 40, 50, 60];

const useStyles = makeStyles({
  list: {
    width: "20rem",
  },
  fullList: {
    width: "auto",
  },
  buttons: {
    display: "flex",
    overflow: "auto",
    justifyContent: "space-around",
  },
  timeButton: {
    "&.MuiButton-root": {
      minWidth: 0,
    },
  },
  timeList: {
    height: "10rem",
    display: "flex",
    margin: ".5rem",
    padding: "1rem",
    overflow: "auto",
  },
  card: {
    minWidth: "10rem",
    marginRight: "1rem",
  },
});

function TimerDrawer(props) {
  const classes = useStyles();
  const matches1 = useMediaQuery("(max-width: 768px)");
  const matches2 = useMediaQuery("(max-width: 550px)");
  const matches3 = useMediaQuery("(max-width: 400px)");
  const {
    timeList,
    open,
    handleOpen,
    deleteTime,
    addTime,
    renderTotalList,
  } = props;

  const list = (timeList) => (
    <div
      className={clsx(classes.fullList, {
        [classes.list]: matches2 == true,
      })}
      role="presentation"
      key={timeList}
    >
      {/* <div>{`(max-width: 768px) matches: ${matches1}`}</div>
      <div>{`(max-width: 550px) matches: ${matches2}`}</div>
      <div>{`(max-width: 400px) matches: ${matches3}`}</div> */}
      <List>
        <ListItem>
          <ListItemText primary="Quick Start" />
        </ListItem>
        <div className={classes.buttons}>
          {times.map((time, index) => (
            <Button
              key={time}
              className={classes.timeButton}
              onClick={() => renderTotalList([time * 60])}
            >{`${time} Min`}</Button>
          ))}
        </div>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Time List (Beta)" />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => renderTotalList(timeList)}>
              <PlayArrowIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <div className={classes.timeList}>
          {timeList.map((time, index) => (
            <Card key={index} className={classes.card}>
              <CardContent>{time / 60} Min</CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    deleteTime(index);
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
        <div className={classes.buttons}>
          {times.map((time, index) => (
            <Button
              key={time}
              className={classes.timeButton}
              onClick={() => addTime(time * 60)}
            >{`${time} Min`}</Button>
          ))}
        </div>
      </List>
    </div>
  );

  return (
    <div key={timeList}>
      <React.Fragment>
        {/* <Button onClick={handleOpen(true)}>open</Button> */}
        <SwipeableDrawer
          anchor={matches2 === true ? "bottom" : "right"}
          open={open}
          onClose={handleOpen(false)}
          onOpen={handleOpen(true)}
        >
          {list(timeList)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default TimerDrawer;
