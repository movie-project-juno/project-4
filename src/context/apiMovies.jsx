import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import firebase from "../scripts/firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";

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
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data", data);
      setFavList(data);
    });
    fetchData();
  }, []);

  useEffect(() => {
    movies.forEach((movie) => {
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
        setGenres(response.data.genres);
      };
      fetchGenres(movie.id);
    });
  }, [movies]);

  const saveNewFav = (movie) => {
    set(ref(db, "favlist/" + movie.id), {
      name: movie.name || movie.title,
      time: Date.now(),
    });
  };

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={{ movies, genres, favList, saveNewFav }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
