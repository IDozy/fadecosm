import React from 'react';
import WhatsAppButton from './whatsappbutton/WhatsAppButton';
import Navbar from './navbar/Navbar';
import Carousel from './carousel/Carousel';
import Footer from "./footer/Footer.jsx";
import Info from './info/Info';
import Counter from './count/CounterElement';

import ProductoSlider from './productoSlider/ProductoSlider';
import { Clientes } from './sectionClientes/Clientes';

const Home = () => {
  return (

    <div>
      <Navbar />
      <Carousel />
      <WhatsAppButton />
      <Info/>
      <Counter/>
      <ProductoSlider/>
      <Clientes />
      <Footer/>
    </div>
  )
}

export default Home
