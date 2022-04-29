import React from 'react'
import { Nav } from '../../Nav';
import { PizzaBlock } from './PizzaBlock';

import "./home.scss";

export const Home =()=> {
  return (
  <>
   <Nav/>
   <h2>All Pizzas</h2>
   <PizzaBlock/>
  </>
  )
}

export default Home;