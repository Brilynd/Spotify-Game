import Leaderboard from "./Components/Leaderboard";
import Navbar from "./Components/Navbar";
import BackgroundEffect from "./Components/BackgroundEffect";
import { useCookies } from "react-cookie";
import { getUserScores } from "./Functions/postRequests";
import { useState,useEffect } from "react";
const LeaderboardScreen = () =>{
    const [session, setSession] = useCookies();
    const [userScores,setUserScores] = useState(undefined)
    const getUserData = async() =>{
       var response =  await getUserScores({UserID:session.UserID})
       console.log(await response)
        setUserScores(await response)
    }
    useEffect(()=>{
      getUserData()
      },[])
return(
    <div>
        <BackgroundEffect/>
        <Navbar/>
        <Leaderboard Scoreboard = {userScores}/>
    </div>
)
}
export default LeaderboardScreen