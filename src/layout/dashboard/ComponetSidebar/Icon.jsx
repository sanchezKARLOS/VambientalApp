import "./Icon.css";

//importaciones de los iconos
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { BsDoorClosedFill } from "react-icons/bs";

const Icon = ({ icon, isActive, onClick, index }) => {
  let IconComponent = null;

  switch (icon) {
    case "Inicio":
      IconComponent = BiSolidHomeAlt2;
      break;
    case "Salones":
      IconComponent = BsDoorClosedFill;
      break;
    case "Ajustes":
      IconComponent = IoSettingsSharp;
      break;
    case "Notification":
        IconComponent = IoSettingsSharp;
        break;
    default:
      return null;
  }

  const IconAct = {
    fontSize: "22px",
    color: isActive ? "#004A99" : "black",
  };

  return (
    <span className="_mso icon-container" onClick={onClick}>
      <IconComponent style={IconAct} className="icon" />
    </span>
  );
};

export default Icon;
