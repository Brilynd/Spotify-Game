import Navbar from "./Components/Navbar";
import "./App.css";
import { getTokenFromUrl } from "./Components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";
const App = () => {
  const spotify = new SpotifyWebApi();
  const [spotifyToken, setSpotifyToken] = useState("");

  //Gets the confirmation url and gets User ID from it and sets
  // spotifyToken to the UserID this will allow us to start using 
  //the API on the users behalf

  useEffect(() => {

    //calls function from spotify.js file in components 

    const _spotifyToken = getTokenFromUrl().access_token;

    //sets the URL back to nothing so the user ID is not stored in the url

    window.location.hash = "";

    //Checks if token exists if it does then it will Console log the user data for now
    //If token exists it will set the token into the state and use the spotify web api to get the users data
    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);

      spotify.setAccessToken(_spotifyToken);

      spotify.getMe().then((user) => {
        console.log("User", user);
      });

    }
  });
  return (
    <div>
      <Navbar />
      <h1>{spotifyToken}</h1>
    </div>
  );
};

export default App;
