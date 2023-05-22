import "./SearchBar.scss";

const SearchBar = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for a station"
      className="SearchBar"
      onChange={onChange}
    ></input>
  );
};

export default SearchBar;
