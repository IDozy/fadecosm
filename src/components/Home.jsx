import React from 'react';
import WhatsAppButton from './whatsappbutton/WhatsAppButton';
import Navbar from './navbar/Navbar';
import Carousel from './carousel/Carousel';
import Footer from "./footer/Footer";
import Info from './info/Info';
import Counter from './count/CounterElement';
import Slider from './Test/Slider';
import ProductoSlider from './productoSlider/ProductoSlider';

const Home = () => {
  return (

    <div>
      <Navbar />
      <Carousel />
      <WhatsAppButton />
      <Info/>
      <Counter/>
      <ProductoSlider/>
      <Footer/>
    </div>
  )
}

export default Home
