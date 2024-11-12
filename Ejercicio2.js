import React, { useState } from 'react';

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');

  const agregarTarea = () => {
    if (tarea.trim()) {
      const nuevaTarea = {
        indice: tareas.length + 1,
        tarea: tarea.trim(),
      };
      setTareas(prevTareas => [...prevTareas, nuevaTarea]);
      setTarea('');
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escriba una tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map(({ indice, tarea }) => (
          <li key={indice}>
            <strong>Tarea {indice}:</strong> {tarea}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
