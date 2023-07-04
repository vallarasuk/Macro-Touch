import React from "react";
import uploadVector from "../Images/uploadVector.svg";
import processVector from "../Images/processVecotr.png";
import downloadVector from "../Images/downlaodvector.png";
import arrowIcon from "../Images/Arrow 1.svg";

const FileSectionProcess = ({ uploadStyle, processStyle, downloadStyle }) => {
  return (
    <div className="text-center">
      <div className="upload-content d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <div className={`upload-section ${uploadStyle}`}>
          <img
            src={uploadVector}
            alt="Upload"
            className="mx-2"
            style={{ maxWidth: "80px" }}
          />
          <span className="fw-bold" style={{ fontSize: "18px" }}>
            Upload the Transaction
          </span>{" "}
          <img
            src={arrowIcon}
            className="mx-2"
            alt="move to next section"
            style={{ maxWidth: "40px" }}
          />
        </div>
        <div className={`upload-section ${processStyle}`}>
          <img
            src={processVector}
            alt="Process"
            className="mx-2"
            style={{ maxWidth: "80px" }}
          />
          <span className="fw-bold" style={{ fontSize: "18px" }}>
            Processing the file
          </span>
          <img
            className="mx-2"
            src={arrowIcon}
            alt="move to next section"
            style={{ maxWidth: "40px" }}
          />
        </div>
        <div className={`upload-section ${downloadStyle}`}>
          <img
            src={downloadVector}
            alt="Download"
            className="mx-2"
            style={{ maxWidth: "80px" }}
          />
          <span className="fw-bold" style={{ fontSize: "18px" }}>
            Download your summarization
          </span>
        </div>
      </div>
    </div>
  );
};

export default FileSectionProcess;
