import React from "react";
import classNames from "classnames";
import Logo from "./Logo";
import ShopCart from "./ShopCart";

import "./Header.scss";

const Header = () => {
  return (
    <div className={classNames("Header")}>
      <Logo />
      <ShopCart />
    </div>
  );
};
export default Header;
