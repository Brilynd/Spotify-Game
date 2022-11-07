import "./Card.css";
import { useNavigate } from "react-router";
const Card = ({ image, displayName, followers, artistID, type, route }) => {
  const navigate = useNavigate();

  return (
    <li
      class={"flex-item"}
      onClick={() => {
        navigate(`${route}/${artistID}`);
      }}
    >
      <div class="imageContainer">
        <img id={type === "Gamemode" ? "Gamemode" : "Artist"} src={image} alt=""></img>
        <div><span id="playBtn"></span></div>
      </div>
      <p>{displayName}</p>
      <p>{type}</p>
      {followers != null && <p>Followers: {followers}</p>}
    </li>
  );
};
export default Card;
