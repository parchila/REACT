import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasGuardadas);
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <Link to={`/detalle/${index}`}>{tarea}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
