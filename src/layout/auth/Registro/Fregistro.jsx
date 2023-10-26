import "./Fregistro.css";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Button from "../../../assets/theme/components/button/Boton";
import {ValidareRegistro, isValidEmail} from '../../../context/js/validation'
import { useContext, useState } from "react";
import { useAuth } from "../../../context/Content";
function Formulario() {

  const [username, setuserName] = useState("");
  const [correo, setCorreo] = useState("");
  const [carrera, setCarrera] = useState("");
  const [passw, setPassw] = useState("");

  const messajeError = {}


  const handleRegister = () => {
    const validationError = ValidareRegistro(username, correo, carrera, passw);
    try {
      if (validationError) {
        alert(validationError);
        return;
      }
    } catch (error) {
      console.log("error al registrarse", error);
      throw error;
    }
  };

  return (
    <div className="cont-line">
      <div className="content">
        <div className="p-3">
          <h1 className="_titleh1">Registrate con</h1>
        </div>
        <div className="_ccspace">
          <Button
            icon={<FcGoogle className="fc-g" />}
            size="large"
            className="icon-button"
            title="Inicia con Google"
          ></Button>
          <div className="c-lb-h">
            <div>
              <div className="lb-header" />
            </div>
            o
            <div>
              <div className="lb-header" />
            </div>
          </div>
        </div>
        <form action="" className="form-container">
          <div className="form-item">
            <input
              type="text"
              autoComplete="on"
              arial-required="true"
              max={20}
              min={3}
              id="name"
              value={username}
              
              className="input"
              placeholder="Nombre"
              title="Ingresa nombre y apellido."
              required
            />
          </div>
          <div className="form-item">
            <input
              type="email"
              autoComplete="on"
              arial-required="true"
              min={7}
              max={25}
              id="correo"
              required
              value={correo}
              onChange={() => {}}
              className="input"
              placeholder="Correo Electronico"
              title="Campo Obligatorio"
              pattern="`[a-zA-Z0-9._%+-]+@unicesar\.edu\.co`"
            />
          </div>
          {isValidEmail ? (
        <p>Correo electrónico válido</p>
      ) : (
        <p>Correo electrónico no válido</p>
      )}
          <div className="form-item">
            <input
              min={4}
              max={20}
              type="text"
              autoComplete="off"
              value={carrera}
              onChange={e => setCarrera(e.target.value)}
              id="carrera"
              required
              className="input"
              placeholder="Carrera"
              title="Ingrese Carrera"
            />
          </div>
          <div className="form-item ">
            <input
              type="password"
              autoComplete="on"
              min={5}
              max={25}
              id="passw"
              value={passw}
              required
              onChange={e => setPassw(e.target.value)}
              arial-required="true"
              className="input"
              placeholder="Constraseña"
              title="Ingresa nombre y apellido."
            />
          </div>
        </form>
        <div className="form-item">
          <Button
            onClick={handleRegister}
            className="btnA"
            size="large"
            title="Registrarse"
          />
        </div>
        <div className="form-item _dcp relative">
          <p className="_letrasp">
            Al registrarte, aceptas los{" "}
            <a href="" className="_Reftc">
              Términos de servicio
            </a>{" "}
            y la{" "}
            <a href="" className="_Reftc">
              Política de privacidad
            </a>
            , incluida la política de{" "}
            <a href="" className="_Reftc">
              Uso de Cookies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
