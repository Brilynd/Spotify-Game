import BackgroundEffect from "./Components/BackgroundEffect"
import Navbar from "./Components/Navbar"
import "./Gamemode.css"
import Card from "./Components/Card"
import { useParams } from "react-router"
const Gamemode = () =>{
    const {id} = useParams();
    //{image,displayName,followers,artistID,type,route}
return(
    <div>
        <BackgroundEffect/>
        <Navbar/>
        <ul className="App-Search-Results">
            <Card displayName={"Freeplay"} type={'Gamemode'} artistID={id} route={`/Freeplay`}/>
 </ul>
    </div>
)
}
export default Gamemode