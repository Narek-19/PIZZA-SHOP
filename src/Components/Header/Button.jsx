import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Button =()=>{
    return (
      <Link to="/cart">
        <button>
          <ul>
            <li>520$</li>
            <li>&nbsp; &brvbar; &nbsp;</li>
            <li>Buy</li>
          </ul>
        </button>
      </Link>
    );
}