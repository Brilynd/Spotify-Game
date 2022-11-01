import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Profile from "./Profile";
import Gamemode from "./Gamemode";
import Freeplay from "./Freeplay";
import LeaderboardScreen from "./LeaderboardScreen";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Gamemode/:id" element={<Gamemode/>}/>
        <Route path="/Freeplay/:id" element={<Freeplay/>}/>
        <Route path = "/Leaderboard" element={<LeaderboardScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;