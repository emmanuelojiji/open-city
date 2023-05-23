import "./Feed.scss";
import { useEffect, useState } from "react";
import { stations } from "../Components/Data/Stations";
import SearchBar from "../Components/SearchBar";
import StationCard from "../Components/StationCard";
import icon_scroll from "../Media/icon-scroll.svg";
import icon_train_sideways from "../Media/icon-train-sideways.webp";

const Feed = () => {

  const image = new Image() 
  image.src = icon_train_sideways;

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
        {currentList.length === 0 && (
          <div className="no-stations">
            <div className="animation-container">
              
              <img src={icon_train_sideways} />
           
            </div>
            <h2>We can't find that station.</h2>
            <p>Why not try using filters instead?</p>
          </div>
        )}

        {currentList.map((station) => (
          <StationCard name={station.name} />
        ))}
      </div>
    </>
  );
};

export default Feed;
