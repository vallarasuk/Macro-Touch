// Parent Component
import React, { useState } from "react";
import SuccessMessage from "./SuccessMessage";

const ParentComponent = () => {
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(true);

  const closeSuccessModal = () => {
    setSuccessModalIsOpen(false);
  };

  return (
    <div>
      {/* Other content */}
      {successModalIsOpen && <SuccessMessage closeModal={closeSuccessModal} />}
    </div>
  );
};

export default ParentComponent;
