import React from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = (props) => {
  const { years, handleInput } = props;

  return (
    <>
      <section>
        <label for="year">Choose year: </label>
        <select id="year" onChange={(event) => handleInput(event.target.value)}>
          {years.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </select>
      </section>
    </>
  );
};

export default Dropdown;
