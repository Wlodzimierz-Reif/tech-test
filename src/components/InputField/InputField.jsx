import React from "react";
import styles from "./InputField.module.scss";
import { useState } from "react";

const InputField = (props) => {
  const [searchedItem, updateItem] = useState(null);
  const { handleInput } = props;

  // const changeInput = (item) => {
  //   updateItem(item);
  //   handleInput(searchedItem);
  // };
  handleInput(searchedItem);

  return (
    <>
      <input onInput={(event) => updateItem(event.target.value)}></input>
    </>
  );
};

export default InputField;
