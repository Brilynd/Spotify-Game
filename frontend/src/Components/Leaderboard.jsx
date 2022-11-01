// {Headers,Data}
import "./Leaderboard.css"
const Leaderboard = () =>{
    const Headers = ['Index','Date','Artist','Username','Score']
    const Data = [{Username:"Brilynd",Artist:"JuiceWrld",Date:"11/1/2022",Score:20},{Username:"Brilynd",Artist:"JuiceWrld",Date:"11/1/2022",Score:15}]
return(
    <div>
        <table id="Table-container">
        <div id="Table-title">
            <h1>Leaderboard</h1>
        </div>
            <tr>
                {Headers.map(item=>{
                    return(
                    <th id="Table-header">{item}</th>
                    )
                })}
                </tr>
                {Data.map((item,index)=>{
                    return(
                    <tr id="Table-item">
                    <td>{index}</td>
                    <td>{item.Date}</td>
                    <td>{item.Artist}</td>
                    <td>{item.Username}</td>
                    <td>{item.Score}</td>
                    </tr>
                    )
                })}
        </table>
    </div>
)
}
export default Leaderboard