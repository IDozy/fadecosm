import React, { useState } from "react";
import ModalWhatsapp from "./ModalWhatsapp";
import "font-awesome/css/font-awesome.min.css";
import "./whatsappbutton.css";
import "./modal.css";

const WhatsAppButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [alterValue, setAlterValue] = useState(false);
  const [containerPosition, setContainerPosition] = useState("absolute");

  const toggleModal = () => {
    if (!alterValue) {
      setShowModal(true);
      setContainerPosition("fixed");
    }

    setAlterValue(!alterValue);

    if (alterValue) {
      setTimeout(() => {
        setShowModal(false);
        setContainerPosition("absolute");
      }, 1000);
    }
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="whatsapp-button"
        style={{ border: "none" }}
      >
        <i className="fa fa-whatsapp" style={{ marginRight: "1rem" }}></i>{" "}
        Contáctanos
      </button>
      <div
        className="modal-container"
        style={{
          position: containerPosition,
          height: containerPosition === "absolute" ? "2rem" : "29rem",
        }}
      >
        <div className={`modal ${alterValue ? "active" : "disable"}`}>
          {showModal && (
            <ModalWhatsapp
              onClose={() => {
                setAlterValue(false);
                setShowModal(false);
                setContainerPosition("absolute");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
