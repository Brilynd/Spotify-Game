import Navbar from "./Components/Navbar";
import Gamescreen from "./Components/Gamescreen";
import LoadingEffect from "./Components/LoadingEffect";
import "./Freeplay.css";
import SpotifyWebApi from "spotify-web-api-js";
import { useState,useEffect } from "react";
import { Navigate, useParams } from "react-router";
import { useCookies } from "react-cookie";
import { randomNum } from "./Functions/randomNum";
import BackgroundEffect from "./Components/BackgroundEffect";

const Freeplay = () => {
  const { id } = useParams();
  const spotify = new SpotifyWebApi();
  const [session, setSession] = useCookies();
  const [songs, setSongs] = useState([]);
  const [songOne,setSongOne] = useState(randomNum(songs.length))
  const [songTwo,setSongTwo] = useState()
  const [userID,setUserID] = useState("")
  const [isLoading,setIsLoading] = useState(false);
 const [artistName,setArtistName] = useState("")
  var songArr = [];
   const getSongSelection = async (token) =>{
        setIsLoading(true);
       spotify.getAccessToken(token);
       await spotify.getMe().then((user) => {
        setUserID(user.id)
       })
       var getAlbumList = await spotify.getArtistAlbums(id);
      //  setArtistName((await getAlbumList).items[0].artists[0].name)
       setArtistName(getAlbumList.items[0].artists[0].name)
       var albumList = []
       var songDetails = []

       const getAlbumTracks = getAlbumList.items.map(async(track)=>{
           var AlbumTracks = spotify.getAlbumTracks(track.id)
           albumList.push(await AlbumTracks)
       })
       await Promise.all(getAlbumTracks)
      const getSongList = albumList.map((song)=>{
           song.items.map(songID=>{
               songDetails.push(songID.id)
           })
       })
       
       await Promise.all(getSongList)
       const createSongObj = songDetails.map(async(songID)=>{
            var SongData = spotify.getTrack(songID)
            var images
            if((await SongData).album.images.length!=0){
                images = (await SongData).album.images[2].url
            }
            else{
                images = null
            }
            songArr.push({
                          name: (await SongData).name,
                          popularity: (await SongData).popularity,
                          image: images,
                        })
       })
       await Promise.all(createSongObj)
       setSongs(songArr)
       setSongTwo(randomNum(songArr.length))
       setSongOne(randomNum(songArr.length))
       setIsLoading(false);
    }
  
  useEffect(()=>{
      
      getSongSelection(session.session)
  },[])



  const getNewSongs = () =>{
    setSongOne(randomNum(songs.length))
    setSongTwo(randomNum(songs.length))
  }

  return (
    <div style={{height:'100vh',display:'flex',flexFlow:'column'}}>
      {isLoading && <LoadingEffect />}
      {artistName!=''&&!isLoading && songs.length!=0 && <Gamescreen songOne={songs[songOne]} songTwo={songs[songTwo]} updateSongs={getNewSongs} artistID ={id} artistName = {artistName} userId = {userID} userName = {session.Username}/>}
    </div>
  );
};
export default Freeplay;
