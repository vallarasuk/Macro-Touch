import React, { useState } from "react";

const DownloadScreen = ({ userId }) => {
  const [backendData, setBackendData] = useState(null);

  const fetchData = async () => {
    try {
      // Make an API call to fetch backend data for the user
      const response = await fetch(
        `https://your-backend-api.com/users/${userId}`
      );
      const data = await response.json();

      // Set the fetched data in the state
      setBackendData(data);
    } catch (error) {
      console.log("Error fetching backend data:", error);
    }
  };

  const downloadReport = async () => {
    try {
      // Make an API call to fetch the report file for the user
      const response = await fetch(
        `https://your-backend-api.com/reports/${userId}`,
        {
          method: "GET",
          headers: {
            // Add any required headers, such as authentication tokens
            // if your backend requires them for downloading the report.
          },
        }
      );
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element to initiate the download
      const link = document.createElement("a");
      link.href = url;
      link.download = "report.pdf"; // Set the desired file name

      // Simulate a click on the link element to initiate the download
      link.click();

      // Clean up the temporary objects
      window.URL.revokeObjectURL(url);
      link.remove();
    } catch (error) {
      console.log("Error downloading report:", error);
    }
  };

  return (
    <div className="text-center d-flex flex-column align-items-center justify-content-center">
      <div className="my-5">
        {/* Display backend data */}
        {backendData && (
          <div>
            {/* Render the backend data in your desired format */}
            {/* For example: */}
            <h1>{backendData.name}</h1>
            <p>{backendData.email}</p>
          </div>
        )}

        <div className="download-preview">
          {/* Your download preview content */}
          <div className="preview-text d-flex justify-content-center align-items-end">
            <button className="preview-button" onClick={fetchData}>
              Preview
            </button>
          </div>
        </div>
        <button className="download-btn my-5" onClick={downloadReport}>
          Download report
        </button>
      </div>
    </div>
  );
};

export default DownloadScreen;
