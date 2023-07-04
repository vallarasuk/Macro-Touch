import React, { useState, useEffect } from "react";
import DownloadScreen from "./DownloadScreen";
// import OppsError from "./OppsError";
// import ErrorScreen from "./ErrorScreen";

const Processing = () => {
  const [percentage, setPercentage] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 10;
        if (newPercentage >= 100) {
          clearInterval(interval);
          return 100; // Restrict the percentage to 100 if it goes beyond
        }
        return newPercentage;
      });
    }, 1000);

    // Simulating an error condition after 5 seconds
    const timeout = setTimeout(() => {
      setError(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const barStyles = {
    width: "392px",
    height: "10px",
    flexShrink: 0,
    borderRadius: "10px",
    background: "#FFF",
    color: "#FFC231",
  };

  const loadingStyles = {
    width: `${percentage}%`,
    height: "100%",
    borderRadius: "10px",
    background: "#FFC231",
    transition: "width 0.5s ease",
  };

  // if (error) {
  //   return   <OppsError onClose={""} /> ;
  // }

  if (percentage === 100) {
    return <DownloadScreen />;
  }

  return (
    <div className="d-flex align-items-center justify-content-center my-5">
      <div className="processing-screen">
        <div className="processing-img"></div>
        <p className="process-content fw-bold">
          "Prepare your coffee to take a sip while going through the report
          ....."
        </p>
        <div style={barStyles}>
          <div style={loadingStyles}></div>
        </div>
        <div className="">
          <div
            className="percentage"
            style={{
              position: "relative",
              top: "-35px",
              textAlign: "center",
              fontWeight: "bold",
              color: "#FFC231",
            }}
          >
            {percentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;
