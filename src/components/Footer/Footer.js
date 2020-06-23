import React from "react";

import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

import { formatSeconds } from "lib/utils";

import "./Footer.css";
import { Typography, Box } from "@material-ui/core";

function Footer(props) {
  const { show, handleShow, handleTogglePlaying, isPlaying, progress } = props;
  return (
    <Box className="footer-root">
      <IconButton onClick={() => handleTogglePlaying(null)}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Typography>{formatSeconds(progress)}</Typography>
      <Box className="blank" />
      <FormControlLabel
        control={<Switch checked={show} onChange={handleShow} color='primary'/>}
        label="Show"
      />
    </Box>
  );
}

export default Footer;
