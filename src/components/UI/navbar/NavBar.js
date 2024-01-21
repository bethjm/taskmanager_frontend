import React from "react";
import "./NavBar.css";

import Add from "../images/add_sign.png";
import Home from "../images/home.png";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar_Container">
        <div className="nav_icons">
          <a className="icon_container" href="/api/tasks/addnew">
            <img src={Add} />
          </a>
          <a className="icon_container" href="/">
            <img src={Home} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
