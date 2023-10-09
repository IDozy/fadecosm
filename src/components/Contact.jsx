import React from "react";
import Navbar from "./navbar/Navbar";
import WhatsAppButton from "./whatsappbutton/WhatsAppButton";
import Footer from "./footer/Footer";
import { Form } from "./contacto/Form";



export const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Contáctanos</h1>
      <Form/>
      <WhatsAppButton></WhatsAppButton>
      <Footer />
    </div>
  );
};
