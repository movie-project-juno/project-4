const Movie = ({ movie }) => {
  return (
    <section>
      <div key={movie.id}>
        <h2>{movie.original_title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.original_title}
        />
        <p>{movie.vote_average}</p>
        <div>
          <p>{movie.overview}</p>
        </div>
        <div className="buttons-container">
          <ul>
            <li>
              <a>Watch trailer</a>
            </li>
            <li>
              <a>Share</a>
            </li>
            <li>
              <a>Add to list</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Movie;
