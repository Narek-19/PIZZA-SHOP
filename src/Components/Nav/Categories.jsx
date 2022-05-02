import React, { useState } from "react";
import { SortPopup } from "./SortPopup";

export const Categories = ({ categories }) => {
  const [category, setCategory] = useState(null);

  const onSelectItem = (index) => {
    setCategory(index);
  };

  const popUpData = ["Popularity", "Price", "Alphabetic"];
  return (
    <ul className="nav-categories">
      <li
        onClick={() => setCategory(null)}
        className={category === null ? "active" : ""}
      >
        All
      </li>
      {categories &&
        categories.map((name, index) => {
          return (
            <li
              className={category === index ? "active" : null}
              onClick={() => onSelectItem(index)}
              key={index}
            >
              {name}
            </li>
          );
        })}
      <SortPopup data={popUpData} />
    </ul>
  );
};
