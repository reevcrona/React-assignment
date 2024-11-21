
import "../styles/LightBox.css";
import { useState,useEffect } from "react";

function LightBox(props){
    const [isMounted,setIsMounted] = useState(false);

        useEffect(() => {
            setIsMounted(true);

            return () => {
                setIsMounted(false);
            }
        },  [])

    return(
        <div onClick={props.closeLightBox} className="light-box">
            <img className= {`light-box-img ${isMounted ? "active-lightbox" : ""}`} src={props.lightImage} alt="" />
        </div>
    )
}


export default LightBox;