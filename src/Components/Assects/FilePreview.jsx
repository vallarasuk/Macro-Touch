import React from "react";

const FilePreview = ({
  filePreview,
  fileName,
  handleReupload,
  handleUpload,
  isProcessing,
}) => {
  const isImagePreview = filePreview && filePreview.startsWith("data:image");

  return (
    <div>
      <span className="py-5" style={{ fontSize: "18px" }}>
        File Preview: <strong>{fileName}</strong>
      </span>
      {isImagePreview ? (
        <img
          src={filePreview}
          alt="File Preview"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ) : (
        filePreview && <p>{filePreview}</p>
      )}
      {!isProcessing && (
        <div
          className="justify-content-center align-items-center d-flex"
          style={{ marginTop: "20px" }}
        >
          <button
            className="remove-btn mx-3"
            onClick={handleReupload}
            style={{ fontSize: "16px" }}
          >
            Remove
          </button>
          <button
            className="upload-btn mx-3"
            onClick={handleUpload}
            style={{ fontSize: "16px" }}
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default FilePreview;
