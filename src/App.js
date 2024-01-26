import {useState} from "react";
import Task from "./components/Task";
import "./App.css"

function App() {
    const [tasks, setTasks] = useState([])
    const [newTaskText, setNewTaskText] = useState("")

    const addTask = () => {
        if (newTaskText !== "") {
            setTasks([...tasks,
                {
                    id: Math.random(),
                    text: newTaskText,
                    completed: false
                }])
            setNewTaskText("")
        }
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((item) => item.id !== id))
    }

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <div className="tasksBlock">
                <div className="newTaskInputBlock">
                    <input
                        type="text"
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                    />
                    <button onClick={addTask}>Add task</button>
                </div>
                <ul>
                    {tasks.map((task) => (
                        <Task key={task.id} taskProp={task} deleteTask={deleteTask}/>
                    ))}
                </ul>
            </div>
        </div>
  );
}

export default App;
