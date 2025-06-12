import { useState } from "react";
import "./index.css";

const index = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Please write some task.");
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDetete = (index) => {
    const updatedTasks = tasks.filter((_,i) => i !== index);//_ (underscore) is used to ignore the value of the task at that index
    // const updatedTasks = tasks.filter((task, i) => i !== index); // This is another way to do it
    setTasks(updatedTasks);
  }

  return (
    <>
      <nav>Todo List</nav>
      <section id="textarea-section">
        <textarea id="textarea" placeholder="Enter a task" value={task} onChange={handleChange} />
        <button id="add-Task" onClick={handleAddTask}>
          Add a Task
        </button>
      </section>

      <section id="task-list">
        {tasks.length === 0 && <p>There is no Tasks</p>}
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{task}</span>
              <span className="btn-group">
                <button className="editBtn">Edit</button>
                <button onClick={()=>{handleDetete(index)}} className="deleteBtn">Delete</button>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default index;
