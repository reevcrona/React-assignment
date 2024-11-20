
import "./AlbumCard.css";

function AlbumCard(props){
    return(
        <div>
            <img className="album-cover" src={props.image}></img>
        </div>
    )
}


export default AlbumCard;