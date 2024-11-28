import { useState } from "react";
import "../styles/ToDoList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faArrowDownLong,faArrowUpLong } from '@fortawesome/free-solid-svg-icons';


function ToDoList(){

    const [toDoList,setToDoList] = useState([]);
    const [taskValue,setTaskValue] =  useState("");


    const handleInputValue = (e) => {
        setTaskValue(e.target.value)
    }

    const addTask = () => {
        if(taskValue){
            setToDoList((prevState) => [...prevState,{task:taskValue,checked:false}]);
            setTaskValue("");
        }
    }

    const removeTask = (index) => {
        setToDoList((prevState) => prevState.filter(( _ , i) => i !== index))
    }

    const moveTask = (direction,index) => {
        
        if(direction === "up" && index > 0 ){
            setToDoList((prevState) => swapTaskOrder(prevState,index,index -1))
        }else if (direction === "down" && index < toDoList.length -1){
             setToDoList((prevState) => swapTaskOrder(prevState,index,index + 1))
        }
    }
    
    const swapTaskOrder = (list,index1,index2) => {
        const newTaskList = [...list];

        [newTaskList[index1],newTaskList[index2]] = [newTaskList[index2],newTaskList[index1]];

        return newTaskList
    }

    const handleCheckBoxChange = (clickedTask,index) => {
        setToDoList((prevState) => {
            return prevState.map((task,i) => {
                if(i === index){
                    return {
                        ...task,
                        checked:!task.checked
                    }
                }else{
                    return task
                }
                
            })
        })
    }

    const renderList = () => {
      return toDoList.map((task,index) => {
        return(
         <div key={index} className="task-container">
            <li>
            <label className="custom-checkbox">
                <input onChange={() => handleCheckBoxChange(task.task,index)} checked = {task.checked} type="checkbox"></input>
                <span>✔</span>
                <h2 className= {task.checked ? "checked-text" : "task-text"}>{task.task}</h2>
            </label>
            
            </li>
            <div className="button-container">
            <FontAwesomeIcon className="arrow-up-icon list-icon"  onClick={() => moveTask("up",index)} icon = {faArrowUpLong}></FontAwesomeIcon>
            <FontAwesomeIcon className="arrow-down-icon list-icon" onClick={() => moveTask("down",index)} icon = {faArrowDownLong}></FontAwesomeIcon>
            <FontAwesomeIcon className="trash-icon list-icon" onClick={() => removeTask(index)} icon={faTrashCan}></FontAwesomeIcon>
            </div>
        </div>)
      })
    }
    
    console.log(toDoList)
    return(
        <div className="to-do-main-container">
            <input onChange={handleInputValue} value={taskValue} placeholder="Task"></input>
            <button onClick={addTask}>Add task</button>
            
            <ul>
                {toDoList.length > 0 ? renderList() : <h1>No tasks</h1>}
            </ul>

            
        </div>
    )
}


export default ToDoList;