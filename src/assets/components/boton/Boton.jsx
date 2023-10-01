import PropTypes from "prop-types";

import "./Boton.css";

// EL COMPONENTE BOTON DEFINE LAS SIGUIENTE PROPIEDADES{
//   "title":"titulo del boton",
//    "url":"dirrecion donde apunta el boton",
//    "size":"tipo del tamaño del boton",
//    "classname":"clase que tiene el boton aparte de la predeterminada",
//    "icon":" solo si el boton lleva icono",
// }
function Button({ title,size, className, icon,onclick}) {
  const defaultBtnClass = "btn";
  const Bclass = className ? `${className}` : "undefine";
  const bnt =`${defaultBtnClass} ${Bclass} ${size}`;

  {
    size ? "successfull" : "el tamaño es requerido";
  }
  {
    title ? "successfull" : "texto es requerido";
  }
  {
    className ? "successfull" : "la clase es requerida";
  }
  {
    icon ? "successfull" : "undefine";
  }

  return (
    <>

     <button 
    
      onClick={onclick}
      className={bnt} 
     >
     {icon &&(<span className="icon-space">{icon}</span>)}
     <span className="tp">{title}</span>
      </button>

    </>
  );
}

Button.prototype = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,

};

// Button.defaultProps = {

// }
export default Button;
