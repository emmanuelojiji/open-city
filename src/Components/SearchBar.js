import "./SearchBar.scss";

const SearchBar = ({ onChange }) => {
  return (
    <div className="search-wrap">
      <div className="search-location">London</div>
    <input
      type="text"
      placeholder="Search for a station"
      className="SearchBar"
      onChange={onChange}
    ></input>
    </div>
  );
};

export default SearchBar;
