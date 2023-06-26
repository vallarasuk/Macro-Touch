import React from "react";
import uploadVector from "../Images/uploadVector.svg";
import processVector from "../Images/processVecotr.png";
import downloadVector from "../Images/downlaodvector.png";
import DragAndDropComponent from "../Assects/DragAndDrop";

const FileUpload = () => {
  return (
    <div className="container">
      <div className="text-center my-3">
        <h1 className="my-3">Get the summarization</h1>
        <span className="credit-score"> 2/2 credit remaining</span>
      </div>
      <div className="upload-content d-flex">
        <div className="upload-section">
          <img src={uploadVector} alt="Upload" />{" "}
          <span className="fw-bold">Upload the Transaction</span>
        </div>
        <div className="upload-section">
          <img src={processVector} alt="Upload" />{" "}
          <span className="fw-bold">Processing the file</span>
        </div>
        <div className="upload-section">
          <img src={downloadVector} alt="Upload" />{" "}
          <span className="fw-bold">Download your summarizastion</span>
        </div>
      </div>
      <DragAndDropComponent />
    </div>
  );
};

export default FileUpload;
