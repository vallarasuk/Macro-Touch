import React from "react";
import uploadVector from "../Images/uploadVector.svg";
import processVector from "../Images/processVecotr.png";
import downloadVector from "../Images/downlaodvector.png";
const FileSectionProcess = ({ uploadStyle, processStyle, downloadStyle }) => {
  return (
    <div className="text-center">
      <div className="upload-content d-flex ">
        <div className="upload-section">
          <img src={uploadVector} alt="Upload" />
          <span className="fw-bold" style={uploadStyle}>
            Upload the Transaction
          </span>
        </div>
        <div className="upload-section">
          <img src={processVector} alt="Upload" />
          <span className="fw-bold" style={processStyle}>
            Processing the file
          </span>
        </div>
        <div className="upload-section">
          <img src={downloadVector} alt="Upload" />
          <span className="fw-bold" style={downloadStyle}>
            Download your summarizastion
          </span>
        </div>
      </div>
    </div>
  );
};

export default FileSectionProcess;
