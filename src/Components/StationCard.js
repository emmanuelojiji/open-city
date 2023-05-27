import "./StationCard.scss";
import { useState, useEffect } from "react";
import icon_train from "../Media/icon-train.svg";

const StationCard = ({ name, id }) => {
  const defaultVote = localStorage.getItem(`votes_${id}`) || 0;

  const [votes, setVotes] = useState(defaultVote);

  useEffect(() => {
    localStorage.setItem(`votes_${id}`, votes);
    console.log(votes);
  }, [votes]);

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
        {votes < 2 && <h2 onClick={() => setVotes(votes + 1)}>Vote</h2>}
      </div>
    </div>
  );
};

export default StationCard;
