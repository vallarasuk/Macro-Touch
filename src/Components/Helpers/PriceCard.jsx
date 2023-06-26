import React from "react";
import Card from "./Card"; // Import the Card component
import "./helper_style.css";
import Btn from "../Assects/Button";
import vector from "../Images/Vector.svg";

const PriceCard = () => {
  const cards = [
    { title: "1 Credit", creditCount: 1, price: "Rs 9", color: "#7201C2" },
    { title: "6 Credit", creditCount: 6, price: "Rs 49", color: "#FFC231" },
    { title: "14 Credit", creditCount: 14, price: "Rs 99", color: "#7201C2" },
  ];

  return (
    <div className="container">
      <h1 className="text-center my-3">The Credit Packs</h1>

      <div className="row mt-5 justify-content-evenly align-items-center">
        {cards.map((card, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <Card {...card} /> {/* Render the Card component with the props */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
