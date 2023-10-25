import React from "react";
import Navbar from "./navbar/Navbar";
import WhatsAppButton from "./whatsappbutton/WhatsAppButton";
import Footer from "./footer/Footer";
import { Form } from "./contacto/Mapa";
import ContactForm from "./contacto/ContactForm";
import Header from "./contacto/Header";

export const Contact = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <ContactForm />
      <Form />
      <WhatsAppButton/>
      <Footer />
    </div>
  );
};
