import React from "react";
import { useDropzone } from "react-dropzone";

const DragAndDropComponent = () => {
  const acceptedFormats = ["image/jpeg", "application/pdf", "text/csv"];

  const onDrop = (acceptedFiles, rejectedFiles) => {
    // Handle the dropped files here
    console.log("Accepted Files:", acceptedFiles);
    console.log("Rejected Files:", rejectedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFormats.join(","),
  });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      <p>Drag and drop files here (JPEG, PDF, CSV only)</p>
    </div>
  );
};

export default DragAndDropComponent;
