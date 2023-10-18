import React, { useState } from "react";
import ModalWhatsapp from "./ModalWhatsapp";
import "font-awesome/css/font-awesome.min.css";
import "./whatsappbutton.css";

const WhatsAppButton = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal); // Cambia el estado del modal
  };

  return (
    <div>
      <button onClick={toggleModal} className="whatsapp-button" style={{ border: "none" }}>
        <i className="fa fa-whatsapp"></i> Contáctanos
      </button>
      {showModal && <ModalWhatsapp onClose={toggleModal} />}
    </div>
  );
};

export default WhatsAppButton;
