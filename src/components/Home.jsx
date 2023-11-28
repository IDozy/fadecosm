import React from "react";
import Carousel from "./carousel/Carousel";
import Info from "./info/Info";
import Counter from "./count/CounterElement";
import { Clientes } from "./sectionClientes/Clientes";
import { Proyectos } from "./proyectos/Proyectos";
import { NuestrosProductos } from "./productosCarrousel/NuestrosProductos";
import Servicios from "./servicios/Servicios";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
      <title>FADECO SAN MARTIN - Inicio</title>
      <meta name="description" content="Bienvenido a FADECO SAN MARTIN. Más de 10 años de experiencia en la fabricación de prefabricados de concreto. Descubre productos de calidad y puntualidad para tus proyectos. Comprometidos con el desarrollo de Cajamarca y el país."/>

      </Helmet>
      <Carousel />
      <Info />
      <Counter />
      <NuestrosProductos />
      <Proyectos />
      <Servicios />
      <Clientes />
    </div>
  );
};

export default Home;
