import React from "react";
import { Button } from "react-bootstrap";

const Btn = ({ button_name }) => {
  return (
    <div>
      <Button variant="outline-primary">{button_name}</Button>
    </div>
  );
};

export default Btn;
