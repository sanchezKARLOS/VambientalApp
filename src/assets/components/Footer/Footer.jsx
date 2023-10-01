import "./style.css";
function Footer() {
  return (
    <>
      <footer className="site-footer w-full">
        <div className="container _cwf w-full">
          <div className="row _rowMB w-full flex">
            <div className="col-sm-12 w-full h-full justify-between">
             <div>
             <h6 className="font-medium text-gray-700 pl-2 _tcenter">
                Plataforma Virtual para el Monitoreo de Variables Ambientales
              </h6>
             </div>
              <div className="content-icon _cim p-2">
                Monitoreamos y mejoramos variables ambientales en tiempo real
                para un entorno educativo saludable y de calidad. ¡Únete a
                nuestra comunidad en línea!
              </div>
            </div>
           <div className="_dgmi _dgmiG _dgmiP">
            <img  className="_cgmi" src="../public/logos/logo.png" alt="Logo" />
           </div>  
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-md-8 col-sm-6 col-xs-12">
              <div className="flex w-full">
                <div className="w-full bg-white grid">

                  <div> <p className="text-justify t-c p-4 inline-block">
                    Universidad Popular del Cesar, Seccional Aguachica.
                  </p></div>
               <div className="m-2"><a className="get-movil" href="#">
                    Obten la aplicacion Movil
                  </a></div>
                  
                 
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li className="_tp">
                <p className="copyright-text inline-block w-full">
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
