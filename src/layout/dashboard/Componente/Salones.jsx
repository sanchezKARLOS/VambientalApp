import { useState } from "react";
import { Link } from "react-router-dom";
// import InfSalon from "./ComponeSalon/InfoSalon"
// import {useSalon} from './ComponeSalon/SalonProvider'

import "./Css/Style-I-S.css";
export default function SetSalone() {
  const { selectedSalon, handleSalonClick } = useState([null]); // Cambia usaSalon a useSalon

  return (
    <div className="salon-app">
      <div className="salon-buttons">
        {[
          {
            id: 2,
            Nombre: "Salon 112",
            Capacidad: 15,
            Temperatura: 15,
            Humedad: 24,
            UV: "Dia Nublado",
            C02: "Normal",
            VC02: "500",
            Fecha: "13/Noviembre/2023",
            CBatery: "Medio",
            InfArd: "Excelente",
          },

        ].map((salon, index) => (
          <button
            key={index}
            className={`salon-button ${
              selectedSalon === salon ? "active" : ""
            }`}
            onClick={() => handleSalonClick(salon)}
          >
           <span>
            {salon.Nombre}
           </span>
          </button>
        ))}
      </div>
      <div className="salon-content">
        {/* {selectedSalon && <InfSalon selectedSalon={selectedSalon}/>} */}
      </div>
    </div>
  );
}
