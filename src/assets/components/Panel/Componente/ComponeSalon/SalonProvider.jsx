// import React, { createContext, useContext, useState } from "react";

// const SalonContext = createContext();

// export const SalonProvider = ({ children }) => {
//   const [salones, setSalones] = useState([]); 

//   return <SalonContext.Provider value={{ value}}>{children}</SalonContext.Provider>;
  
// };

// export const useSalon = () => {
//   const context = useContext(SalonContext);
//   if (!context) {
//     throw new Error("useSalon debe ser utilizado dentro de un SalonProvider");
//   }
//   return context;
// };
