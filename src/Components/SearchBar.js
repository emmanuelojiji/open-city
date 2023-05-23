import "./SearchBar.scss";
import icon_location_pin from "../Media/icon-location-pin.svg";

const SearchBar = ({ onChange }) => {
  return (
    <div className="search-wrap">
      <div className="search-location">
        <img src={icon_location_pin} />
        London
      </div>
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
