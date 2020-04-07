import React from "react";
import styles from "./Btn.module.scss";
import Button from "react-bootstrap/Button";

const Btn = (props) => {
  const { handleClick, text, type, size } = props;

  return (
    <>
      <Button onClick={handleClick} variant={type} size={size}>
        {text}
      </Button>
    </>
  );
};

export default Btn;
