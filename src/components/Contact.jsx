import React from "react";
import Navbar from "./navbar/Navbar";
import WhatsAppButton from "./whatsappbutton/WhatsAppButton";
import Footer from "./footer/Footer";
import { Form } from "./contacto/Form";
import { Horarios } from "./contacto/Horarios";
import ContactForm from "./contacto/ContactForm";




export const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
    
     
   
      <ContactForm/>
      <Form/>
      <WhatsAppButton></WhatsAppButton>
      <Footer />
    </div>
  );
};
