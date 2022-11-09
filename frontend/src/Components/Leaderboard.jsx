// {Headers,Data}
import React from "react";
import "./Leaderboard.css";
const Leaderboard = ({Scoreboard}) => {
    console.log(Scoreboard)
   if(Scoreboard!=undefined){
    console.log(Scoreboard.Score)
   }
   

  const Headers = ["Index", "Artist", "Username", "Score"];
  return (
    <div class="Display-Table-Container">
    <h1 class="Display-Table-Header">Previous Scores</h1>
    <table class="Display-Table">
        
        <thead>
            <th>Index</th>
            <th>Score</th>
            <th>Username</th>
            <th>Artist Name</th>
        </thead>
        {Scoreboard!=undefined&&Scoreboard['Score'].map((Score,index)=>{
            return(
                <tr>
                <td>{index}</td>
                <td>{Scoreboard.Score[index].Score}</td>
                <td>{Scoreboard.Username}</td>
                <td>{Scoreboard.Score[index].Artist}</td>
            </tr>
            )
        })}
    </table>
</div>
  );
};
export default Leaderboard;
