import React from "react";
import Carousel from "./carousel/Carousel";
import Info from "./info/Info";
import Counter from "./count/CounterElement";
import { Clientes } from "./sectionClientes/Clientes";
import { Proyectos } from "./proyectos/Proyectos";
import { NuestrosProductos } from "./productosCarrousel/NuestrosProductos";
import Servicios from "./servicios/Servicios";

const Home = () => {
  return (
    <div>
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
