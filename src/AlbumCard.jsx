
import "./AlbumCard.css";

function AlbumCard(props){
    return(
        <div className="album-card-container">
            <img className="album-cover" src={props.cover}></img>
            <h2>{props.title}</h2>
            <h3>Artist: {props.artist}</h3>
            <h4>Amazon price: {props.albumPrice}</h4>
        </div>
    )
}


export default AlbumCard;