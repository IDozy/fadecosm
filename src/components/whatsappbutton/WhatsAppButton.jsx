import React, { useState } from "react";
import ModalWhatsapp from "./ModalWhatsapp";
import "font-awesome/css/font-awesome.min.css";
import "./whatsappbutton.css";
import "./modal.css";

const WhatsAppButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [variable1, setVariable1] = useState(false);

  const toggleModal = () => {
    if (!variable1) {
      setShowModal(true);
    }

    setVariable1(!variable1); // Activa variable1

    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="whatsapp-button"
        style={{ border: "none" }}
      >
        <i className="fa fa-whatsapp" style={{marginRight: "1rem" }}></i> Contáctanos
      </button>
      <div className="modal-container">
        <div className={`modal ${variable1 ? "active" : "disable"}`}>
          {showModal && (
            <ModalWhatsapp
              onClose={() => {
                setVariable1(false);
                setShowModal(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
