import React from 'react';
import Navbar from './navbar/Navbar';
import WhatsAppButton from './whatsappbutton/WhatsAppButton';
import Footer from './footer/Footer';
import { CardProducto } from './cardProductos/CardProducto';




export const Products = () => {
  return (
    <div>
    <Navbar></Navbar>
    <CardProducto />
    <WhatsAppButton></WhatsAppButton>
    <Footer/>
    </div>
  );
};
