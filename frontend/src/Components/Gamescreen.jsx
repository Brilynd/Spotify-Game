import "./Gamescreen.css"
import { useNavigate } from "react-router"
const Gamescreen = (props)=>{
    console.log(props)
const navigate = useNavigate();
return(
        <main>
            <div class="imageItem image1" style={{backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.65), rgba(30, 30, 30, 0.65)), url(${props.songOne.image})`}}>
                <p class="textContainer"><span class="songName">{props.songOne.name}</span><br/>has<br/><span class="songScore">{props.songOne.popularity}/100</span><br/>Popularity</p>
            </div>
            <p id="highScore">High Score: </p>
            <p id="score">Score: </p>
            <a id="songLinkOne" href="">link to song</a>
            <a id="songLinkTwo" href="">link to song</a>
            <div id="VScircle">
                <p>VS</p>
            </div>
            <div class="imageItem image2" style={{backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.65), rgba(30, 30, 30, 0.65)), url(${props.songTwo.image})`}}>
                <p class="textContainer"><span class="songName">{props.songTwo.name}</span><br/>has<br/><span class="songScore">{props.songTwo.popularity}/100</span><br/>
                    <button id="btnHigher">Higher</button><br/><button id="btnLower">Lower</button>
                <br/>Popularity</p>
            </div>
        </main>
    )
}
export default Gamescreen