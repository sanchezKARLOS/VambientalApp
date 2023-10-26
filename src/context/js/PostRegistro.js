import axios from "axios";
const PostRegistro = "";

export async function AdiccionarUser(username, correoinst, carrera, passw) {
  const usuario = {
    nombre: username,
    correo: correoinst,
    carrera: carrera,
    passw: passw,
  };

  if (!nombre || !correo || !carrera || !passw) {
    alert("Por Favor, Completo todo los campos.");
    return;
  }

  try {
    const response = await axios
      .post("http://localhost:8000/usuario", { usuario })
      .then((response) => {
        const data = response.data;
        console.log(data);
      });
    console.log("response",response)
    return response.data;
    
  } catch (error) {
    console.error("Error de registro", error);
    throw error;
    alert("el registro falló. Por favor, intente nuevamente.");
  }
}
