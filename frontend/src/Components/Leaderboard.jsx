// {Headers,Data}
import React from "react"
import "./Leaderboard.css"
const Leaderboard = () =>{
    const Headers = ['Index','Date','Artist','Username','Score']
    const Data = [{Username:"Brilynd Madeya",Artist:"JuiceWrld",Date:"11/1/2022",Score:20},{Username:"Brilynd Madeya",Artist:"JuiceWrld",Date:"11/1/2022",Score:15}]
return(
    <table class="content-table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Points</th>
        <th>Team</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Domenic</td>
        <td>88,110</td>
        <td>dcode</td>
      </tr>
      <tr class="active-row">
        <td>2</td>
        <td>Sally</td>
        <td>72,400</td>
        <td>Students</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Nick</td>
        <td>52,300</td>
        <td>dcode</td>
      </tr>
    </tbody>
  </table>
  
)
}
export default Leaderboard