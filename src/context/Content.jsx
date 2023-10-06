import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import axios from "axios";
import { PropTypes } from "prop-types";

// retorna un obejto que almacena los datos
export const AppContext = createContext(null);
AppContext.displayName = "Vambiental | App";

//componente que engloba al resto de componentes
export function ContentProvider({ children }) {
  useEffect(() => {
    axios
      .get("http://localhost:8000/usuario")
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const value=[{
    nombre:"carlos",
    apellido:"sanchez"
  }]

  return (
  <AppContext.Provider 
  value={value}>
    {children}
  </AppContext.Provider>
  )
}

const LoginForm = () => {
  const usuario = {
    nombre: nombre,
    correo: correo,
    carrera: carrera,
    passw: passw,
  };
  axios
    .post("http://localhost:8000/usuario", {
      usuario,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

function useContentController() {
  const Context = useContext(AppContext);
  if (!Context) {
    throw new Error(
      "useContentController should be used inside the ContentProvider "
    );
  }
  return Context;
}

ContentProvider.prototype = {
  children: PropTypes.node.isRequired,
};

export { useContentController };
