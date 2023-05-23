import "./StationCard.scss";
import icon_train from "../Media/icon-train.svg";

const StationCard = ({ name }) => {
  return (
    <div className="StationCard">
      <img src={icon_train} />
      <h3>{name}</h3>
    </div>
  );
};

export default StationCard;
