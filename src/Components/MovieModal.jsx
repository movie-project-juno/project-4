import { useState, useContext } from "react";
import { DBContext } from "../context/firebaseConnection";

const MovieModal = ({ movie, openModal, setOpenModal, saveNewFav, removeFromNewFav }) => {      //HERE TDM !!!!!!!!!!!!!! 
  const userList = useContext(DBContext);

  //Handling the event of adding a movie to a list
  const [addMovie, setAddMovie] = useState([]);
  const [removedMovie, setRemovedMovie] = useState([]);

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
                <p>Rate: {movie.vote_average}</p>
                <div className="modalText">
                  <p>{movie.overview}</p>
                </div>
                <div className="buttonsContainer">
                  <button onClick={(event) => saveNewFav(movie)}>Add</button>
                  <button onClick={(event) => removeFromNewFav(movie)}>Remove</button>
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
