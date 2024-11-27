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

    const moveTaskUp = (index) => {
       if(index > 0){
        return setToDoList((prevState) => {
            
            const newTaskList = [...prevState];
            
            [newTaskList[index],newTaskList[index - 1]] = [newTaskList[index -1], newTaskList[index]]
            
            return newTaskList;
        })
       } 
    }
    const moveTaskDown = (index) => {
        if(index < toDoList.length -1){
         return setToDoList((prevState) => {
             
             const newTaskList = [...prevState];
             
             [newTaskList[index],newTaskList[index + 1]] = [newTaskList[index + 1], newTaskList[index]]
             
             return newTaskList;
         })
        } 
     }

    const renderList = () => {
      return toDoList.map((task,index) => {
        
        return <div key={index} className="task-container">
                <li>{task}</li>
                <button onClick={() => removeTask(index)}>remove</button>
                <button onClick={() => moveTaskUp(index)}>move up</button>
                <button onClick={() => moveTaskDown(index)}>move down</button>
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