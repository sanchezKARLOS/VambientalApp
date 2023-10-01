import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// retorna un obejto que almacena los datos
export const AppContext = createContext();

export function useUserContext() {
  return useContext(useContext);
}

export function useUserToggleContext() {
  return useContext(useUserToggleContext);
}

//componente que engloba al resto de componentes
export function ContentProvider({ title = undefined, children }) {
  const [state, setState] = useState({});
  const [value, setValue] = useState({});
      
  const [nombre,setNombre]=useState("");
  const [correo,setCorreo]=useState("");
  const [carrera,setCarrera]=useState("");
  const [passw,setPassw]=useState("");
  const ListUsuarios = () => {
    const [listusuario, setListUsuario] = useState([{}]);
    // const [nUsuario, setnUsuario] = useState("");
    // const [correo, setCorreo] = useState("");
    // const [telefono, setTelefono] = useState("");
    // const [ulsesion, setUlSesion] = useState("");
    // const [carrera, setUlCarrera] = useState("");
    // const [type, setType] = useState("");
    // const [online, setOnline] = useState(Boolean);
    // const [passw, setPassw] = useState("");


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
  };

const LoginForm = () => {


  const usuario ={
    'nombre':nombre,
    'correo':correo,
    'carrera':carrera,
    'passw':passw
  }
  axios.post('http://localhost:8000/usuario', {
   usuario
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
   
};
  return (
    <>
    {/* //creamos el componente */}
      <AppContext.Provider value={{
        LoginForm,
        setState,
        setValue

      }}>
        <h1>{title}</h1>
        {children}
      </AppContext.Provider>
    </>
  );
}

// arreglo {}
// objeto [] , estructura de un objeto {}