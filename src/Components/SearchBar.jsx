const SearchBar = () => (
  <section className="searchbar">
    <form className="wrapper" action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search for movies</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search for movies"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
  </section>
);

export default SearchBar;
