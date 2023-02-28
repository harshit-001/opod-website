import React from "react";
import Deal from "./Deal";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Hero from "./Hero";
import Offer from "./Offer";
import Spend from "./Spend";

const Home = () => {
  return (
    <>
      <Hero />
      <Spend />
      <Offer />
      <Deal />
      <Feature />
      <FAQ />
    </>
  );
};

export default Home;
