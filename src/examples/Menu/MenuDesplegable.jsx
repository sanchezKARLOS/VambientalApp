import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Icon from "../../layout/dashboard/ComponetSidebar/Icon";

const optiones = ["Notification","Ajustes"]

function MenuD({}) {
  const [activeMenu, setActiveMenu] = useState(false);

  const HandleToggleMenu = () => {
    console.log('Estado actual de isActive:', activeMenu);
    setActiveMenu(!activeMenu);
    console.log(true)
  };


  return (
    <>
     
         {optiones.map((opcion, index) =>{
           <button onClick={HandleToggleMenu}  className={`menu-button ${activeMenu ? 'active' : false}`} > 
           <Icon 
           key={index}
           icon={opcion} />
        </button>
         })}
        
      {activeMenu && (
        <ul className="menu-list">
          {optiones.map((opcion, index) => (
            <li key={index} className="menu-item">
              <Link className="_at" to="#">{opcion}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MenuD;
