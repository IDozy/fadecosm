import React from 'react';
import Navbar from './navbar/Navbar';
import WhatsAppButton from './whatsappbutton/WhatsAppButton';
import Footer from './footer/Footer';
import { CardProducto } from './cardProductos/CardProducto';
import { NuestrosProductos } from './productosCarrousel/NuestrosProductos';
import  CardFierro  from './cardProductos/CardFierro';
import { CardPlastico } from './cardProductos/CardPlastico';




export const Products = () => {
  return (
    <div>
    <Navbar></Navbar>
    <NuestrosProductos/>
    <CardProducto />
    <CardFierro/>
    <CardPlastico/>
    <WhatsAppButton></WhatsAppButton>
    <Footer/>
    </div>
  );
};
