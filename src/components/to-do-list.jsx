import { useState, useEffect } from "react";
import "../styles/todolist.css";

const ToDoList = () => {

    const [showingToDoList, setShowingToDoList] = useState(true);
    const [x, setx] = useState(0);
    const [text, settext] = useState("");
    const [array, setarray] = useState(["fuck elliots mummy", "fuck nats mummy"]);

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
                <input placeholder = "gayyy" value = {text} onChange = {(e) => {settext (e.target.value)}}></input>
                <button style = {{marginLeft : `${x}px`}} onClick={() => {setarray ([...array, text])}}>SUBMIT</button>
                {array.map((item, index) => (
                    <li>{item}</li>
                ))}
            </div> : 
            <div>
                <h1>Not Showing</h1>
            </div>}
                <p>{x}</p>
            <button style = {showingToDoList ? {backgroundColor:"00ff00"} : {backgroundColor:"ff0000", color:"white"}} id = "coolbutton" onClick={toggleShowToDoList}>Hola Button</button>
        </div>
    )
}

export default ToDoList;