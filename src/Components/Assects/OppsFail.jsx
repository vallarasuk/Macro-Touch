import React, { useState, useEffect } from "react";
import OppsErrorImage from "../Images/oops error.svg";

const OppsFail = () => {
  const [creditScore, setCreditScore] = useState(null);

  useEffect(() => {
    // Make an API call to fetch the user's credit score from the backend
    const fetchCreditScore = async () => {
      try {
        const response = await fetch("your-backend-credit-score-api-endpoint");
        if (response.ok) {
          const data = await response.json();
          setCreditScore(data.creditScore);
        } else {
          console.log("Failed to fetch credit score");
        }
      } catch (error) {
        console.log("Error fetching credit score:", error);
      }
    };

    fetchCreditScore();
  }, []);

  if (creditScore !== null && creditScore <= 0) {
    return (
      <div className="d-flex align-items-center justify-content-center oops-parent">
        <div className="text-center">
          <img src={OppsErrorImage} alt="Oops error" className="img-fluid" />
          <h1 className="opps-fail-title">Oops!</h1>
          <h4 className="oops-fail-title-content">Insufficient balance</h4>
          <a href="/price" className="oops-fail-connect-link">
            Recharge your credits to continue
          </a>
        </div>
      </div>
    );
  } else {
    return null; // Return null if credit score is not fetched or is greater than 0
  }
};

export default OppsFail;
