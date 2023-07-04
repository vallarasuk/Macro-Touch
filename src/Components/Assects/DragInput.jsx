import React from "react";
import DragUpload from "../Images/Upload icon drag nd drop.svg";

const DragInput = ({ isDragActive, getInputProps, getRootProps }) => {
  return (
    <div
      {...getRootProps()}
      className={`dropzone my-3 ${isDragActive ? "active" : ""}`}
      style={{
        textAlign: "center",
        padding: "20px",
        border: "2px dashed #bbb",
        borderRadius: "5px",
        background: "#f9f9f9",
      }}
    >
      <div className="my-5">
        <input {...getInputProps()} />
        <img
          src={DragUpload}
          alt="drag and drop upload icon"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <h1 style={{ fontSize: "24px", margin: "10px 0" }}>
          Drag and drop file or{" "}
          <span
            className="browser_color text-decoration-underline"
            style={{ color: "#7201C2" }}
          >
            Browser
          </span>
        </h1>
        <p className="text-muted" style={{ fontSize: "14px" }}>
          Supported formats: JPEG, PDF, CSV
        </p>
      </div>
    </div>
  );
};

export default DragInput;
