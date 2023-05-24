import "./SearchBar.scss";
import icon_location_pin from "../Media/icon-location-pin.svg";
import icon_cross from "../Media/icon-cross.svg";

const SearchBar = ({
  onChange,
  userInput,
  setUserInput,
  setCurrentList,
  stations,
}) => {
  const clearSearch = () => {
    setUserInput("");
    setCurrentList(stations);
  };

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
        value={userInput}
      ></input>
      {userInput && <img src={icon_cross} onClick={() => clearSearch()} />}
    </div>
  );
};

export default SearchBar;
