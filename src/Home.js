import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img className="food" src={require("./food2.jpg")} alt="yummy" />
      <div className="home-content">
        <h1 className="heading-primary">
          <span>welcome</span> <p className="white">to our</p> 𝓡𝓮𝓼𝓽𝓪𝓾𝓻𝓪𝓷𝓽!
        </h1>

        <p className="white">
          The best chefs, the best dishes, the best restaurant in town
        </p>
        <p className="white">Checkout our menu:</p>
        <Link to="/food" className="menu">
          Menu
        </Link>

        <p className="white">
          Call <span className="phone">416-237-3943</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
