import { useState, useContext } from "react";
// import  {ViewAppContext} from '../../../context/Content'
import "./Css/Styles.css";
import Cards from '../Cards/VappCard'
import Search from "./Componente/Search";
// import SetSalone from "./Componente/Salones";
// import { Route } from "react-router-dom";
// import { useSalon } from "./Componente/ComponeSalon/SalonProvider";

import Navbar from "./Navbar";
// import Card from "./Componente/TCard";

function Dashboard() {
  //   const [salones, setSalones] = useState([]);
  //   const handleSalonClick = (salon) => {
  //     console.log("Salón seleccionado:", salon.Nombre);
  //   };
  // const valor = useContext(ViewAppContext)
  // console.log(valor)
  return (
    <>
      <div className="_dcNTldmas">
        <div className="_cn _dd1">
          <Navbar />
        </div>
        <div className="_cas dd2">
          {/* <aside className="_accHF _accPG">
            <Search></Search>
          </aside> */}
<Cards/>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
