import "./Fregistro.css";
import Registro from "../Registro/Fregistro";
import Footer from "../../../examples/footer/Footer2";
import Nav from "../../../examples/Navbar/NavRegistro";
function IndexRegistro() {
  return (
    <div className="_cchwfull">
      <div className="_ccnwfull-dos"></div>

      <div className="_cnF">
        <div className="_cN p-8">
          <Nav></Nav>
        </div>
        <div className="_css-1-cont-r">
          <div className="_css-2-cont _css-2-item">
            <div className="_dctt">
              <h1 className="_t-title">Sistema de Monitoreo Ambiental en Línea</h1>
            </div>
            <div className="_dcpf">
              <p className="_p-subfrase">Mejoramos la calidad ambiental en tiempo real para un entorno educativo saludable. <br/>¡Únete a nuestra comunidad en línea!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="_dcF">
        <div className="_dcontenform">
          <div className="_conteF"></div>
          <Registro></Registro>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default IndexRegistro;
