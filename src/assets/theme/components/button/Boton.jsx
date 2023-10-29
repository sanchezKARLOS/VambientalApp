import PropTypes from "prop-types";
import "./Boton.css";

// EL COMPONENTE BOTON DEFINE LAS SIGUIENTE PROPIEDADES{
//   "title":"titulo del boton",
//    "url":"dirrecion donde apunta el boton",
//    "size":"tipo del tamaño del boton",
//    "classname":"clase que tiene el boton aparte de la predeterminada",
//    "icon":" solo si el boton lleva icono",
// }
function Button({
  title,
  size,
  className,
  icon,
  type,
  onClick,
  as: Component = "button",
  tpClass,
  ctClass,
  ...rest
}) {
  const defaultBtnClass = "btn";
  const Bclass = className ? `${className}` : "undefine";
  const bnt = `${defaultBtnClass} ${Bclass} ${size}`;

  const SeleClass = tpClass ? "tp" : ctClass || "";


  const divContainClassFlex = `_dcbtn ${icon ? ' _dvFlex' : ''}`;
  const DivIconc = '_dc-d-icon'
  const DivTitle = '_dc-d-title'
 
  const divTitleIcon = `${DivTitle} ${icon ? 'gg':''}`;


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
    <Component
      type={type}

      className={bnt} onClick={onClick} {...rest}>
      <div className={divContainClassFlex}>
        <div className={DivIconc}>
          {icon && <span className="icon-space">{icon}</span>}
        </div>
        <div className={divTitleIcon}>
          <span className={SeleClass}>{title}</span>
        </div>
      </div>
    </Component>
  );
}

Button.prototype = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  tpClass: PropTypes.bool,
  ctClass: PropTypes.string
};

// Button.defaultProps = {

// }
export default Button;
