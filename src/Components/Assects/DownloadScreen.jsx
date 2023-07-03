import React from 'react';
// import downloadPreview from "../Images/downlaodvector.png";

const DownloadScreen = () => {
  return (
    <div className='text-center d-flex flex-column align-items-center justify-content-center'>
      <div className='my-5'>
        <div className="download-preview">
          {/* <img src={downloadPreview} alt='download preview' /> */}
          <div className="preview-text d-flex justify-content-center align-items-end">
            <button className="preview-button">Preview</button>
          </div>
        </div>
        <button className='download-btn my-5'>Download report</button>
      </div>
    </div>
  );
};

export default DownloadScreen;
