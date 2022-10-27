import "./Gamescreen.css"
import { useNavigate } from "react-router"
const Gamescreen = ({songOne,popularityOne,songTwo,popularityTwo})=>{
const navigate = useNavigate();

return(
        <main>
            <div class="imageItem image1">
                <p class="textContainer"><span class="songName">Good Morning</span><br/>has<br/><span class="songScore">89.9/100</span><br/>Popularity</p>
            </div>
            <p id="highScore">High Score: </p>
            <p id="score">Score: </p>
            <a id="songLinkOne" href="">link to song</a>
            <a id="songLinkTwo" href="">link to song</a>
            <div id="VScircle">
                <p>VS</p>
            </div>
            <div class="imageItem image2">
                <p class="textContainer"><span class="songName">Welcome To Heartbreak</span><br/>has<br/><span class="songScore">89.9/100</span><br/>
                    <button id="btnHigher">Higher</button><br/><button id="btnLower">Lower</button>
                <br/>Popularity</p>
            </div>
        </main>
    )
}
export default Gamescreen