import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "react-modal";
import BankSelect from "./BankSelect";
import { CSSTransition } from "react-transition-group";
import OppsError from "./OppsError";
import Btn from "./Button";
import FileSectionProcess from "./FileSectionProcess";
import DragInput from "./DragInput";
import Processing from "./Processing";
import DownloadScreen from "./DownloadScreen";

const DragAndDropComponent = () => {
  const acceptedFormats = ["image/jpeg", "application/pdf", "text/csv"];
  const [filePreview, setFilePreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showDownloadScreen, setShowDownloadScreen] = useState(false);

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
    if (!selectedBank) {
      setErrorMessage("Please select a bank");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setSuccessModalIsOpen(true);
      setShowDownloadScreen(true);
      setFileName(fileName);
    }, 10000);
  };

  const uploadStyle = showDownloadScreen ? "text-muted" : "text-dark";
  const processStyle = isProcessing ? "text-dark" : "text-muted";
  const downloadStyle = showDownloadScreen
    ? processStyle === "text-dark"
      ? "text-muted"
      : "text-dark"
    : "text-muted";
  const isNextStepAllowed = filePreview && fileName && selectedBank;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <FileSectionProcess
            uploadStyle={uploadStyle}
            processStyle={processStyle}
            downloadStyle={downloadStyle}
          />

          {isProcessing ? (
            <Processing />
          ) : showDownloadScreen ? (
            <DownloadScreen fileName={fileName} />
          ) : (
            <>
              <DragInput
                isDragActive={isDragActive}
                getInputProps={getInputProps}
                getRootProps={getRootProps}
              />
              <div className="row">
                <div className="col-12">
                  <BankSelect
                    filePreview={filePreview}
                    fileName={fileName}
                    handleReupload={handleReupload}
                    handleUpload={handleUpload}
                    isProcessing={isProcessing}
                    selectedBank={selectedBank}
                    setSelectedBank={setSelectedBank}
                  />
                  {errorMessage && <p>{errorMessage}</p>}
                </div>
              </div>

              {isNextStepAllowed && (
                <div className="d-flex justify-content-center mt-4">
                  <Btn text="Next Step" onClick={handleUpload} />
                </div>
              )}
            </>
          )}

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
        </div>
      </div>
    </div>
  );
};

export default DragAndDropComponent;
