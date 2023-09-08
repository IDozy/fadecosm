import React from 'react';
import Navbar from './navbar/Navbar';
import WhatsAppButton from './whatsappbutton/WhatsAppButton';
import Footer from './footer/Footer';

const Contact = () => {
    return (
      <div>
        <Navbar></Navbar>
        <h1>Contáctanos</h1>
        <WhatsAppButton></WhatsAppButton>
        <Footer/>
      </div>
    );
};

export default Contact;