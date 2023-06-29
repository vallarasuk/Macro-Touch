import React from "react";

const FilePreview = ({
  filePreview,
  fileName,
  handleReupload,
  handleUpload,
  isProcessing,
}) => {
  return (
    <div>
      <span className="py-5">File Preview: <strong>{fileName}</strong></span>
      {filePreview.startsWith("data:image") ? (
        <img src={filePreview} alt="File Preview" />
      ) : (
        <></>
        // <p>{filePreview}</p> to preview the file
      )}
      {!isProcessing && (
        <div className="justify-content-center align-items-center d-flex">
          <button className="remove-btn mx-3" onClick={handleReupload}>Remove</button>
          <button className="upload-btn mx-3" onClick={handleUpload}>
            Upload
          </button>
         
        </div>
      )}
    </div>
  );
};

export default FilePreview;
