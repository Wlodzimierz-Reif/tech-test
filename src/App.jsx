import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import Btn from "./components/Btn";
import InputField from "./components/InputField";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [item, updateItem] = useState(null);
  const [year, updateYear] = useState(null);
  const [movies, updateMovies] = useState(null);
  const [movie, updateMovie] = useState(null);

  const years = [];

  const makeYears = () => {
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
      years.push(i);
    }
  };

  // useEffect(() => {
  //   makeYears();
  // }, []);

  const print = () => {
    if (movies) {
      if (movies.Response === "False") {
        return <p>There's no such movie in the database</p>;
      } else {
        return movies.Search.map((movie) => (
          <>
            <div>
              <p className={styles.title}>{movie.Title}</p>
              <Btn
                handleClick={() => getMovie(movie.imdbID)}
                text="More info"
                variant="info"
              />
            </div>
          </>
        ));
      }
    }
  };

  // const printMovie = () => {
  //   if (movie) {
  //     console.log(movie);
  //     for (let key in movie) {
  //       return (
  //         <>
  //           <p>
  //             {key}: {movie[key]}
  //           </p>
  //         </>
  //       );
  //     }
  //   }
  // };

  // const printMovie = (singleMovie) => {
  //   if (singleMovie) {
  //     const values = Object.entries(singleMovie);
  //     values.map(([key, value]) => {
  //       if (typeof key == "object") {
  //         printMovie(key);
  //       } else {
  //         console.log(key, value);
  //         return (
  //           <p>
  //             {key}: {value}
  //           </p>
  //         );
  //       }
  //     });
  //   }
  // };

  const printMovie = () => {
    if (movie) {
      window.scrollTo(0, 0);
      return (
        <>
          <p>Title: {movie.Title}</p>
          <p>Year: {movie.Year}</p>
          <p>Rated: {movie.Rated}</p>
          <p>Released: {movie.Released}</p>
          <p>Runtime: {movie.Runtime}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Director: {movie.Director}</p>
          <p>Writer: {movie.Writer}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Plot: {movie.Plot}</p>
          <p>Language: {movie.Language}</p>
          <p>Country: {movie.Country}</p>
          <p>Awards: {movie.Awards}</p>
          {/* <p>Ratings:</p>
          <p>
            {movie.Ratings[0].Source}: {movie.Ratings[0].Value}
          </p>
          <p>
            {movie.Ratings[1].Source}: {movie.Ratings[1].Value}
          </p>
          <p>
            {movie.Ratings[2].Source}: {movie.Ratings[2].Value}
          </p> */}
          <p>Metascore: {movie.Metascore}</p>
          <p>imdbRating: {movie.imdbRating}</p>
          <p>imdbVotes: {movie.imdbVotes}</p>
          <p>imdbID: {movie.imdbID}</p>
          <p>Type: {movie.Type}</p>
          <p>DVD: {movie.DVD}</p>
          <p>BoxOffice: {movie.BoxOffice}</p>
          <p>Production: {movie.Production}</p>
          <p>Website: {movie.Website}</p>
        </>
      );
    }
  };

  const getMovie = (imdbId) => {
    fetch(`http://www.omdbapi.com/?apikey=f7e6a725&i=${imdbId}`)
      .then((result) => result.json())
      .then((result) => {
        updateMovie(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const callApi = () => {
    fetch(`http://www.omdbapi.com/?apikey=f7e6a725&s=${item}&y=${year}`)
      .then((result) => result.json())
      .then((result) => {
        updateMovies(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {makeYears()}
      <InputField handleInput={(value) => updateItem(value)} />
      <Btn handleClick={callApi} text="Search" type="primary" size="sm" />
      <Dropdown years={years} handleInput={(value) => updateYear(value)} />
      {printMovie()}
      {print()}
    </>
  );
}

export default App;
