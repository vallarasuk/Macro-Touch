import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Credit = ({ initialCreditCount }) => {
  const [creditCount, setCreditCount] = useState(initialCreditCount);

  useEffect(() => {
    // Fetch credit count from the backend
    fetchCreditCount();
  }, []);

  const fetchCreditCount = async () => {
    try {
      // Make an API call to fetch the credit count
      const response = await fetch("your-backend-api-endpoint");
      const data = await response.json();

      // Update the credit count in the state
      setCreditCount(data.creditCount);
    } catch (error) {
      console.log("Error fetching credit count:", error);
    }
  };

  return (
    <div>
      <div className="text-center my-3">
        <h1 className="my-3">Get the summarization</h1>
        <span className="credit-score">{creditCount} credit remaining</span>
      </div>
    </div>
  );
};

Credit.propTypes = {
  initialCreditCount: PropTypes.number.isRequired,
};

export default Credit;
