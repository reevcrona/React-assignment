import { useState } from "react";

function ToDoList(){

    const [toDoList,setToDoList] = useState([]);
    const [taskValue,setTaskValue] =  useState("");


    const handleInputValue = (e) => {
        setTaskValue(e.target.value)
    }

    const addTask = () => {
        if(taskValue){
            setToDoList((prevState) => [...prevState,taskValue]);
            setTaskValue("");
        }
    }

    const renderList = () => {
      return toDoList.map((task,index) => <li key={index}>{task}</li>)
    }
    
    
    console.log(toDoList)
    

    return(
        <div className="to-do-main-container">
            <ul>
                {renderList()}
            </ul>

            <input onChange={handleInputValue} value={taskValue} placeholder="Task"></input>
            <button onClick={addTask}>Add task</button>
        </div>
    )
}


export default ToDoList;