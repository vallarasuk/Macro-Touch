import React from "react";
import DragUpload from "../Images/Upload icon drag nd drop.svg";

const DragInput = ({ isDragActive, getInputProps, getRootProps }) => {
  return (
    <div {...getRootProps()} className={`dropzone my-3 ${isDragActive ? "active" : ""}`}>
      <div className="my-5">
        <input {...getInputProps()} />
        <img src={DragUpload} alt="drag and drop upload icon" />
        <h1>
          Drag and drop file or
          <span className="browser_color text-decoration-underline">
            Browser
          </span>
        </h1>
        <p className="text-muted">Supported formats: JPEG, PDF, CSV</p>
      </div>
    </div>
  );
};

export default DragInput;
