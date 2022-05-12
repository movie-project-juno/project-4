const SearchBar = () => (
  <section className="checkbox">
    <form className="wrapper" action="/" method="get">
      <div>
        <input type="checkbox" id="genre1" value="genre1  " />
        <label htmlFor="Comedy">Comedy</label>
      </div>
      <button type="submit">Search</button>
    </form>
  </section>
);

export default SearchBar;
