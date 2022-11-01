// {Headers,Data}
import React from "react"
import "./Leaderboard.css"
const Leaderboard = () =>{
    const Headers = ['Index','Artist','Username','Score']
    const Data = [{Username:"Brilynd Madeya",Artist:"JuiceWrld",Date:"11/1/2022",Score:20},{Username:"Brilynd Madeya",Artist:"JuiceWrld",Date:"11/1/2022",Score:15}]
return(
    <table class="content-table">
    <thead>
      <tr>
{Headers.map(item=>{
    return(
        <th>{item}</th>
    )
})}
      </tr>
    </thead>
    <tbody>

        {Data.map((item,index)=>{
            return(
                <tr>
            <td>{index}</td>
            <td>{item.Artist}</td>
            <td>{item.Username}</td>
            <td>{item.Score}</td>
            </tr>
            )
        })}
    </tbody>
  </table>
  
)
}
export default Leaderboard