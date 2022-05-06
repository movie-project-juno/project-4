//Set up api in our App.js
import axios from "axios";
import { useEffect, useState } from "react";

//Components
import Movie from "./Components/Movie";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //grab information from moviedb API
    //store our keys
    //search for a movie
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
      console.log(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Testing Movie API</h1>
      <main>
        {movies.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </main>
    </div>
  );
};

export default App;
