import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [item, updateItem] = useState(null);
  const [year, updateYear] = useState(null);
  const [movies, updateMovie] = useState(null);

  // useEffect(() => {
  //   makeYears();
  // }, []);

  const print = () => {
    if (movies) {
      if (movies.Response === "False") {
        return <p>{movies.Response}</p>;
      } else {
        return movies.Search.map((movie) => (
          <>
            <p>{movie.Title}</p>
            <button onClick={() => getMovie(movie.imdbID)}>
              Get more info
            </button>
          </>
        ));
      }
    }
  };

  const getMovie = (imdbId) => {
    fetch(`http://www.omdbapi.com/?apikey=f7e6a725&t=${imdbId}`)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        updateMovie(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const years = [];

  const makeYears = () => {
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
      years.push(i);
    }
  };

  const callApi = () => {
    fetch(`http://www.omdbapi.com/?apikey=f7e6a725&s=${item}&y=${year}`)
      .then((result) => result.json())
      .then((result) => {
        // if (result.Response == "False") {
        //   fallGracefuly();
        // } else {
        updateMovie(result);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const fallGracefuly = () => {
  //   return <p>Movie not found</p>;
  // };
  return (
    <>
      {makeYears()}
      <InputField handleInput={(value) => updateItem(value)} />
      <Button handleClick={callApi} />
      <Dropdown years={years} handleInput={(value) => updateYear(value)} />
      {print()}
    </>
  );
}

export default App;
