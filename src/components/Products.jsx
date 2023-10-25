import React from "react";
import Navbar from "./navbar/Navbar";
import WhatsAppButton from "./whatsappbutton/WhatsAppButton";
import Footer from "./footer/Footer";
import { CardProducto } from "./cardProductos/CardProducto";
import CardFierro from "./cardProductos/CardFierro";
import { CardPlastico } from "./cardProductos/CardPlastico";
import Header from "./contacto/Header";

export const Products = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <CardProducto />
      <CardFierro />
      <CardPlastico />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};
