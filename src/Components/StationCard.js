import "./StationCard.scss";
import { useState } from "react";
import icon_train from "../Media/icon-train.svg";

const StationCard = ({ name }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="StationCard" onClick={() => setExpanded(!expanded)}>
      <div className="station-card-header">
        <img src={icon_train} />
        <h3>{name}</h3>
        <div className="status-light"></div>
      </div>

      <div
        class="card-expanded-info"
        style={{ height: expanded ? "100px" : "0px" }}
      >
        <p>extra info</p>
      </div>
    </div>
  );
};

export default StationCard;
