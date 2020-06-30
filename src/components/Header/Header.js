import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Breadcrumbs, IconButton, Box, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "3rem",
    padding: ".5rem",
    display: "flex",
    // alignItems: "flex-end",
    alignItems: "center",
  },
  leading: {
    // margin,
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bolder",
  },
  timeList: {
    marginLeft: "2rem",
  },
  actions: {
    marginLeft: "auto",
    paddingRight: 8,
  },
}));

function Header(props) {
  const classes = useStyles();
  const { index, totalList } = props;

  const buildBreadCrumbs = () => {
    if (totalList === []) return;
    return (
      <Breadcrumbs className={classes.timeList}>
        {totalList.map((value, i) => {
          return (
            <Typography
              key={i}
              color={i == index ? "textPrimary" : "textSecondary"}
            >{`${value / 60} Min`}</Typography>
          );
        })}
      </Breadcrumbs>
    );
  };

  return (
    <Box className={classes.root}>
      {/* <IconButton className={classes.leading} onClick={handleOpen(true)}>
        <MenuIcon />
      </IconButton> */}
      {/* <div className={classes.title}>{`${total} Min Timer`}</div> */}
      {buildBreadCrumbs()}
      <div className={classes.actions}></div>
    </Box>
  );
}

export default Header;
