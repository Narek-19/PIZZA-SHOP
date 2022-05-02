import React from "react";
import Header from "../Header";

import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import { Notfoundpage } from "../Pages/Notfoundpage";

import { Routes, Route } from "react-router-dom";
import "./container.scss";

export const Container = () => {
  return (
    <div className="Container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </div>
  );
};
