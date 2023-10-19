import React, { useState } from "react";
import "./modal.css";
import imagen from "../../assets/avatar-de-perfil.png";
import enviar from "../../assets/submit.svg";

const ModalWhatsapp = ({ onClose }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const phoneNumber = "982221755"; // Reemplaza con el número de teléfono deseado
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const encodedMessageText = encodeURIComponent(message);
    const whatsappURL = `https://web.whatsapp.com/send?phone=${encodedPhoneNumber}&text=${encodedMessageText}`;
    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <div className="modal-content">
      <span className="close" onClick={onClose}>
        &times;
      </span>

      <div className="modal-section-ventas">
        <img className="img-modal" src={imagen} alt="" />
        <p>Ventas Fadeco.</p>
      </div>

      <div className="modal-section-linea">
        <p className="text-modal-p">En línea ahora en WhatsApp</p>
      </div>

      <div className="modal-section-message">
        <input
          type="text"
          className="message-box"
          placeholder="Escribe tu duda aquí"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <svg
          className="enviar"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="10 -10 48 48"
          onClick={handleSend}
        >
          <path
            d="M38.448 26.128 52.49 18.66a2.72 2.72 0 0 0 0-4.8l-27.736-14.756a2.719 2.719 0 0 0-1.826-.264l-6.712 1.38a2.719 2.719 0 0 0-1.7 4.192l6 8.824c.596.88 1.564 1.434 2.624 1.506l22.284 1.512-22.77 1.694a2.72 2.72 0 0 0-1.646.646l-6.15 9.074a2.719 2.719 0 0 0 1.742 4.196l6.144 1.17c.748.141 1.518.03 2.188-.166z"
            fill="#22c15e"
          />
        </svg>
      </div>
    </div>
  );
};

export default ModalWhatsapp;
