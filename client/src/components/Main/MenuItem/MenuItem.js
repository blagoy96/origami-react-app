import "./MenuItem.css";
import React from "react";
const MenuItem = (props) => {
  return (
    <li className="menuItem">
      <a href="/">{props.children}</a>
    </li>
  );
};

export default MenuItem;
