import "./Gamescreen.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { addUserScore } from "../Functions/postRequests";
import CountUp from "react-countup";
const Gamescreen = (props) => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
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
    if (props.songOne.popularity <= props.songTwo.popularity) {
      setCorrect(2);
      await delay(1000);
      await delay(500);
      setIsRevealed(false);
      await props.updateSongs();
      await delay(500);
      await setScore(score + 1);
      setCorrect(0);
    } else {
      setCorrect(1);
      await delay(1000);
      await delay(500);
      await setIsOver(true);
      setCorrect(0);
    }
  };
  const isLowerThan = async () => {
    setIsRevealed(true); 
    if (props.songOne.popularity >= props.songTwo.popularity) {
      setCorrect(2);
      await delay(1000);
      await delay(400);
      setIsRevealed(false);
      await props.updateSongs();
      await delay(400);
      await setScore(score + 1);
      setCorrect(0);
    } else {
      setCorrect(1);
      await delay(1000);
      await delay(400);
      await setIsOver(true);
      setCorrect(0);
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
    <main id="mainGamescreen">
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
        {correct == 0 && <p>VS</p>}
        {correct == 2 && <svg id="svgCorrect" version="1.1" viewBox="0 0 130.2 130.2">
  <circle class="path circle" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
  <polyline class="path check" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
</svg>}
        {correct == 1 && <svg id="svgIncorrect" version="1.1" viewBox="0 0 130.2 130.2">
  <circle class="path circle" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
  <line class="path line" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
  <line class="path line" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
</svg>}
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
            {isRevealed && <br />}
            {isRevealed && <span class="songScore"><CountUp end={songPopularity} duration={0.4} />/100</span>}
          <br />
          <button id="btnHigher" onClick={() => {isHigherThan();
            document.getElementById('btnHigher').classList.add("btnHover");
          setTimeout(function () {
            document.getElementById('btnHigher').classList.remove("btnHover");
          }, 1400);          
          }}>
            Higher
          </button>
          <br />
          <button id="btnLower" onClick={() => {isLowerThan();
          document.getElementById('btnLower').classList.add("btnHover");
          setTimeout(function () {
            document.getElementById('btnLower').classList.remove("btnHover");
          }, 1400); 
          }}>
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
