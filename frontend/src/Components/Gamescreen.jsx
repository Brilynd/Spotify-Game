import "./Gamescreen.css"
import { useNavigate } from "react-router"
import { useState,useEffect } from "react"
import { addUserScore } from "../Functions/postRequests"
const Gamescreen = (props)=>{
    console.log(props)
const navigate = useNavigate();
const [score,setScore] = useState(0)
const [isOver,setIsOver] = useState(false)
const isHigherThan = () =>{
    if (props.songOne.popularity<=props.songTwo.popularity){
        props.updateSongs()
        setScore(score+1)
    }
    else{
        setIsOver(true)
    }
}
const isLowerThan = () =>{
    if(props.songOne.popularity>=props.songTwo.popularity){
        props.updateSongs()
        setScore(score+1)
    }
    else{
        setIsOver(true)
    }
}
const updateScore = ()=>{
    const userObj = {UserID:props.userId, ArtistName : props.artistName, ArtistID:props.artistID,Score:score}
    addUserScore({...userObj})
    console.log(userObj)
    // await client.db('Spotify-Higher-Lower').collection('UserInfo').updateOne({UserID:userInfo.UserID},{$push:{Score:{Artist:userInfo.ArtistName,ArtistID:userInfo.ArtistID,Score:userInfo.Score}}})
}
useEffect(()=>{
if(isOver==true){
    updateScore()
}
},[isOver])
return(
    
        <main>
            {isOver==true && <div style={{position:'absolute', height:"100vh",width:'100vw', backgroundColor:"black",zIndex:"10"}}>
                <h1 style={{color:"white",textAlign:"center"}}>Final Score is {score}</h1>
                <button>Play Again</button>
                <button>Home</button>
                </div>}
            <div class="imageItem image1" style={{backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.65), rgba(30, 30, 30, 0.65)), url(${props.songOne.image!=""?props.songOne.image:""})`}}>
                <p class="textContainer"><span class="songName">{props.songOne.name}</span><br/>has<br/><span class="songScore">{props.songOne.popularity}/100</span><br/>Popularity</p>
            </div>
            <p id="highScore">High Score: </p>
            <p id="score">Score: {score} </p>
            <a id="songLinkOne" href="">link to song</a>
            <a id="songLinkTwo" href="">link to song</a>
            <div id="VScircle">
                <p>VS</p>
            </div>
            <div class="imageItem image2" style={{backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.65), rgba(30, 30, 30, 0.65)), url(${props.songTwo.image!=""?props.songTwo.image:""})`}}>
                <p class="textContainer"><span class="songName">{props.songTwo.name}</span><br/>has<br/><span class="songScore">{props.songTwo.popularity}/100</span><br/>
                    <button id="btnHigher" onClick={()=>isHigherThan()}>Higher</button><br/><button id="btnLower" onClick={()=>isLowerThan()}>Lower</button>
                <br/>Popularity</p>
            </div>
            <button onClick={props.updateSongs}>Update</button>
        </main>
    )
}
export default Gamescreen