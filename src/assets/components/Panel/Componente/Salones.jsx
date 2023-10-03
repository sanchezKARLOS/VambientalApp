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
            id: 1,
            Nombre: "Salon 110",
            Capacidad: 30,
            Temperatura: 25,
            Humedad: 34,
            UV: "Dia Caluroso",
            C02: "Normal",
            VC02: "300",
            Fecha: "12/Noviembre/2023",
            CBatery: "Medio",
            InfArd: "Excelente",
          },
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
          {
            id: 3,
            Nombre: "Salon 107",
            Capacidad: 12,
            Temperatura: 45,
            Humedad: 54,
            UV: "Dia Muy Caluroso",
            C02: "Normal",
            VC02: "100",
            Fecha: "14/Noviembre/2023",
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
