import "./principal.css";
import Footer from "../../examples/footer/Footer";
import Sesion from "../auth/Sesion/Fsesion";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


function Index() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isLogin = location.pathname === "/";
      const isMobile = window.innerWidth <= 840;
      setShowFooter(!isLogin || isMobile);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  return (
    <>
      <div className="_sc ps">
        <div className="Container-1">
          <div className="_u-c">
            <div className="showcase">
              <img className="_iclupc"
               src="../../../public/lg.png" alt="Universidad Popular de Cesar" />
               <div className="_dvgmi"></div>
              
            </div>
          </div>
          <div className="_sbt _ptg _ptp" id="_sbt">
          <div className="content-boxshadow">
                <div className="div100">
                  <div className="centered-div">
                    <div className="showcase-content">
                  <img src="../../../public/variable.png" alt="logo" />


                      {/* <h1 className="Vambiental-header">
                        Vambiental
                        <br />
                        App
                      </h1> */}
                    </div>
                  </div>
                </div>
              </div>
            <Sesion />
          </div>
        </div>
      </div>

      <>
        <Footer show={showFooter}/>
      </>
    </>
  );
}

export default Index;
