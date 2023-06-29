import React, { useState } from "react";
import Select from "react-select";
import FilePreview from "./FilePreview";

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


  const bankOptions = [
    { value: "Axis_Bank", label: "Axis Bank" },
    { value: "BOI_Bank", label: "BOI Bank" },
    { value: "HDFC_Bank", label: "HDFC Bank" },
    { value: "ICICI_Bank", label: "ICICI Bank" },
    { value: "IDBI_Bank", label: "IDBI Bank" },
    { value: "INDIAN_Bank", label: "Indian bank" },
    { value: "KVB_Bank", label: "KVB bank" },
    { value: "UNION_Bank", label: "Union bank" },
    { value: "YES_Bank", label: "YES bank" },
    // Add more options for Indian banks
  ];

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
      <div className="col-5">
        <Select
          options={bankOptions}
          value={selectedBank}
          onChange={handleBankChange}
          placeholder="Select Bank"
          className="bank-select"
        />
        {errorBank && <p className="error-message">{errorBank}</p>}
      </div>
      <div className="col-5">
        <input
          type="number"
          className="input-amount"
          placeholder="Enter the maximum amount"
          value={amount}
          onChange={handleAmountChange}
        />
        {errorAmount && <p className="error-message">{errorAmount}</p>}
      </div>
      <div className="d-flex justify-content-center align-items-center my-4">
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
