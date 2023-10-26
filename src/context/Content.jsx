import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";


import { AdiccionarUser } from "./js/PostRegistro";
import { PropTypes } from "prop-types";

// retorna un obejto que almacena los datos
export const AppContext = createContext(null);
AppContext.displayName = "Vambiental | App";

export const useAuth = () =>{
  return useContext(AppContext);
}

//componente que engloba al resto de componentes
export function ContentProvider({ children }) {
  const [user, setUser] = useState(null);
  const sinup = async (username, correoinst, carrera, passw) => {
    try {
      const response = await AdiccionarUser(
        username,
        correoinst,
        carrera,
        passw
      );
      console.log(response);
      setUser({ username, correoinst, carrera, passw });
    } catch (error) {}
  };

  const value = [
    {
      user,
      sinup,
    },
  ];

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
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
