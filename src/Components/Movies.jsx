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
    return movies.map((movie) => {
      const isInFavList = favList && !!favList[movie.id];
      return (
        <article key={movie.id} className="movieContainer">
          <div className="moviePoster">
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className="movieDetails">
            <div className="title">
              <h2>
                {movie.original_title || movie.original_name || movie.name}
              </h2>
              {isInFavList ? (
                <FontAwesomeIcon
                  icon={faHeart}
                  size="lg"
                  className="iconAdd"
                  onClick={(event) => removeFromNewFav(movie)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeartCirclePlus}
                  size="lg"
                  className="iconFav"
                  onClick={(event) => saveNewFav(movie)}
                />
              )}
            </div>

            <p>
              {movie.original_language}, Release date: {movie.release_date}
            </p>

            <p>Rate: {movie.vote_average}</p>
            {movie.genreDetails && <p>{movie.genreDetails[0].name}</p>}

            <div className="buttonsContainer">
              {/* <button>Watch trailer</button> */}
              <button onClick={() => toggleModal(movie)} className="hover">
                Read More
              </button>
            </div>
          </div>
        </article>
      );
    });
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
