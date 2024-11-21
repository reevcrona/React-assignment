
import { useState } from "react";
import "../styles/Counter.css"


function Counter(){
    const [counter,setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const decrementCounter = () => {
        setCounter(counter - 1);
    }

    const resetCount = () => {
        setCounter(0)
    }
    return (
        <div>
            <h1 className="count">{counter}</h1>
            <div className="button-container">
                <button onClick={incrementCounter}>+</button>
                <button onClick={decrementCounter}>-</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    )
}


export default Counter;