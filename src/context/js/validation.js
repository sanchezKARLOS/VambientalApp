export function isValidEmail(correo){
    let emailAuth =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isvalid = emailAuth.test(correo);
    
    isvalid ? alert("El correo electronico es valido"):alert('Correo electronico no es validoxx')

    
  }


export function isValidName(username){
  if (username.length < 3 || username.length > 25) {
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