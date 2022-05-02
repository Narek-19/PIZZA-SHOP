import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Logo = () => {
  return (
    <div className="Logo">
      <div className="logo-content">
        <NavLink to="/">
          <div className="App">
            <img width="80px" src="./assets/pizza.png" alt="Pizza logo" />
          </div>
        </NavLink>
      </div>
      <ul className="des-content">
        <li>
          <h1>Green Pizza</h1>
        </li>
        <li>
          <p>The most delicious pizza in space:</p>
        </li>
      </ul>
    </div>
  );
};
export default Logo;
