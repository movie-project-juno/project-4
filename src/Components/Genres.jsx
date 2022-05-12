//Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { UserContext } from "../context";

const Genres = () => {
  useEffect(() => {
    // const fetchGenres = async (movie_id) => {
    //     const response = await axios({
    //         method: "GET",
    //         // url: "https://api.themoviedb.org/3/genre/movie/list",
    //         url: "https://api.themoviedb.org/3/movie/{movie_id}",
    //         params: {
    //             format: "json",
    //             api_key: "9279e74f93d44d00c0b5afd5efff4065",
    //         },
    //     });
    //     console.log(response)
    // }
    // fetchGenres();
  }, []);

  return <div className="topic"></div>;
};

export default Genres;
