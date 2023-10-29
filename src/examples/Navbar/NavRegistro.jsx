import "./style.css";
import Button from "../../assets/theme/components/button/Boton";
import { Link } from "react-router-dom";

function NavRegistro() {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <img src="../../../public/logo_white.png" alt="Logo" />
          </div>
          <div className="menu-items">
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
            <li>
              <Button
                tpClass={false}
                ctClass="ttp"
                size="small"
                className="btnA"
                as={Link}
                to="/"
                title="Inicia Sesion"
              ></Button>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavRegistro;
