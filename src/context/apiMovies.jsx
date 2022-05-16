import axios from "axios";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import React, { createContext, useEffect, useState } from "react";

import firebase from "../scripts/firebase";

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [movies, setMovies] = useState([]);
  const [favList, setFavList] = useState();

  const db = getDatabase(firebase);
  const starCountRef = ref(db, "favlist");

  // fetch a user from a fake backend API
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // console.log("data", data);
      setFavList(data);
    });

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = async () => {
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
  };

  const getGenres = (movies) => {
    const newMovies = [...movies];
    newMovies.forEach((movie) => {
      const fetchGenres = async (movie_id) => {
        const response = await axios({
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${movie_id}`,
          params: {
            format: "json",
            api_key: "9279e74f93d44d00c0b5afd5efff4065",
          },
        });
        movie.genreDetails = response.data.genres
        movie.durationDetails = response.data.runtime;
      };
      fetchGenres(movie.id);
    });
    setMovies(newMovies);
  };

  const removeFromNewFav = (movie) => {
    remove(ref(db, "favlist/" + movie.id));
  };

  const saveNewFav = (movie) => {
    set(ref(db, "favlist/" + movie.id), {
      name: movie.name || movie.title,
      time: Date.now(),
    });
  };

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider
      value={{ movies, favList, saveNewFav, removeFromNewFav }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };