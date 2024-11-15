import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import ListaTareas from "./Componentes/ListaTareas";
import NuevaTarea from "./Componentes/NuevaTarea";
import DetalleTarea from "./Componentes/DetalleTarea";
import Footer from "./Componentes/Footer"; 

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "1rem", paddingBottom: "3rem" }}> 
        <Routes>
          <Route path="/" element={<ListaTareas />} />
          <Route path="/nueva" element={<NuevaTarea />} />
          <Route path="/detalle/:id" element={<DetalleTarea />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
