import React from 'react';
import logo from './logo.svg';
import './App.css';

function ListaLibros() {
  const libros = [
    { nombre: "Hombres de maiz", autor: "Miguel Angel Asturias", editorial: "Losada", edicion: "1a edicion" },
    { nombre: "El Señor Presidente", autor: "Miguel Angel Asturias", editorial: "Losada", edicion: "1a edicion" },
    { nombre: "La niña blanca y los pajaros sin pies", autor: "David Unger", editorial: "F&G Editores", edicion: "1a edicion" },
    { nombre: "Las huellas de Guatemala", autor: "Mario Roberto Morales", editorial: "FLACSO Guatemala", edicion: "1a edicion" },
    { nombre: "Insensatez", autor: "Horacio Castellanos Moya", editorial: "Tusquets Editores", edicion: "1a edicion" },
    { nombre: "Los Compadres", autor: "Luis de Leon", editorial: "Editorial Cultura", edicion: "1a edicion" },
    { nombre: "Mujeres en la alborada", autor: "Margarita Carrera", editorial: "Editorial Piedra Santa", edicion: "1a edicion" },
    { nombre: "Despues de las bombas", autor: "Arturo Arias", editorial: "Educa", edicion: "1a edicion" },
    { nombre: "El tiempo principia en Xibalba", autor: "Luis de Leon", editorial: "F&G Editores", edicion: "2a edicion" },
    { nombre: "Carcel de arboles", autor: "Rodrigo Rey Rosa", editorial: "Alfaguara", edicion: "1a edicion" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lista de Libros Guatemaltecos</h1>
        
        <ul>
          {libros.map((libro, index) => (
            <li key={index}>
              <h2>{libro.nombre}</h2>
              <p><strong>Autor:</strong> {libro.autor}</p>
              <p><strong>Editorial:</strong> {libro.editorial}</p>
              <p><strong>Edicion:</strong> {libro.edicion}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
export default ListaLibros;
