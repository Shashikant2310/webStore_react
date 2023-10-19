import React from "react";
import Hero from "../components/Home/Hero";
import Products from "../components/Home/Products";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
};

export default Home;
