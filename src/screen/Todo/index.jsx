import { useState, useEffect } from "react";
import Button from "../../Components/Button";
import TextArea from "../../Components/TextArea";
import Modal from "../../Components/Modal/index";

import "./index.css";

const index = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Please write some task.");
      return;
    }

    setTasks([...tasks, { text: task, id: tasks.length + 1 }]);
    setTask("");
  };

  const handleDetete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEdit = (taskObj) => {
    setIsModalOpen(true);
    setTaskToEdit(taskObj);
  };

  const handleEditChange = (e) => {
    setTaskToEdit({ ...taskToEdit, text: e.target.value });
  };

  const handleSaveEdit = () => {
    const updatedTasks = tasks.map((task) => (task.id === taskToEdit.id ? taskToEdit : task));
    setTasks(updatedTasks);
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  return (
    <>
      <nav className="nav-todo">Todo List</nav>
      <section id="textarea-section">
        <TextArea title="Enter a task" value={task} func={handleChange} />
        <Button variant="navy" size="large" title="Add a Task" func={handleAddTask} />
      </section>

      <section id="task-list">
        {tasks.length === 0 && <p>There is no Tasks</p>}
        <ul>
          {tasks.map((taskObj, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{taskObj.text}</span>
              <span className="btn-group">
                <Button variant="navy"title="Edit"func={() => {handleEdit(taskObj)}}/>
                <Button title="Delete" variant="red" func={() => handleDetete(taskObj.id)} />
              </span>
            </li>
          ))}
        </ul>
      </section>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} taskObj={taskToEdit} onChangeFunc={handleEditChange} onclose={() => {
            setIsModalOpen(false);
            setTaskToEdit(null);
          }}
          onSave={handleSaveEdit}
        />
      )}
    </>
  );
};

export default index;
