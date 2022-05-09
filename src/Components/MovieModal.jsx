const MovieModal = ({ movie, openModal, setOpenModal }) => {
  //Displaying a modal with movie details
  console.log(movie);
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
                <p>{movie.vote_average}</p>
                <div className="modalText">
                  <p>{movie.overview}</p>
                </div>
                <div className="buttons-container">
                  <button>Watch trailer</button>
                  <button>More</button>

                  <button>Add to List</button>
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
