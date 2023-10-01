import { useState } from "react";
import { Link } from "react-router-dom";


import "./Css/Inicio.css";
export default function SetInicio() {
  const { selectedSalon, handleSalonClick } = useState([null]);


  return (
    <div className="salon-app">
      <div className="salon-buttons">
        {[
          {
            Nombre: "Lista Estudiante",
              url :"",
              type:"Admin"
          },
          {
            Nombre: "Datos de los sensores",
              url :"",
              type:"Admin"
          },
          {
            Nombre: "Ver Variables",
            url :"",
            type:"Estudiante"
          },
          {
            Nombre: "Agregar",
            url :"",
            type:"Admin"
          },
        ].map((salon, index) => (
          <Link to={`/Salon/${salon.id}`} key={index}>
            <button
              key={index}
              className={`salon-button ${
                selectedSalon === salon ? "active" : ""
              }`}
              onClick={() => handleSalonClick(salon)}
            >
              {salon.Nombre}
            </button>
            </Link>
        ))}
      </div>
    </div>
  );
}
