import "./Feed.scss";
import { useEffect, useState } from "react";
import { stations } from "../Components/Data/Stations";
import SearchBar from "../Components/SearchBar";
import StationCard from "../Components/StationCard";
import icon_scroll from "../Media/icon-scroll.svg";

const Feed = () => {
  const [currentList, setCurrentList] = useState(stations);
  const [userInput, setUserInput] = useState();

  const stationsFilteredBySearch = stations.filter((station) =>
    station.name.toLowerCase().includes(userInput)
  );

  const handleSearchFilter = (e) => {
    setUserInput(e.target.value.trim().toLowerCase());
    setCurrentList(
      e.target.value.length < 1 ? stations : stationsFilteredBySearch
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <img src={icon_scroll} className="scroll" onClick={() => scrollToTop()} />
      <div className="search-container">
        <SearchBar
          userInput={userInput}
          setUserInput={setUserInput}
          onChange={handleSearchFilter}
        />
      </div>

      <div className="feed-container">
        {currentList.map((station) => (
          <StationCard name={station.name} />
        ))}
      </div>
    </>
  );
};

export default Feed;
