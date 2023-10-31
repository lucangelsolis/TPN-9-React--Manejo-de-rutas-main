import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {tasks.length > 0 ? (
        <ul style={{ marginBottom: "20px" }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  marginRight: "10px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: task.completed ? "#4CAF50" : "#ccc"
                }}
              ></div>
              <div>
                <span
                  style={{
                    marginRight: "10px",
                    textDecoration: task.completed ? "line-through" : "none"
                  }}
                >
                  {task.title} - {task.description}
                </span>
                <span>{task.completed ? "Completada" : "Pendiente"}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1>NO HAY NADA! NO HAY NINGUNA TAREA TODAVIA</h1>
      )}
    </div>
  );
}

export default TaskList;
