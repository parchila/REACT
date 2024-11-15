import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#db3b3b", color: "#fff", padding: "1rem" }}>
      <h1>Proyecto Final REACT</h1> 
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Inicio</Link>
        <Link to="/nueva" style={{ color: "#fff" }}>Agregar Nueva Tarea</Link>
      </div>
    </nav>
  );
};

export default Navbar;
