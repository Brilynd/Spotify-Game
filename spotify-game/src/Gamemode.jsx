import BackgroundEffect from "./Components/BackgroundEffect"
import Navbar from "./Components/Navbar"
import "./Gamemode.css"
import Card from "./Components/Card"
const Gamemode = () =>{
    //{image,displayName,followers,artistID,type,route}
return(
    <div>
        <BackgroundEffect/>
        <Navbar/>
        <ul className="App-Search-Results">
            <Card displayName={"Freeplay"} type={'Gamemode'} route={'/freeplay'}/>
 </ul>
    </div>
)
}
export default Gamemode