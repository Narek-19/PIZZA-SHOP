import React from "react";
import { Categories } from "./Categories";

import "./nav.scss";

export const Nav = () => {
  const categories = ["Vegan", "Meat", "Spicy", "GreenPizza"];

  return (
    <nav>
      <Categories categories={categories} />
    </nav>
  );
};
