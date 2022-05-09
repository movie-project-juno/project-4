import React, { useContext } from "react";

import { UserContext } from "../context";

const Movies = () => {
  const movies = useContext(UserContext);
  console.log(movies);

  const renderMovies = () => {
    return movies.map((movie) => (
      <article key={movie.id} className="movieContainer">
        <figure className="moviePoster">
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.original_title}
          />
        </figure>
        <div className="movieDetails">
          <h2>{movie.original_title}</h2>

          <p>{movie.vote_average}</p>
          <div className="movieText">
            <p>{movie.overview}</p>
          </div>
          <div className="buttons-container">
            <button type="submit">Watch trailer</button>
            <button type="submit">Share</button>

            <button type="submit">Add to List</button>
          </div>
        </div>
      </article>
    ));
  };

  return (
    <>
      {renderMovies()}
      <div className="movieModal">
        <div className="moviesModalContainer"></div>
      </div>
    </>
  );
};

export default Movies;
