import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NuevaTarea = () => {
  const [tarea, setTarea] = useState("");
  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault();
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    localStorage.setItem("tareas", JSON.stringify([...tareasGuardadas, tarea]));
    navigate("/");
  };

  return (
    <div>
      <h2>Nueva Tarea</h2>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Escriba su tarea"
        />
        <button type="submit">Guardar Tarea</button>
      </form>
    </div>
  );
};

export default NuevaTarea;
