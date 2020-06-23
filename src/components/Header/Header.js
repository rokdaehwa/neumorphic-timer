import React from "react";

import "./Header.css";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

function Header(props) {
  const { total } = props;

  return (
    <div className="header-root">
      {/* <Select>
        <InputLabel id="select-label">Minutes</InputLabel>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={40}>40</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={60}>60</MenuItem>
      </Select> */}
      <div className="header-title">{`${total} Min Timer`}</div>
      <div className="header-actions"></div>
    </div>
  );
}

export default Header;
