import { stations } from "../Components/Data/Stations";
import SearchBar from "../Components/SearchBar";
import StationCard from "../Components/StationCard";
import "./Feed.scss";

const Feed = () => {
  return (
    <>
      <div className="search-container">
        <SearchBar/>
      </div>

      <div className="feed-container">
        {stations.map((station) => (
          <StationCard key={station.tla} name={station.name} />
        ))}
      </div>
    </>
  );
};

export default Feed;
