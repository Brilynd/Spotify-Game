// {Headers,Data}
import React from "react";
import "./Leaderboard.css";
const Leaderboard = () => {
  const Headers = ["Index", "Artist", "Username", "Score"];
  const Data = [
    {
      Username: "Brilynd Madeya",
      Artist: "JuiceWrld",
      Date: "11/1/2022",
      Score: 20,
    },
    {
      Username: "Brilynd Madeya",
      Artist: "JuiceWrld",
      Date: "11/1/2022",
      Score: 15,
    },
  ];
  return (
    <div class="Display-Table-Container">
    <h1 class="Display-Table-Header">Previous Scores</h1>
    <table class="Display-Table">
        
        <thead>
            <th>Index</th>
            <th>Score</th>
            <th>Artist Name</th>
            <th>Username</th>
        </thead>
        <tr>
            <td>0</td>
            <td>25</td>
            <td>Juice Wrld</td>
            <td>Brilynd</td>
        </tr>

        <tr>
            <td>0</td>
            <td>25</td>
            <td>Juice Wrld</td>
            <td>Brilynd</td>
        </tr>

        <tr>
            <td>0</td>
            <td>25</td>
            <td>Juice Wrld</td>
            <td>Brilynd</td>
        </tr>
    </table>
</div>
  );
};
export default Leaderboard;
