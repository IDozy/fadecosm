import React from 'react';
import Navbar from './navbar/Navbar';
import WhatsAppButton from './whatsappbutton/WhatsAppButton';

const Contact = () => {
    return (
      <div>
        <Navbar></Navbar>
        <h1>Contáctanos</h1>
        <WhatsAppButton></WhatsAppButton>
      </div>
    );
};

export default Contact;