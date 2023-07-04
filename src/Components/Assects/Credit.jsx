import React from "react";
import PropTypes from "prop-types";

const Credit = ({ creditCount }) => {
  return (
    <div>
      <div className="text-center my-3">
        <h1 className="my-3">Get the summarization</h1>
        <span className="credit-score">{creditCount} credit remaining</span>
      </div>
    </div>
  );
};

Credit.propTypes = {
  creditCount: PropTypes.number.isRequired,
};

export default Credit;
