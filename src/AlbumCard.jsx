
import "./styles/AlbumCard.css";

function AlbumCard(props){
    return(
        <div className="album-card-container">
            <img className="album-cover" src={props.cover}></img>
            <div className="album-info-container">
                <h2>{props.title}</h2>
                <h3>Artist: {props.artist}</h3>
                <h4>Amazon price: ${props.albumPrice}</h4>
            </div>
            
        </div>
    )
}


export default AlbumCard;