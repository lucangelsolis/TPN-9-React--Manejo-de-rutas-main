import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar" style={{ fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
          TPN°9 React- Manejo de rutas
        </h1>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
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
            <li>
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
          </ul>
        </nav>
      </div>
    </>
  );
}
