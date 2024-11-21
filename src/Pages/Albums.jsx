import AlbumCard from "../AlbumCard.jsx";
import ThrillerImg from "../assets/thriller-album.jpg";
import BackInBlackImg from "../assets/BackInBlack.svg"
import TheBodyGuardImg from "../assets/theBodyGuard.jpg";
import TheDarkSideOftheMoonImg from "../assets/TheDarkSideoftheMoon.webp";
import BatOutOfHellImg from "../assets/Bat Out of Hell.jpg";

import "../styles/AlbumCard.css";

const albums = [
    {
      albumTitle:"Thriller",
      albumCover:ThrillerImg,
      Artist:"Michael Jackson",
      price:18.69
    },
    {
      albumTitle:"Back In Black",
      albumCover:BackInBlackImg,
      Artist:"AC/DC",
      price:26.98
    },
    {
      albumTitle:"The Bodyguard",
      albumCover:TheBodyGuardImg,
      Artist:"Whitney Houston",
      price:19.30
    },
    {
      albumTitle:"The Dark Side of the Moon",
      albumCover:TheDarkSideOftheMoonImg,
      Artist:"Pink Floyd",
      price:52.99
    },
    {
      albumTitle:"Bat Out of Hell",
      albumCover:BatOutOfHellImg,
      Artist:"Meatloaf",
      price:27.91
    }
  ]

  

function Albums(){
    return(
        <div className="albums-main-container">
          { albums.map((album) => {
        return(
          <AlbumCard 
            key = {album.albumTitle}
            title = {album.albumTitle}
            cover = {album.albumCover}
            artist = {album.Artist}
            albumPrice = {album.price}
          />
        )
      })}
        </div>
    )
}

export default Albums;