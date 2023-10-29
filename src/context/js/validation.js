import { ConnexionError, ValidatError } from "./Erros/Erros";

// const valueinput = document.getElementById("#input");
// const btn = document.getElementById("#Button");

// btn.addEventListener('click',()=>{
//   valueinput.value.length == 0 ? console.log("el campo no puede estar vacio")
//   :
//   console.log("Campo con datos")
// })


// document.querySelector('form')
// .addEventListener('submit', e =>{
//   e.preventDefault()
//   const data = Object.fromEntries(
//     new FormData(e.target)
//   )
//   alert(JSON.stringify(data))
// })


export const ValidateUsers = ({username, email, carrera, passw}) =>{
  if(!username) throw new ValidatError('Nombre es requerido')
  if(!email) throw new ValidatError('Email es requerido')
  if(!carrera) throw new ValidatError('Carrera es requerida')
  if(!passw) throw new ValidatError('Constraseña es requerida')

try {
  //mongodb
} catch (error) {
  throw new ConnexionError('database is not available')
  
}

}


try {
  ValidateUsers({username, email, carrera, passw})
} catch (error) {
  if(error instanceof ConnexionError){
    setTimeout(() =>{
      ValidateUsers({username,email,carrera,passw})
    })
  }

  if(error instanceof ValidatError){
    //showmodalvalidation()
  }
  
}




export function isValidEmail(correo){
    let emailAuth =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isvalid = emailAuth.test(correo);
    
    isvalid ? alert("El correo electronico es valido"):alert('Correo electronico no es validoxx')

    
  }


export function isValidName(username){
  if (username.length < 3 || username.length > 24) {
    return false;
  }
    
  const nameAuth = /^[a-zA-Z0-9\s]+$/; 
  // Permite letras, números y espacios
  return nameAuth.test(username);
}


export function ValidareRegistro(username, correo, carrera, passw) {
  if (!username || !correo || !carrera || !passw) {
    alert("Por favor, complete todos los campos..");
    return;
  }
  if (!isValidName(username)) {
    return "El nombre debe ser mayor a 3 caracteres no debe contener caracteres especiales.";
  }

  if (!isValidEmail(correo) && !correo.endsWith('unicesar.edu.co')) {
    return "Debes registrarte con el correo electrónico institucional (unicesar.edu.co).";
    return false
  }

  return null
}