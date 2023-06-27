import React, { useState } from "react";
import Select from "react-select";

const BankSelect = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  const bankOptions = [
    { value: "bank1", label: "Bank 1" },
    { value: "bank2", label: "Bank 2" },
    // Add more options for Indian banks
  ];

  const handleBankChange = (selectedOption) => {
    setSelectedBank(selectedOption);
  };

  return (
    <div className="row justify-content-evenly">
      <div className="col-5">
        <Select
          options={bankOptions}
          value={selectedBank}
          onChange={handleBankChange}
          placeholder="Select Bank"
        />
      </div>
      <div className="col-5">
        <input type="text" placeholder="Enter Maximum amount" id="" />
      </div>
    </div>
  );
};

export default BankSelect;
