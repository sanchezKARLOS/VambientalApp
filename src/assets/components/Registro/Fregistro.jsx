import "./Fregistro.css";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Button from '../boton/Boton'

import { useContext, useState } from "react";
import {AppContext} from "../../../context/Content"
function Formulario() {
  const {LoginForm} =useContext(AppContext);
  console.log(LoginForm)
    


  // const handleSuccess =(data) => { console.log(data); }
  // const handleFailure =(data)=> { console.log('error', data); }


  return (
    <div className="cont-line">
      <div className="content">
      <div className="form-item">
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
        <div className="form">
          
        <form action="" className="form-container" onSubmit={LoginForm}>
            <div className="form-item">
              <input
                type="text"
                autoComplete="on"
                arial-required="true"
                max={20}
                min={3}
                id="name"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                className="input"
                placeholder="Nombre"
                title="Ingresa nombre y apellido."
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
                value={correo}
                onChange={e => setCorreo(e.target.value)}
                className="input"
                placeholder="Correo Electronico"
                title="Obligatorio"
              />
            </div>
            <div className="form-item">
              <input
              min={4}
              max={20}
                type="text"
                autoComplete="off"
                value={carrera}
                onChange={e => setCarrera(e.target.value)}
             
                id="carrera"
                className="input"
                placeholder="Carrera"
                title=""
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
                onChange={e => setPassw(e.target.value)}
                arial-required="true"
                className="input"
                placeholder="Constraseña"
                title="Ingresa nombre y apellido."
              />
            </div>

            <div className="form-item">
              <Button
              className='btnA'
              size='large'
              title='Registrarse'
              />
      </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
