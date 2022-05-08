import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//Components
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

//Style

import "./styles/App.scss";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //grab information from moviedb API
    //store our keys
    //search for movies
    const fetchData = async () => {
      const response = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/all/day?",
        params: {
          format: "json",
          api_key: "9279e74f93d44d00c0b5afd5efff4065",
        },
      });
      // TO DO DELETE THIS RESPONSE22 - using just to get image sizes
      const response22 = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/configuration?api_key=9279e74f93d44d00c0b5afd5efff4065",
      });
      setMovies(response.data.results);
      console.log("=====", response22);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <main className="wrapper container">
        {movies.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default App;
