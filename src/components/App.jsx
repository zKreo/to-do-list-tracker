import ToDoList from "./to-do-list";
import { useState } from "react";

const App = () => {
    
    const [showingToDoList, setShowingToDoList] = useState(true);

    return (
        <div>
            <ToDoList showingToDoList = {showingToDoList} setShowingToDoList = {setShowingToDoList}/>
        </div>
    );
}

export default App;