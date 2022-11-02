import "./Navbar.css"
import { loginUrl } from "../Functions/spotify";
import { useNavigate } from "react-router";
import { getTokenFromUrl } from "../Functions/spotify";
import SpotifyWebApi from "spotify-web-api-js"
import { useState,useEffect } from "react";
import { useCookies } from "react-cookie";
import { DebounceInput } from 'react-debounce-input'

const Navbar = (props) =>{
    // Sets up getting window size
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const test = useState(false);
    // gets window size when resized
    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

    //Sets up cookies
    const [cookies,setCookie,removeCookie] = useCookies();
    //Navigates User
    const navigate = useNavigate()
    //Signout Function
    const Signout = () => {
        
        removeCookie(['session'])
        removeCookie(['Username'])
        navigate('/')
    }
    function setDesktop(){
    if (windowSize.innerWidth > 800){
        return 'flex';
    }
    else{
        return 'none';
    }
    }
    function setMobile(){
        if (windowSize.innerWidth <= 800){
            return 'flex';
        }
        else{
            return 'none';
        }
    }
    
return(
    <div>
    <div className="Navbar-Container" style={{display:setDesktop()}}>   
        <svg viewBox="0 0 1134 340" className="spotify-logo--text" style={{padding:'10px'}}><title>Spotify</title><path fill="white" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path></svg>
        <div>
          
        <DebounceInput  minLength={1}
  debounceTimeout={500} type="text" placeholder="Search Artist" onChange={(e)=>props.Navbarsearch(e.target.value)} className="Navbar-Searchbar"/>
   
        <ul className="Left-Navbar">
            <li onClick={()=>{navigate('/')}}>Home</li>
            <li onClick={()=>{navigate('/ScoreHistory')}}>My Scores</li>
            <li>Leaderboard</li>
        </ul>

        {cookies.session==undefined&&  <ul className="Right-Navbar">
            <a id="navbar-signin" href={loginUrl}> Sign In</a>
            <button id="navbar-signup">Sign Up</button>
        </ul>}
       {cookies.session!=undefined && <ul id="profileContainer">
            <div id="userDropdown" onClick={()=>{
                let menu = document.getElementById("logOutDropdown");
                let arrow = document.getElementById("arrow");
                let dropdown = document.getElementById("userDropdown");
                if(menu.style.display === "flex"){
                    menu.classList.remove("dropdownAnimated");
                    setTimeout(function () {
                        menu.style.display = "none";
                      }, 200);
                    arrow.style.transform = "rotate(0deg)";
                    dropdown.style.backgroundColor = "#0c0a11";
                    
                }else{
                    menu.style.display = "flex";
                    arrow.style.transform = "rotate(180deg)";
                    dropdown.style.backgroundColor = "#282828";
                    setTimeout(function () {
                        menu.classList.add("dropdownAnimated");
                      }, 20);
                }
            }}>
                <div id="navbar-icon" style={{background: `url('${props.image}') 50% 50%/cover no-repeat`}}></div><p id="navbar-username">{cookies.Username.slice(0,10)}</p><span id="arrow"></span>

                <div id="logOutDropdown" ><button onClick={()=>Signout()}>Log out</button></div>
            </div>
        </ul>}
        </div>
    </div>

    <div id="topnav" style={{display:setMobile()}}>
    <div id="mobile-top">
        <div id="nav-icon" onClick={()=>{
            let links = document.getElementById("mobile-links");
            let nav = document.getElementById("topnav");
            if (links.style.display === "flex") {
                links.style.display = "none";
                nav.style.position = "relative";
                document.getElementById("nav-icon").classList.remove("open");
            } else {
                document.getElementById("nav-icon").classList.add("open");
                nav.style.position = "absolute";
                links.style.display = "flex";
            }}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <DebounceInput  minLength={1}
  debounceTimeout={500} type="text" placeholder="Search Artist" onChange={(e)=>props.Navbarsearch(e.target.value)} className="Mobile-Searchbar" onFocus={()=>{
    let links = document.getElementById("mobile-links");
    let nav = document.getElementById("topnav");
    if (links.style.display === "flex") {
        links.style.display = "none";
        nav.style.position = "relative";
        document.getElementById("nav-icon").classList.remove("open");
    }}}/>
    {cookies.session!=undefined && 
        <div id="mobile-profile">
            <div style={{background: `url('${props.image}') 50% 50%/cover no-repeat`}}></div>
        </div>
      }
    </div>
    
    <div id="mobile-links">
      <div className="mobile-link" onClick={()=>{navigate('/')}}><span>Home</span><i></i></div>
      <div className="mobile-link" onClick={()=>{navigate('/ScoreHistory')}}><span>My Scores</span><i></i></div>
      <div className="mobile-link"><span>Leaderboard</span><i></i></div>
      {cookies.session==undefined &&
      <button id="mobile-signInBtn" onClick={()=>{window.location.href = loginUrl;}}>Sign In</button>
      }
      {cookies.session==undefined &&
      <button id="mobile-signUpBtn">Sign Up</button>
      }
      {cookies.session!=undefined && 
      <button id="mobile-signUpBtn" onClick={()=>Signout()}>Log Out</button>
      }
      
    </div>
    </div>
    
    </div>
)
}
export default Navbar;