import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Profile from "./Profile";
import Gamemode from "./Gamemode";
import Freeplay from "./Freeplay";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Gamemode/:id" element={<Gamemode/>}/>
        <Route path="/Freeplay/:id" element={<Freeplay/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;