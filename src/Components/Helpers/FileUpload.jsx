import React from "react";

import DragAndDropComponent from "../Assects/DragAndDrop";
import Credit from "../Assects/Credit";

const FileUpload = () => {
  return (
    <div className="container file-section-container">
      <Credit  creditCount="2"/>
      <DragAndDropComponent />
    </div>
  );
};

export default FileUpload;
