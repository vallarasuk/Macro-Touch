import React, { useEffect } from "react";
import Card from "./Card";
import "./helper_style.css";
import NavBarCommon from "./NavBarCommon.jsx";
import axios from "axios";

const PriceCard = () => {
  const cards = [
    {
      title: "1 Credit",
      creditText: "The cost of one pack is just",
      creditCount: 1,
      price: "Rs 9",
      color: "#7201C2",
    },
    {
      title: "6 Credit",
      creditText: "The cost of one pack is just",
      creditCount: 6,
      price: "Rs 49",
      color: "#FFC231",
    },
    {
      title: "14 Credit",
      creditText: "The cost of one pack is just",
      creditCount: 14,
      price: "Rs 99",
      color: "#7201C2",
    },
  ];

  // const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get("your-backend-api-endpoint");
      // setCards(response.data);
    } catch (error) {
      console.log("Error fetching cards:", error);
    }
  };
  return (
    <div className="container">
      <NavBarCommon />
      <h1 className="text-center my-3">The Credit Packs</h1>
      <div className="row mt-5 justify-content-evenly align-items-center">
        {cards.map((card, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <Card {...card} /> {/* Render the Card component with the props */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
