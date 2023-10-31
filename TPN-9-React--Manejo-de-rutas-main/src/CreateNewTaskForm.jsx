import { useState, useEffect } from "react";

function CreateNewTaskForm() {
  const [tasks, setTasks] = useState([]);

  const completeTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  const addTask = (task) => {
    if (task.title !== "" || task.description !== "") {
      setTasks([...tasks, task]);
    }
    console.log(tasks);
  };

  const handleAddTasks = (e) => {
    e.preventDefault();

    const task = {
      title: e.target.title.value,
      description: e.target.description.value,
      completed: false
    };

    addTask(task);
  };

  useEffect(() => {
    console.log(tasks);
    // Guardar los datos en el almacenamiento local
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // Obtener los datos del almacenamiento local al cargar la página
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1>Crear una tarea:</h1>
      <form onSubmit={handleAddTasks}>
        <p>Titulo:</p>
        <input
          type="text"
          name="title"
          style={{
            padding: "5px",
            marginBottom: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
        <p>Descripcion:</p>
        <input
          type="text"
          name="description"
          style={{
            padding: "5px",
            marginBottom: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
        <input
          type="submit"
          value="Agregar"
          style={{
            padding: "5px 10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        ></input>
      </form>
      <hr />
      <h2>Lista de tareas:</h2>
      <ul>
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
                backgroundColor: task.completed ? "#4CAF50" : "#FF0000"
              }}
            ></div>
            <span
              style={{
                marginRight: "10px",
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              {task.title} - {task.description}
            </span>
            {task.completed ? "Completada" : "Pendiente"}{" "}
            {task.completed ? (
              console.log("Completada")
            ) : (
              <button
                onClick={() => completeTask(index)}
                style={{
                  marginLeft: "10px",
                  padding: "3px 5px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Completar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreateNewTaskForm;
