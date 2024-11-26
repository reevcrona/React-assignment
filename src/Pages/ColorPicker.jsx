import "../styles/ColorPicker.css";



function ColorPicker(props){

    
    
    return(
        <div className="color-picker-container">
            <div className="box" style={{backgroundColor:props.color}}>
                <span className="hex-text">Selected Color: {props.color}</span>
            </div>
            <div className="select-color-container">
                <h3>Select Color:</h3>
                <input className="color-input" onChange={props.handleChange} type="color"></input>
            </div>
            
        </div>
    )
}

export default ColorPicker;