import "./Gamescreen.css"
import { useNavigate } from "react-router"
import { useState } from "react"
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
}
return(
    
        <main>
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