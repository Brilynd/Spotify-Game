import Navbar from "./Components/Navbar";
import "./Freeplay.css";
import SpotifyWebApi from "spotify-web-api-js";
import { useState } from "react";
import { Navigate, useParams } from "react-router";
import { useCookies } from "react-cookie";

const Freeplay = () => {
  const { id } = useParams();
  const spotify = new SpotifyWebApi();
  const [session, setSession] = useCookies();
  const [songs, setSongs] = useState([]);
  var songArr = [];

  //Gets all of the artists songs
  const getSongSelection = async (token) => {
    setSongs([]);

    //Sets spotify access token
    spotify.setAccessToken(token);

    //Gets an array of albums from Artist Id in the URL
    var response = await spotify.getArtistAlbums(id);

    //Gets list of songs from each album
    response.items.map(async (Album) => {
      response = await spotify.getAlbumTracks(Album.id);

      //Gets more details on the song like popularity and album cover
      response.items.map(async (song) => {
        response = await spotify.getTrack(song.id);

        //Sets the image of the song to the album cover if the song has one
        var images = null;
        if (response.album.images.length != 0) {
          images = response.album.images[0].url;
        }

        //Adds song info to the songArr
        songArr.push({
          name: response.name,
          popularity: response.popularity,
          image: images,
        });

        //Removes duplicate songs to avoid redundancy
        songArr = [
          ...songArr
            .reduce((map, obj) => map.set(obj.name, obj), new Map())
            .values(),
        ];

        //Sets the state of songs to the songArr
        setSongs(songArr);
      });
    });
  };

  return (
    <div>
      <Navbar />
      <button
        onClick={() => {
          getSongSelection(session.session);
        }}
      ></button>
      <button
        onClick={() => {
          console.log(songs);
        }}
      >
        ConsoleLogger
      </button>
    </div>
  );
};
export default Freeplay;
