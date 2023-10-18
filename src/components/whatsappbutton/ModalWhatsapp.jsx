import React from "react";
import "./modal.css";
import imagen from "../../assets/avatar-de-perfil.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalWhatsapp = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>

                {/* Parte 1: Ventas */}
                <div className="modal-section-ventas">
                    <img className="img-modal" src={imagen} alt="" />
                    <p>Ventas Fadeco.</p>
                </div>

                {/* Parte 2: Estamos en línea */}
                <div className="modal-section-linea">
                    <p className="text-modal-p">En linea ahora en Whatsapp</p>

                </div>

                {/* Parte 3: Cuadro de texto y envío de mensaje */}
                <div className="modal-section-message">
                    <textarea
                        className="message-box"
                        placeholder="Escribe tu duda aqui"
                    />
                    <button className="send-button"><FontAwesomeIcon icon="fa-location-arrow" size="sm" /></button>
                </div>
            </div>
        </div>
    );
};

export default ModalWhatsapp;
