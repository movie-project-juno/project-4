import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context";
import MovieModal from "./MovieModal";
//Imporrting movies from context
const Movies = () => {
  const [movie, setMovie] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const {movies, genres} = useContext(UserContext);
  console.log("MOVIES", movies);
  const toggleModal = (movie) => {
    setMovie(movie);
    setOpenModal(true);
  };




  // Looping and rendering a list of movies
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
          {genres.map((genre) => {
            return(
              <p>{genre.name}</p>
            )
          })}
          <div className="movieText">
            <p>{movie.overview}</p>
          </div>
          <div className="buttons-container">
            <button>Watch trailer</button>
            <button onClick={() => toggleModal(movie)}>More</button>

            <button>Add to List</button>
          </div>
        </div>
      </article>
    ));
  };
  //Render movie list and modal
  return (
    <>
      {renderMovies()}
      <MovieModal
        movie={movie}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default Movies;
