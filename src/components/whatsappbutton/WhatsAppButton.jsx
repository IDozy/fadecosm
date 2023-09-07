import React from 'react';
import './whatsappbutton.css';
import 'font-awesome/css/font-awesome.min.css'; 


function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=51982221755"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp"></i> Contáctanos
    </a>
  );
}

export default WhatsAppButton;