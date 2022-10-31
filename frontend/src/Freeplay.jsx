import Navbar from "./Components/Navbar";
import Gamescreen from "./Components/Gamescreen";
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
  var songArr = [];
   const getSongSelection = async (token) =>{
       spotify.getAccessToken(token);
       var getAlbumList = await spotify.getArtistAlbums(id);
       var albumList = []
       var songList = []
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
                images = (await SongData).album.images[0].url
            }
            else{
                images = null
            }
            console.log(await SongData)
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
      <Navbar />
      {songs.length!=0 && <Gamescreen songOne={songs[songOne]} songTwo={songs[songTwo]} updateSongs={getNewSongs}/>}
    </div>
  );
};
export default Freeplay;
