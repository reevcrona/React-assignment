import "../styles/ColorPicker.css";
import { useState } from "react";


function ColorPicker(props){

    
    return(
        <div className="color-picker-container">
            <div className="box" style={{backgroundColor:props.color}}></div>
            <h2>{props.color}</h2>
            <input onChange={props.handleChange} type="color"></input>
        </div>
    )
}

export default ColorPicker;