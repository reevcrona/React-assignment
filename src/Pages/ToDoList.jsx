import { useState } from "react";
import "../styles/ToDoList.css"
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

    const removeTask = (index) => {
        setToDoList((prevState) => {
          return  prevState.filter((_,i) => i !== index)
        })
    }

    const renderList = () => {
      return toDoList.map((task,index) => {
        
        return <div key={index} className="task-container">
                <li>{task}</li>
                <button onClick={() => removeTask(index)}>remove</button>
               </div>
      })
    }
    
    
    return(
        <div className="to-do-main-container">
            <ol>
                {toDoList.length > 0 ? renderList() : <h1>No tasks</h1>}
            </ol>

            <input onChange={handleInputValue} value={taskValue} placeholder="Task"></input>
            <button onClick={addTask}>Add task</button>
        </div>
    )
}


export default ToDoList;