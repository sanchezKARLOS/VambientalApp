import "./style.css";
function Footer() {
  return (
    <>
      <footer className="site-footer w-full">
        <div className="container _cwf w-full">
          <div className="row _rowMB w-full flex">
            <div  id="_cs1" className="col-sm-12 h-full justify-between">
              <div>
                <h6 className="font-medium text-gray-700 pl-2 _tcenter _textF">
                  Plataforma Virtual para el Monitoreo de Variables Ambientales
                </h6>
              </div>
              <div className="content-icon _cim p-2">
              <p className="_textF">
              Monitoreamos y mejoramos variables ambientales en tiempo real
                para un entorno educativo saludable y de calidad. ¡Únete a
                nuestra comunidad en línea!
              </p>
              </div>
            </div>
            <div className="_dgmi _dmgiAfter _dgmiG _dgmiP">
              <img
                className="_cgmi"
                src="../public/logos/logo.png"
                alt="Logo"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <div className="flex w-full">
                <div className="w-full bg-white grid">
                  <div>
                    {" "}
                    <p className="text-justify t-c p-4 inline-block _textF">
                      Universidad Popular del Cesar, Seccional Aguachica.
                    </p>
                  </div>
                  <div className="m-2">
                    <a className="get-movil _textF" href="#">
                      Obten la aplicacion Movil
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12 ">
              <ul className="social-icons">
                <li className="_tp">
                  <p className="copyright-text inline-block w-full _textF">
                    Copyright &copy; 2023 - Ambiente Web
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
