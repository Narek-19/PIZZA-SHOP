import React, { useState } from "react";
import classNames from "classnames";

export const PizzaBlock = (props) => {
  const [selectedT, setSelectedT] = useState(null);
  const [selectedS, setSelectedS] = useState(null);
  const typeNames = ["Thick", "Thin"];
  const pizzaSizes = [26, 30, 40];

  const changeActiveItem = (index) => {
    setSelectedT(index);
  };
  const changeActiveSize = (index) => {
    setSelectedS(index);
  };
  return (
    <div className="pizzaBlock">
      <div className="pizzaImg">
        <img
          src="http://pizzahutantilles.fr/assets/images/pizza-panel-thumb.png"
          alt="PizzaImage"
        ></img>
      </div>
      <div className="pizza-name">
        <h2>{props.name}</h2>
      </div>
      <div className="pizzaSettings">
        <ul className="pizzaTypes">
          {typeNames.map((type, index) => {
            return (
              <li
                key={index}
                className={classNames({
                  active: index === selectedT,
                  disabled: !props.types.includes(index),
                })}
                onClick={() => changeActiveItem(index)}
              >
                {type}
              </li>
            );
          })}
        </ul>
        <ul className="pizzaSize">
          {pizzaSizes.map((size, index) => {
            return (
              <li
                key={index}
                onClick={() => changeActiveSize(index)}
                className={classNames({
                  active: selectedS === index,
                  disabled: !props.sizes.includes(size),
                })}
              >
                {size}sm
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-controls">
        <ul>
          <li className="price">{props.price}$</li>
          <li>
            <button>
              <span>+</span>
              <span>Add</span>
              <span>2</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
