import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleTarea = () => {
  const { id } = useParams();
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTarea(tareasGuardadas[id]);
  }, [id]);

  return (
    <div>
      <h2>Detalle de la Tarea(s)</h2>
      {tarea ? (
        <p>{tarea}</p>
      ) : (
        <p>No se encontró la tarea con el ID especificado.</p>
      )}
    </div>
  );
};

export default DetalleTarea;
