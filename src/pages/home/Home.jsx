import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center  bg-cyan-950 text-amber-400 p-4">
        Welcome to Home page
      </div>
      <Card />
    </>
  );
};

export default Home;
