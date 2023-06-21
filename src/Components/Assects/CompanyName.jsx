import React from "react";

const CompanyName = ({ name }) => {
  const parts = name.split(" ");
  return (
    <div className="mx-3 mt-1">
      <h4 className="fw-bold">
        {parts[0]} <span className="second_name">{parts[1]}</span>
      </h4>
    </div>
  );
};

export default CompanyName;
