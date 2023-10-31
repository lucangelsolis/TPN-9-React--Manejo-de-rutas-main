import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Root from "./routes/root";
import TaskList from "./TaskList";
import CreateNewTaskForm from "./CreateNewTaskForm";

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ display: "inline-block", marginRight: "10px" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                padding: "5px 10px",
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: "5px"
              }}
            >
              Home
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "10px" }}>
            <Link
              to="/tasklist"
              style={{
                textDecoration: "none",
                padding: "5px 10px",
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: "5px"
              }}
            >
              Task List
            </Link>
          </li>
          <li style={{ display: "inline-block" }}>
            <Link
              to="/create"
              style={{
                textDecoration: "none",
                padding: "5px 10px",
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: "5px"
              }}
            >
              Crear Tarea
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/create" element={<CreateNewTaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
