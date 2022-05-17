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
              <figure className="moviePosterModal">
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.name || movie.title}
                  className="imageModal"
                />
              </figure>


              <div className="modalDetails">
                <h3>{movie.name || movie.title}</h3>
                <p className="modalGenre">{movie.genreDetails[0].name ? movie.genreDetails[0].name : null }</p>
                <p className="modalRating">⭐ {movie.vote_average}/10</p>
                <div className="modalText">
                  <p>{movie.overview}</p>
                </div>
                <div className="movieDetailList">
                  <p><span className="description">Runtime:</span> {movie.durationDetails} minutes</p>
                  <p><span className="description">Language:</span> <span className="language">{movie.original_language}</span></p>
                  <p><span className="description">Release date:</span> {movie.release_date}</p>

                  <div className="cast">
                  <p><span className="description">Cast:</span>
                  </p>
                    <ul className="castListOrder">{movie.castDetails.slice(0,3).map((cast, index) => {
                      return(
                        <li key={index} className="castList">
                          {cast.name}
                        </li>
                      )
                    })}</ul>
                  </div>

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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/{movie.videoDetails[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                {/* <button onClick="https://www.youtube.com/watch?v={movie.videoDetails[0].key}">Watch trailer</button>  */}



              </div>
            </article>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MovieModal;
