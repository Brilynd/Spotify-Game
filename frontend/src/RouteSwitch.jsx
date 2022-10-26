import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Profile from "./Profile";
import Gamemode from "./Gamemode";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Gamemode/:id" element={<Gamemode/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;