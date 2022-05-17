import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/apiMovies";
import MovieModal from "./MovieModal";

const NaturalList = () => {
  const { movies, favList, saveNewFav, removeFromNewFav } =
    useContext(UserContext);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedTime, setSelectedTime] = useState(0);
  const [favGenres, setFavGenres] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [isGoodMatch, setIsGoodMatch] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  //   creates an array with unique genres from the fav movies
  useEffect(() => {
    if (favList && Object.keys(favList).length && movies.length) {
      const genreArray = [];
      for (const favMovie of Object.values(favList)) {
        if (favMovie.genres && favMovie.genres[0]) {
          genreArray.push(favMovie.genres[0].name);
        }
      }
      setFavGenres([...new Set(genreArray)]);
    }
  }, [movies, favList]);

  //Capture changes from dropdown menus below and update each of their states 👇👇👇
  // Pass updated States to Index.jsk to use as search Params for API
  const selectedGenreHandler = (event) => {
    const selectedGenre = event.target.value;
    setSelectedGenre(selectedGenre);
  };
  const selectedTimeHandler = (event) => {
    const selectedTime = event.target.value;
    setSelectedTime(selectedTime);
  };
  const findBestMovie = () => {
    const filteredMovies = movies.filter((movie) => {
      const movieGenre = movie.genreDetails[0]?.name;
      const isMatch =
        favGenres.includes(movieGenre) && movie.durationDetails < selectedTime;
      return isMatch;
    });
    //If movie matches genre and time, show random movie from match
    if (filteredMovies.length) {
      setSelectedMovie(
        filteredMovies[Math.floor(Math.random() * filteredMovies.length)]
      );
      setIsGoodMatch(true);
    } else {
      //show a random movie from all movies
      setSelectedMovie(movies[Math.floor(Math.random() * movies.length)]);
      setIsGoodMatch(false);
    }
    setOpenModal(true);
  };
  return (
    <aside>
      <form
        id="NLForm"
        className="NLForm"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <p className="NLParagraph"> I feel like watching a</p>
        <select onChange={selectedGenreHandler} value={selectedGenre}>
          <option value="" hidden>
            Choose...
          </option>
          {favGenres.length > 0 ? (
            favGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))
          ) : (
            <option value="">No Favorite items found...</option>
          )}
        </select>
        <br />
        <p className="NLParagraph">and I have</p>
        <select onChange={selectedTimeHandler} value={selectedTime}>
          <option value="" hidden>
            Choose...
          </option>
          <option value={90}>Less than an hour and a half</option>
          <option value={120}>Less than two hours</option>
          <option value={500}>All the time in the world</option>
        </select>
        {selectedGenre && selectedTime ? (
          <button onClick={findBestMovie}> Find a movie! </button>
        ) : null}
      </form>
      <MovieModal
        movie={selectedMovie}
        favList={favList}
        openModal={openModal}
        setOpenModal={setOpenModal}
        saveNewFav={saveNewFav}
        removeFromNewFav={removeFromNewFav}
      />
    </aside>
  );
};

export default NaturalList;
