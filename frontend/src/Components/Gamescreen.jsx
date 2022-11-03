import "./Gamescreen.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { addUserScore } from "../Functions/postRequests";
import CountUp from "react-countup";
const Gamescreen = (props) => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [songPopularity, setSongPopularity] = useState(10000);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const setGameRestart = () => {
    setIsOver(false);
    setScore(0);
    props.updateSongs();
  };
  const isHigherThan = async () => {
    setIsRevealed(true);
    await delay(1000);
    if (props.songOne.popularity <= props.songTwo.popularity) {
      await delay(500);
      setIsRevealed(false);
      await props.updateSongs();
      await delay(500);
      await setScore(score + 1);
    } else {
      await delay(500);
      await setIsOver(true);
    }
  };
  const isLowerThan = async () => {
    setIsRevealed(true);
    await delay(1000);
    if (props.songOne.popularity >= props.songTwo.popularity) {
      await delay(400);
      setIsRevealed(false);
      await props.updateSongs();
      await delay(400);
      await setScore(score + 1);
    } else {
      await delay(400);
      await setIsOver(true);
    }
  };
  const updateScore = () => {
    const userObj = {
      UserID: props.userId,
      ArtistName: props.artistName,
      ArtistID: props.artistID,
      Score: score,
    };
    addUserScore({ ...userObj });
  };

  useEffect(() => {
    if (isOver == true) {
      updateScore();
      setIsRevealed(false);
    }
  }, [isOver]);

  useEffect(() => {
    setSongPopularity(props.songTwo.popularity);
    console.log(props.songTwo.popularity);
  }, [props.songTwo.popularity]);
  return (
    <main>
      {isOver == true && (
        <div id="isOver">
          <div>
            <h1>You Scored:</h1>
            <h2>{score}</h2>
            <button
              onClick={() => {
                setGameRestart();
              }}
            >
              Play Again
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
          </div>
        </div>
      )}
      <div
        class="imageItem image1"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.65), rgba(30, 30, 30, 0.65)), url(${
            props.songOne.image != "" ? props.songOne.image : ""
          })`,
        }}
      >
        <p class="textContainer">
          <span class="songName">{props.songOne.name}</span>
          <br />
          has
          <br />
          <span class="songScore">{props.songOne.popularity}/100</span>
          <br />
          Popularity
        </p>
      </div>
      <p id="score">Score: {score} </p>
      <div id="VScircle">
        <p>VS</p>
      </div>
      <div
        class="imageItem image2"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.65), rgba(30, 30, 30, 0.65)), url(${
            props.songTwo.image != "" ? props.songTwo.image : ""
          })`,
        }}
      >
        <p class="textContainer">
          <span class="songName">{props.songTwo.name}</span>
          <br />
          has
          <br />
          <span class="songScore">
            {isRevealed && <CountUp end={songPopularity} duration={0.4} />}
            {isRevealed && "/100"}
          </span>
          <br />
          <button id="btnHigher" onClick={() => isHigherThan()}>
            Higher
          </button>
          <br />
          <button id="btnLower" onClick={() => isLowerThan()}>
            Lower
          </button>
          <br />
          Popularity
        </p>
      </div>
    </main>
  );
};
export default Gamescreen;
