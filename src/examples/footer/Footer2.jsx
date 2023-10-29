import './style.css'
import {FaFacebook} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'

import Button from '../../assets/theme/components/button/Boton'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <footer className="_site-footer">
        <div className="_container">
            <div className="_footer-content">
                <div className="_footer-logo">
                    <img src="../../../public/Logos/logo.png" alt="Logo"/>
                </div>
                <div className="_footer-links">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                    </ul>
                    <Button 
            ctClass="tp"
            tpClass={false}
            size="small"
            className="btnA _cwhite"
             as={Link}
             to="/"
            title="Inicia Sesion" 
          >
            </Button>
                </div>
                <div className="_footer-social">
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
            <div className="_footer-contact">
                <h3>Contacto</h3>
                <p>Correo:carlosstqm2225@gmail.com</p>
            </div>
        </div>
        <div className="_footer-bottom">
            <p>
  &copy; 2023 - Actualizado por última vez el 5/10/2023 </p>
        </div>
    </footer>
    </>
  )
}

export default Footer