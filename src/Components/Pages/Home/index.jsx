import React, { useEffect, useState } from "react";
import { Nav } from "../../Nav";
import axios from "axios";
import { PizzaBlock } from "./PizzaBlock";

import "./home.scss";

export const Home = () => {
  const [pizzaData, setPizzaData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      console.log(data);
      setPizzaData(data.pizzas);
    });
  }, []);

  return (
    <>
      <Nav />
      <h2>All Pizzas</h2>
      <div className="pizzaStore">
        {pizzaData &&
          pizzaData.map((el, index) => {
            return <PizzaBlock key={index} {...el} />;
          })}
      </div>
    </>
  );
};

export default Home;
