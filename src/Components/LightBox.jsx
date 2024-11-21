
import "../styles/LightBox.css";

function LightBox(props){
    return(
        <div onClick={props.closeLightBox} className="light-box">
            <img className="light-box-img" src={props.lightImage} alt="" />
        </div>
    )
}


export default LightBox;