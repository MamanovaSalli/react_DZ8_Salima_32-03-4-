// import React, {useState} from 'react';
//
// function Task({taskProp, deleteTask}) {
//     const [text, setText] = useState(taskProp.text)
//     const [isCompleted, setIsCompleted] = useState(taskProp.completed)
//
//     return (
//         <li className="task">
//             <input type="checkbox" checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)}/>
//             <input className={`input  ${isCompleted ? "checked" : ""}`} value={text} type="text"
//                    onChange={(e) => setText(e.target.value)}/>
//             <button onClick={() => {
//                 deleteTask(taskProp.id)
//             }}>delete
//             </button>
//         </li>
//     );
// }
//
// export default Task;
