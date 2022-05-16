const MovieModal = ({
  movie,
  openModal,
  setOpenModal,
  favList,
  saveNewFav,
  removeFromNewFav,
}) => {
  // check if movie is already in FavList
  const inFavlist = favList && !!favList[movie.id];

  //Displaying a modal with movie details
  return (
    <>
      {openModal ? (
        <div className="movieModal">
          <div className="moviesModalContainer">
            <div className="closeButton" onClick={() => setOpenModal(false)}>
              X
            </div>
            <article key={movie.id} className="modalContent">
              <figure className="moviePoster">
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.name || movie.title}
                />
              </figure>
              <div className="modalDetails">
                <h3>{movie.name || movie.title}</h3>
                <p>{movie.genreDetails[0].name}</p>
                <p>Rate: {movie.vote_average}</p>
                <p>Runtime: {movie.durationDetails} minutes</p>
                <button>Watch Trailer</button>
                <div className="modalText">
                  <p>{movie.overview}</p>
                </div>
                <div className="buttonsContainer">
                  {inFavlist ? (
                    <button onClick={(event) => removeFromNewFav(movie)}>
                      Remove
                    </button>
                  ) : (
                    <button onClick={(event) => saveNewFav(movie)}>Add</button>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MovieModal;
