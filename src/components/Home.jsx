import React from "react";
import WhatsAppButton from "./whatsappbutton/WhatsAppButton";
import Navbar from "./navbar/Navbar";
import Carousel from "./carousel/Carousel";
import Footer from "./footer/Footer.jsx";
import Info from "./info/Info";
import Counter from "./count/CounterElement";

import { Clientes } from "./sectionClientes/Clientes";
import { Proyectos } from "./proyectos/Proyectos";
import { NuestrosProductos } from "./productosCarrousel/NuestrosProductos";
import Header from "./contacto/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <WhatsAppButton />
      <Info />
      <Counter />
      <NuestrosProductos />
      <Proyectos />
      <Clientes />
      <Footer />
    </div>
  );
};

export default Home;
