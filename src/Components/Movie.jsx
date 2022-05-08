const Movie = ({ movie }) => {
  return (
    <section className="movieContainer">
      <figure className="moviePoster" key={movie.id}>
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
    </section>
  );
};

export default Movie;
