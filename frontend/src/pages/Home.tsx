import React from "react";
import { Navbar, Header, CarList, Footer } from "../components";
import { Products } from ".";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CarList />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
