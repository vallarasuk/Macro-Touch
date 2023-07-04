import React, { useState, useEffect } from "react";
import Select from "react-select";
import FilePreview from "./FilePreview";
import "../Helpers/helper_style.css";

const BankSelect = ({
  handleUpload,
  filePreview,
  fileName,
  handleReupload,
  isProcessing,
  selectedBank,
  setSelectedBank,
}) => {
  const [amount, setAmount] = useState("");
  const [errorBank, setErrorBank] = useState("");
  const [errorAmount, setErrorAmount] = useState("");
  const [bankOptions, setBankOptions] = useState([]);

  useEffect(() => {
    // Fetch bank options from the backend
    fetchBankOptions();
  }, []);

  const fetchBankOptions = async () => {
    try {
      // Make an API call to fetch bank options
      const response = await fetch("your-backend-api-endpoint");
      const data = await response.json();

      // Update the bank options in the state
      setBankOptions(data);
    } catch (error) {
      console.log("Error fetching bank options:", error);
    }
  };

  const handleBankChange = (selectedOption) => {
    setSelectedBank(selectedOption);
    setErrorBank("");
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setErrorBank("");
  };

  const handleValidate = () => {
    if (!selectedBank) {
      setErrorBank("Please select a bank.");
      return;
    }
    if (amount === "") {
      setErrorAmount("Please enter the maximum amount.");
      return;
    }
    handleUpload();
  };

  return (
    <div className="row justify-content-around my-5">
      <div className="col-12 col-md-5 mb-3">
        <Select
          options={bankOptions}
          value={selectedBank}
          onChange={handleBankChange}
          placeholder="Select Bank"
          className="bank-select"
        />
        {errorBank && <p className="error-message">{errorBank}</p>}
      </div>
      <div className="col-12 col-md-5">
        <input
          type="number"
          className="input-amount"
          placeholder="Enter the maximum amount"
          value={amount}
          onChange={handleAmountChange}
        />
        {errorAmount && <p className="error-message">{errorAmount}</p>}
      </div>
      <div className="col-12 mt-4">
        {filePreview ? (
          <FilePreview
            filePreview={filePreview}
            fileName={fileName}
            handleReupload={handleReupload}
            handleUpload={handleValidate}
            isProcessing={isProcessing}
          />
        ) : null}
      </div>
    </div>
  );
};

export default BankSelect;
