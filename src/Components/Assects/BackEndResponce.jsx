import React from 'react'

const BackEndResponce = () => {
    const handleUpload = (value) => {
        if (!selectedBank) {
          setErrorMessage("Please select a bank");
          return;
        }
      
        // Perform processing logic here
        setIsProcessing(true);
      
        // Create a FormData object to send the file and other data to the backend
        const formData = new FormData();
        formData.append("file", filePreview);
        formData.append("fileName", fileName);
        formData.append("selectedBank", selectedBank);
      
        // Send the data to the backend using an HTTP request (e.g., using fetch or axios)
        fetch("your-backend-api-url", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            // Handle the response from the backend
            if (response.ok) {
              // Processing successful
              setSuccessModalIsOpen(true); // Show the success modal
            } else {
              // Processing failed
              setErrorMessage("Error occurred during processing. Please try again.");
            }
          })
          .catch((error) => {
            // Handle any network or other errors
            setErrorMessage("Error occurred during processing. Please try again.");
          })
          .finally(() => {
            setIsProcessing(false); // Stop the processing state
          });
      };
      
  return (
    <div>
      
    </div>
  )
}

export default BackEndResponce
