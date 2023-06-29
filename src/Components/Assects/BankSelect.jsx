import React, { useState } from "react";
import Select from "react-select";
import Btn from "../Assects/Button";
import FilePreview from "./FilePreview";

const BankSelect = ({
  handleUpload,
  filePreview,
  fileName,
  handleReupload,
  isProcessing,
}) => {
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
    <div className="row justify-content-evenly my-5">
      <div className="col-4">
        <Select
          options={bankOptions}
          value={selectedBank}
          onChange={handleBankChange}
          placeholder="Select Bank"
          className="bank-select"
        />
      </div>
      <div className="col-4">
        <input
          type="number"
          className="input-amount"
          placeholder="Enter the maximum amount"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center my-4">

      {filePreview ? (
          <FilePreview
            filePreview={filePreview}
            fileName={fileName}
            handleReupload={handleReupload}
            handleUpload={handleUpload}
            isProcessing={isProcessing}
          />
        ) : null}
        {/* <Btn
          button_name="Upload"
          className="upload-btn"
          onClick={handleUpload}
        /> */}
      </div>
    </div>
  );
};

export default BankSelect;
