import "./principal.css";
import Footer from "./assets/components/Footer/Footer";

import Sesion from "./assets/components/Sesion/Fsesion";
function Principal() {
  return (
    <>
      <div className="Container-1">
        <div className="u-c showcase">
          <div className="_titleShow">
            <div className="content-boxshadow">
              <div className="div100">
                <div className="centered-div">
                  <div className="showcase-content">
                    <h1 className="Vambiental-header">
                      Vambiental
                      <br />
                      App
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="_sbt _ptg _ptp" id="_sbt">
          <Sesion />
         
        </div>
   
      </div>
       
       <>
      <Footer />
      </>
    </>
  );
}

export default Principal;

{
  /* <div className="content-f w-full">
<div className="_dsc">
  <div className="_dct">
  <h1 className="_dvht">Vambiental App</h1>
  </div>
</div>

</div> */
}
