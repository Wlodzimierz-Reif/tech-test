import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { handleClick } = props;

  return (
    <>
      <button onClick={handleClick}>Search</button>
    </>
  );
};

export default Button;
