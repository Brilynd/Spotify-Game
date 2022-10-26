import "./Card.css"
const Card = ({image,displayName,followers,artistID,type})=>{
return(
    <li class={'flex-item'} onClick={()=>{console.log(artistID)}}>
        <img id={type=="Gamemode"?"Gamemode":"Artist"} src={image}></img>
        <p>{displayName}</p>
        <p>{type}</p>
        {followers!="" && <p>Followers: {followers}</p>}
    </li>
)
}
export default Card
