import React from "react";
import Navbar from "./navbar/Navbar";
import WhatsAppButton from "./whatsappbutton/WhatsAppButton";
import Footer from "./footer/Footer";
import { Form } from "./contacto/Form";
import { Horarios } from "./contacto/Horarios";




export const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Contáctanos</h1>
      <Form/>
      <Horarios/>
      <WhatsAppButton></WhatsAppButton>
      <Footer />
    </div>
  );
};
