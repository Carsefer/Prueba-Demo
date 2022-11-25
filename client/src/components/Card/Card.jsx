import { Link } from "react-router-dom";
import Style from "./Card.module.css";
const Card = (cards) => {
  const { id, name, image } = cards;
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h5>{name}</h5>
      </div>
      <div className="margin-top">
        <Link to={`/movie/${id}`}>
          <img src={image} alt={name} className={Style.img} />
        </Link>
      </div>
    </div>
  );
};
export default Card;
