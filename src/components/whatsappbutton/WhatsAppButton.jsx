import React, { useState } from "react";
import ModalWhatsapp from "./ModalWhatsapp";
import "font-awesome/css/font-awesome.min.css";
import "./whatsappbutton.css";
import "./modal.css";

const WhatsAppButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [alterValue, setAlterValue] = useState(false);

  const toggleModal = () => {
    if (!alterValue) {
      setShowModal(true);
    }

    setAlterValue(!alterValue); // Activa variable1

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
        <div className={`modal ${alterValue ? "active" : "disable"}`}>
          {showModal && (
            <ModalWhatsapp className={"disable"}
              onClose={() => {
                setAlterValue(false);
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
