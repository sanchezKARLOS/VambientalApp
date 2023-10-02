import "./css/style.css";
import { useState } from "react";
import Layout from "../modal/layout";
import { FcGoogle } from "react-icons/fc";
import Button from "../boton/Boton";
import {Link} from "react-router-dom"
function Sesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,$/;
    if (emailpattern.test(value)) {
      setEmail(value);
    } else {
      console.log("NO ENTRO");
    }
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value.length >= 8 && value.length <= 20) {
      setPassword(value);
    }
  };
  return (
    <>
    <div className="login-box _lbPg">
      <div className="u-form-group">
      <Button
          icon={<FcGoogle className="fc-g" />}
          size="large"
          className="icon-button"
          title="Inicia con google"
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
      <form className="email-login">

        <div>
          <div className="u-form-group">
            <input
              id="email"
              title="Campo Obligatorio"
              onChange={handleInputChange}
              max={30}
              min={4}
              className="ipt"
              type="email"
              autoComplete="on"
              placeholder="Correo Electronico"
            />
          </div>
          <div className="u-form-group">
            <input
              id="password"
              title="Campo Obligatorio"
              max={30}
              min={4}
              onChange={handlePasswordChange}
              className="ipt"
              autoComplete="on"
              type="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className="u-form-group">
         <>

         <Button
           size="large" 
           className="btnA"
            title="Iniciar
             Sesión"
             >
             </Button>
       
         </>
        </div>
        <div className="u-form-group">
          <a href="#" className="forgot-password">
            ¿Olvidaste tu Contraseña?
          </a>
        </div>
       <div className="u-form-group">
       <div className="lb-header" />
       </div>
      </form>
      <div className="u-form-group">
        <Layout />
      </div>
    </div>

    </>
  );
}

export default Sesion;
