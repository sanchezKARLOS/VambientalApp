import { useState } from "react";
import { Link } from "react-router-dom";


import "./Css/Style-I-S.css";
export default function SetAjustes() {
  const { selectedSalon, handleSalonClick } = useState([null]);


  return (
    <div className="salon-app">
      <div className="salon-buttons">
        {[
          {
            Nombre: "Editar Perfil",
              url :"",
              type:"Estudiante"
          },
          {
            Nombre: "Privacidad y Seguridad",
              url :"",
              type:"Admin"
          }
        ].map((salon, index) => (
    
            <button
              key={index}
              className={`_Ajuste-button ${
                selectedSalon === salon ? "active" : ""
              }`}
              onClick={() => handleSalonClick(salon)}
            >
              {salon.Nombre}
            </button>
          
        ))}
      </div>
    </div>
  );
}
