import React from "react";
import Btn from "./Button";

const FilePreview = ({
  filePreview,
  fileName,
  handleReupload,
  handleUpload,
  isProcessing,
}) => {
  return (
    <div>
      <h3>File Preview: {fileName}</h3>
      {filePreview.startsWith("data:image") ? (
        <img src={filePreview} alt="File Preview" />
      ) : (
        <></>
        // <p>{filePreview}</p> to preview the file
      )}
      {!isProcessing && (
        <div>
          <button onClick={handleReupload}>Remove</button>
          {/* <button className="upload-btn" onClick={handleUpload}>
            Upload
          </button> */}
          <Btn
            button_name="Upload"
            className="upload-btn"
            onClick={handleUpload}
          />
        </div>
      )}
    </div>
  );
};

export default FilePreview;
