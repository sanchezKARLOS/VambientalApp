

export class ConnexionError extends Error {
    constructor(mensaje){
        super(message)
        this.message
        this.name = "Error de Conexion";
    }
}


export class ValidatError extends Error {
    constructor(mensaje){
        super(message)
        this.message
        this.name = "Error de Validacion de los datos";
    }
}