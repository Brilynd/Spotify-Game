import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import "./App.css";
import BackgroundEffect from "./Components/BackgroundEffect";
import { getTokenFromUrl } from "./Functions/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { createUser } from "./Functions/postRequests";
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
        console.log(user);
        setImage(user.images[0].url)

        //Gets users display name
        setSession("Username", user["display_name"]);

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
  },[search])
  //NavbarSearch returns the searchbar input from the Navbar and passes up the value
  return (
    <div>
      <BackgroundEffect/>
      <Navbar Navbarsearch={(search) => setSearch(search)} image ={image}/>
      <ul className="App-Search-Results">{results.length!=1 && results.map((artist)=>{
        return(
        <Card displayName = {artist.name} image={artist.images.length!=0 && artist.images[1].url} followers={artist.followers.total} type={"Artist"} artistID={artist.id} route={"/Gamemode"}/>
        )
      })}</ul>
    </div>
  );
};

export default App;
