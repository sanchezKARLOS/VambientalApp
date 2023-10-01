import { SlClose } from "react-icons/sl";
import "./modal.css";
import { useState } from "react";
import Registro from "../Registro/Fregistro";
import Button from "../boton/Boton";

function Layout() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <span onClick={toggleModal}>
      <Button
        onClick={stopPropagation}
        size="medium"
        className="btnv"
        title="Registrate"
      />
      {showModal && (
        <Modal
          onClose={toggleModal}
          title="Registrate con nosotros"
          form={<Registro />}
        />
      )}
    </span>
  );
}

const Modal = ({ form, title, onClose }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      <div className="modal-background">
        <div className="modal-box" onClick={stopPropagation}>
          <i onClick={onClose} className="closeBtn">
            <SlClose />
          </i>
          <div className="heading">
            <h1 className="title-h">{title}</h1>
          </div>
          <div className="content-f">{form}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
