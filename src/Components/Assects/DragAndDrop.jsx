import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "react-modal";
import DragUpload from "../Images/Upload icon drag nd drop.svg";
import BankSelect from "./BankSelect";
import { CSSTransition } from "react-transition-group";
import OppsError from "./OppsError";
import Btn from "./Button";
import FilePreview from "./FilePreview";
import FileSectionProcess from "./FileSectionProcess";

const DragAndDropComponent = () => {
  const acceptedFormats = ["image/jpeg", "application/pdf", "text/csv"];
  const [filePreview, setFilePreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false); // Track if processing is in progress

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (
      rejectedFiles.length > 0 ||
      !acceptedFormats.includes(acceptedFiles[0].type)
    ) {
      setModalIsOpen(true);
      return;
    }

    const file = acceptedFiles[0];
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setFilePreview(reader.result);
    };

    if (file.type.startsWith("image")) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsText(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFormats.join(","),
    multiple: false,
  });

  const handleReupload = () => {
    setFilePreview(null);
    setFileName("");
    setErrorMessage("");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFilePreview(null);
    setFileName("");
    setErrorMessage("");
  };

  const closeSuccessModal = () => {
    setSuccessModalIsOpen(false);
  };

  const handleUpload = (value) => {
    // Perform processing logic here
    setIsProcessing(true);

    // Simulating processing delay with setTimeout
    setTimeout(() => {
      setIsProcessing(false);
      setSuccessModalIsOpen(true); // Show the success modal
    }, 2000);
  };

  return (
    <div>
      <FileSectionProcess
        uploadStyle={{ color: fileName ? "black" : "gray" }}
        processStyle={{ color: fileName ? "black" : "gray" }}
        downloadStyle={{ color: fileName ? "black" : "gray" }}
      />
      <div
        {...getRootProps()}
        className={`dropzone my-3 ${isDragActive ? "active" : ""}`}
      >
        <div className="my-5">
          <input {...getInputProps()} />
          <img src={DragUpload} alt="drag and drop upload icon" />
          <h1>
            Drag and drop file or{" "}
            <span className="browser_color text-decoration-underline">
              Browser
            </span>
          </h1>
          <p className="text-muted">Supported formats: JPEG, PDF, CSV</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <BankSelect
            filePreview={filePreview}
            fileName={fileName}
            handleReupload={handleReupload}
            handleUpload={handleUpload}
            isProcessing={isProcessing}
          />
        </div>
        
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Error Modal"
        shouldCloseOnOverlayClick={false}
        className={{
          base: "modal-appear",
          afterOpen: "modal-appear-active",
          beforeClose: "modal-appear",
        }}
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          },
          content: {
            position: "relative",
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
            minWidth: "500px",
            margin: "20px",
            padding: "0px",
            backgroundColor: "transparent",
            border: "none",
          },
        }}
      >
        <div className="text-white oops-parent">
          <OppsError onClose={closeModal} />
        </div>
      </Modal>

      <CSSTransition
        in={successModalIsOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <Modal
          isOpen={successModalIsOpen}
          onRequestClose={closeSuccessModal}
          contentLabel="Success Modal"
          style={{
            overlay: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              position: "relative",
              top: "auto",
              left: "auto",
              right: "auto",
              bottom: "auto",
              maxWidth: "400px",
              margin: "auto",
            },
          }}
        >
          <div className="success-container">
            <i className="fas fa-check-circle"></i>
            <h2>Success</h2>
            <p>File uploaded successfully.</p>
            <button onClick={closeSuccessModal}>Close</button>
          </div>
        </Modal>
      </CSSTransition>

      {/* Processing Screen */}
      {isProcessing && (
        <div className="processing-screen">
          <h2>Processing...</h2>
          <p>Please wait while the file is being processed.</p>
        </div>
      )}
    </div>
  );
};

export default DragAndDropComponent;
