import { faHeart, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";

import { UserContext } from "../context/apiMovies";
import MovieModal from "./MovieModal";

//Importing movies from context
const Movies = () => {
  const [movie, setMovie] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const { movies, saveNewFav, removeFromNewFav, favList } =
    useContext(UserContext);

  const toggleModal = (movie) => {
    setMovie(movie);
    setOpenModal(true);
  };

  // Looping and rendering a list of movies
  const renderMovies = () => {
    return movies.map((movie) => (
      <article key={movie.id} className="movieContainer">
        <div className="moviePoster">
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div className="movieDetails">
          <div className="title">
            <h2>{movie.original_title || movie.original_name || movie.name}</h2>
            <FontAwesomeIcon
              icon={faHeartCirclePlus}
              size="lg"
              className="iconAdd"
              onClick={faHeart}
            />
          </div>

          <p>Rating: {movie.vote_average}</p>
          {movie.genreDetails && <p>{movie.genreDetails[0].name}</p>}

          <a href="https://www.youtube.com/watch?v="></a>

          <div className="buttonsContainer">
            <button onClick={() => toggleModal(movie)} className="hover">
              Read More
            </button>
            
            <button className="trailer">Watch trailer</button>

          </div>
        </div>
      </article>
    ));
  };
  //Render movie list
  return (
    <main className="wrapper container">
      {renderMovies()}
      <MovieModal
        movie={movie}
        favList={favList}
        openModal={openModal}
        setOpenModal={setOpenModal}
        saveNewFav={saveNewFav}
        removeFromNewFav={removeFromNewFav}
      />
    </main>
  );
};

export default Movies;