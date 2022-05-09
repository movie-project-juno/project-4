import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [movies, setMovies] = useState([]);

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
      setMovies(movies);

      // TO DO DELETE THIS RESPONSE22 - using just to get image sizes
      const response22 = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/configuration?api_key=9279e74f93d44d00c0b5afd5efff4065",
      });
      console.log("=====", response22);
    };

    fetchData();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={movies}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };