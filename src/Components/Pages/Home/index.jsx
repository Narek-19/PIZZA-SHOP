import React, { useEffect, useState } from 'react'
import { Nav } from '../../Nav';
import { PizzaBlock } from './PizzaBlock';

import "./home.scss";

export const Home =()=> {
  const[pizzaData, setPizzaData] = useState();

  useEffect(()=>{
    fetch("http://localhost:3000/db.json")
    .then(res => res.json())
    .then(data => setPizzaData(data.pizzas));
  },[])
  return (
  <>
   <Nav/>
   <h2>All Pizzas</h2>
   <div className = "pizzaStore">
   {
     pizzaData && pizzaData.map((el,index)=>{
      return(
        <PizzaBlock key = {index} {...el}/>
      )
     })
        }
   </div>

  </>
  )
}

export default Home;