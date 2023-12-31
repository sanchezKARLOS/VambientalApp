import "./Css/Navbar.css";
import { Sidebar } from "./Sidebar";
import Menu from "../../examples/Menu/MenuDesplegable";

function Navbar() {
  return (
    <>
      <nav className="main-menu">
        <div className="_dcNav">
          <div className="col-md-3 _dcnavtag _dnt1">
            <div className="profile-sidebar">
              <div className="profile-userpic">
                <img
                  src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                  className="img-responsive"
                  alt=""
                />
              </div>

              <div className="profile-usertitle _p-uDn">
                <div className="_cpun-puj">
                  <div className="profile-usertitle-name">
                    <p>Carlos Sanchez</p>
                  </div>
                  <div className="profile-usertitle-job">
                    <span>Ing Sistemas</span>
                  </div>
                </div>

                <div className="_cn-aj">
                  
                <button className="btn-ajustes" >A</button>
                 <button className="btn-notificar">N</button>
                  {/* iva el menu */}
                </div>
              </div>
            </div>
          </div>
          <div className="_tab-btns _dcnavtag _dnt2">
            <ul className="_ulSbar">
              <li className="_lict">
                <Sidebar />
              </li>
            </ul>
          </div>
          <div className="_dcnavtag _dnt3 _dnm">
            <ul className="logout">
              <li>
                <a href="#" className="_apdin">
                  <i className="fa fa-power-off fa-2x"></i>
                  <span className="nav-text">Cerrar Sesión</span>
                </a>
              </li>
              <li>
                <a href="#" className="_apdin">
                  <i className="fa fa-info fa-2x"></i>
                  <span className="nav-text">Documentación</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
