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
          return  prevState.filter((_,i) => {
              return  i !== index;
            })
        })
    }

    const moveTask = (direction,index) => {
        
        if(direction ==="up" && index > 0 ){
            setToDoList((prevState) => swapTaskOrder(prevState,index,index -1))
        }else if (direction === "down" && index < toDoList.length -1){
            return setToDoList((prevState) => swapTaskOrder(prevState,index,index + 1))
        }
    }
    
    const swapTaskOrder = (list,index1,index2) => {
        const newTaskList = [...list];

        [newTaskList[index1],newTaskList[index2]] = [newTaskList[index2],newTaskList[index1]];

        return newTaskList
    }

    const renderList = () => {
      return toDoList.map((task,index) => {
        
        return <div key={index} className="task-container">
                <li>{task}</li>
                <button onClick={() => removeTask(index)}>remove</button>
                <button onClick={() => moveTask("up",index)}>move up</button>
                <button onClick={() => moveTask("down",index)}>move down</button>
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