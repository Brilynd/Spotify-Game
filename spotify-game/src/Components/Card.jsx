import "./Card.css"
const Card = ({image,artistName,followers})=>{
return(
    <li class="flex-item">
        <img src={image}></img>
        <p>{artistName}</p>
        <p>Artist</p>
        <p>Followers: {followers}</p>
    </li>
)
}
export default Card
