import React, { useState } from "react";
import SuccessMessage from "./SuccessMessage";

const ParentComponent = () => {
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(true);

  const closeSuccessModal = () => {
    setSuccessModalIsOpen(false);
  };

  return (
    <div className="container">
      {/* Other content */}
      <div className="row justify-content-center">
        <div className="col-sm-8">
          {successModalIsOpen && (
            <SuccessMessage closeModal={closeSuccessModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;
