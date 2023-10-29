import "./Fregistro.css";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Button from "../../../assets/theme/components/button/Boton";
import {ValidareRegistro, isValidEmail} from '../../../context/js/validation'
import { useContext, useState } from "react";
function Formulario() {

  const [username, setuserName] = useState("");
  const [correo, setCorreo] = useState("");
  const [carrera, setCarrera] = useState("");
  const [passw, setPassw] = useState("");


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
            type="Submit"
            tpClass={true}
            icon={<FcGoogle className="fc-g" />}
            size="large"
            className="icon-button"
            title="Google"
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
              max={18}
              min={3}
              id="name"
              
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
              
              className="input"
              placeholder="Correo Electronico"
              title="Campo Obligatorio"
              pattern="`[a-zA-Z0-9._%+-]+@unicesar\.edu\.co`"
              required
            />
          </div>
         
          <div className="form-item">
            <input
              min={4}
              max={20}
              type="text"
              autoComplete="off"
              
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
              max={20}
              id="passw"
              
              required
              arial-required="true"
              className="input"
              placeholder="Constraseña"
              title="Ingresa nombre y apellido."
            />
          </div>

          <div>
          {isValidEmail ? (
        <p>Correo electrónico válido</p>
      ) : (
        <p>Correo electrónico no válido</p>
      )}
          </div>
        </form>
        <div className="form-item">
          <Button
            tpClass={false}
            ctClass="ttp"
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
