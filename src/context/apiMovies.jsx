import axios from "axios";
import { getDatabase, onValue, ref, set } from "firebase/database";
import React, { createContext, useEffect, useState } from "react";

import firebase from "../scripts/firebase";

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [favList, setFavList] = useState();

  const db = getDatabase(firebase);
  const starCountRef = ref(db, "favlist");

  const fetchData = async () => {
    const {
      data: { results: movies },
    } = await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/day?",
      params: {
        format: "json",
        api_key: "9279e74f93d44d00c0b5afd5efff4065",
      },
    });
    setMovies(movies);
  };
  // fetch a user from a fake backend API
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results: movies },
      } = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/all/day?",
        params: {
          format: "json",
          api_key: "9279e74f93d44d00c0b5afd5efff4065",
        },
      });
      getGenres(movies);

      // TO DO DELETE THIS RESPONSE22 - using just to get image sizes
      const response22 = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/configuration?api_key=9279e74f93d44d00c0b5afd5efff4065",
      });
    };
    fetchData();
  }, []);

  const getGenres = (movies) => {
    const newMovies = [...movies];
    newMovies.forEach((movie) => {
      // console.log(movie.id)

      const fetchGenres = async (movie_id) => {
        const response = await axios({
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${movie_id}`,
          params: {
            format: "json",
            api_key: "9279e74f93d44d00c0b5afd5efff4065",
          },
        });
        movie.genreDetails = response.data.genres;
        movie.durationDetails = response.data.runtime;
      };
      fetchGenres(movie.id);
    });
    console.log(newMovies);
    setMovies(newMovies);
  };

  const removeFromNewFav = (movie) => {
    remove(ref(db, "favlist/" + movie.id));
  };

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider
      value={{ movies, genres, favList, saveNewFav, removeFromNewFav }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
