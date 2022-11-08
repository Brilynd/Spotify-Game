import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { loginUrl } from "./Functions/spotify";
import "./App.css";
import BackgroundEffect from "./Components/BackgroundEffect";
import { getTokenFromUrl } from "./Functions/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { createUser } from "./Functions/postRequests";
import highLowLogo from "./high-low-logo.png"

const App = () => {
  const spotify = new SpotifyWebApi();
  const [session, setSession] = useCookies();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([])
  const [image,setImage] = useState('')

  //Gets the confirmation url and gets User ID from it and sets
  // spotifyToken to the UserID this will allow us to start using
  //the API on the users behalf

  const getArtistData = async(token) =>{
    setResults([])
    spotify.setAccessToken(token)
    var response = await spotify.searchArtists(search)
    setResults(response.artists.items)
  }


  useEffect(() => {
    //calls function from spotify.js file in components

    const _spotifyToken = getTokenFromUrl().access_token;

    //sets the URL back to nothing so the user ID is not stored in the url

    window.location.hash = "";

    //Checks if token exists if it does then it will Console log the user data for now
    //If token exists it will set the token into the state and use the spotify web api to get the users data

    if (_spotifyToken) {

      //Stores session Id in Cookies
      setSession("session", _spotifyToken);

      //Sets spotify objects accessToken
      spotify.setAccessToken(_spotifyToken);

      //Sets users Username
      spotify.getMe().then((user) => {
        setSession("UserProfile",user.images[0].url)
        //Gets users display name
        setSession("Username", user["display_name"]);
        setSession('UserID',user['id'])
        const userObject = {UserID:user["id"],Username:user["display_name"]}
        createUser({...userObject})
      });
    }
  });
  
  useEffect(()=>{
    if(session.session!=undefined){
      getArtistData(session.session)
      console.log(results)
    }
    else{
      setResults([])
    }
  },[search])
  //NavbarSearch returns the searchbar input from the Navbar and passes up the value

  return (
    <div>
      <BackgroundEffect/>
      {session.session==undefined && 
      <div id={"preSignInContainer"}>
        <img src={highLowLogo}/>
        <h1>What song has more popularity?</h1>
        <p>A frustratingly addictive game of higher or lower using song popularity.<br/>The data is based on the current song popularity.</p>
        <button onClick={()=>{window.location.href = loginUrl;}}>Sign in with Spotify</button>
        <p>Sign in to play</p>
      </div>}
      {session.session!==undefined && <div>
      <Navbar Navbarsearch={(search) => setSearch(search)} image ={image}/>
      
      {search=="" && 
      <div id={"postSignInContainer"}>
      <p>Start by searching for an artist to use for the game
      <br/><span>After selecting, choose gamemode</span></p>
      <button onClick={()=>{
        if(document.getElementById("topnav").style.display!="none"){
          document.getElementById("mob-search-bar").focus();
        }
          
          document.getElementById("search-bar").focus();
          
      }}>Search for Artist</button>
      </div>
      }

      {search!=="" && 
      <ul className="App-Search-Results">{results.length!=1 && results.map((artist)=>{
        return(
        <Card displayName = {artist.name} image={artist.images.length!=0 && artist.images[1].url} followers={artist.followers.total} type={"Artist"} artistID={artist.id} route={"/Gamemode"}/>
        )
      })}</ul>}
      </div>}
    </div>
  );
};

export default App;
