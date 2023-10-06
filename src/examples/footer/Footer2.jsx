import './style.css'
import {FaFacebook} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'

import Button from '../../assets/theme/components/button/Boton'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <footer class="_site-footer">
        <div class="_container">
            <div class="_footer-content">
                <div class="_footer-logo">
                    <img src="../../../public/Logos/logo.png" alt="Logo"/>
                </div>
                <div class="_footer-links">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><Button 
            size="small"
            className="btnA _cwhite"
             as={Link}
             to="/"
            title="Inicia Sesion" 
          >
            </Button></li>
                    </ul>
                </div>
                <div class="_footer-social">
                    <ul>
                        <li>
                        <a href="#">
                        <FaFacebook className='_lf'/></a>
                        </li>
                        <li><a href="#">
                        <AiFillLinkedin className='_ll'/>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="_footer-contact">
                <h3>Contacto</h3>
                <p>Correo:carlosstqm2225@gmail.com</p>
            </div>
        </div>
        <div class="_footer-bottom">
            <p>
  &copy; 2023 - Actualizado por última vez el 5/10/2023 </p>
        </div>
    </footer>
    </>
  )
}

export default Footer