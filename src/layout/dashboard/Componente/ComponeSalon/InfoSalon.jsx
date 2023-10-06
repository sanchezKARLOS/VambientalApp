

function InfoSalon({Nombre,Capacidad,Temperatura,Humedad}) {
  return (
    <div className="informacion-salon">
      <h2>Información del Salón</h2>
      <h3>Información del {Nombre}</h3>
        <p>Capacidad: {Capacidad}</p>
        <p>Temperatura: {Temperatura}</p>
        <p>Humedad: {Humedad}</p>
      {/* Agrega más información aquí según tus necesidades */}
    </div>
  )
}

export default InfoSalon