import { useState, useEffect } from "react";
import "../styles/todolist.css";

const ToDoList = ({showingToDoList, setShowingToDoList}) => {

    const [x, setx] = useState(0);

    const toggleShowToDoList = () => {
        setShowingToDoList (!showingToDoList)
        console.log("hola");
        setx (x + 1);
    }

    useEffect(() => {
        console.log("counter: " + x);
    }, [x])

    return (
        <div>
            {showingToDoList ? 
            <div>
                <h1>To Do List</h1>
            </div> : 
            <div>
                <h1>Not Showing</h1>
                
            </div>}
                <p>{x}</p>
            <button style = {showingToDoList ? {backgroundColor:"00ff00"} : {backgroundColor:"ff0000", color:"white"}} id = "coolbutton" onClick={toggleShowToDoList}>Hola Button</button>
        </div>
    );
}

export default ToDoList;