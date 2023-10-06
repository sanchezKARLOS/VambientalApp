import './style.css'
import Button from '../../assets/theme/components/button/Boton'
import { Link } from 'react-router-dom'

function NavRegistro() {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">  
          <div className="logo">
            <h1 className='_Vam'>Vambiental</h1>
          </div>
          <div className="menu-items">
            <li><a href="#">Sobre Nosotros</a></li>
            <li>
            <Button 
            size="small"
            className="btnA"
             as={Link}
             to="/"
            title="Inicia Sesion" 
          >
            </Button>
            </li>
           
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavRegistro