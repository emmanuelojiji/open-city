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

      <div class={`card-expanded-info ${expanded && "expanded"}`}>
        <div className="row">
          <h3>Latest Report</h3>
          <p>
            <span className="highlight-closed">Closed</span> Barriers reported
            at 15:30
          </p>
        </div>
        {localStorage.getItem("votes") < 2 && (
          <h2
            onClick={() =>
              localStorage.setItem("votes", parseInt(localStorage.getItem("votes")) + 1)
            }
          >
            Vote
          </h2>
        )}
      </div>
    </div>
  );
};

export default StationCard;
