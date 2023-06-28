import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "react-modal";
import DragUpload from "../Images/Upload icon drag nd drop.svg";
import BankSelect from "./BankSelect";
import { CSSTransition } from "react-transition-group";

const DragAndDropComponent = () => {
  const acceptedFormats = ["image/jpeg", "application/pdf", "text/csv"];
  const [filePreview, setFilePreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

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
      setSuccessModalIsOpen(true); // Show the success modal
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
  };

  const closeSuccessModal = () => {
    setSuccessModalIsOpen(false);
  };

  return (
    <div>
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
          <p className="text-muted">Supported formates : JPEG, PDF, CSV</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <BankSelect />
        </div>
      </div>
      {filePreview ? (
        <div>
          <h3>File Preview: {fileName}</h3>
          {filePreview.startsWith("data:image") ? (
            <img src={filePreview} alt="File Preview" />
          ) : (
            <></>
            // <p>{filePreview}</p> to preview the file
          )}
          <div>
            <button onClick={handleReupload}>Reupload</button>
          </div>
        </div>
      ) : null}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Error Modal"
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
        <h2>Error</h2>
        <p>Please upload a JPEG, PDF, or CSV file.</p>
        <button onClick={closeModal}>Close</button>
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
    </div>
  );
};

export default DragAndDropComponent;
