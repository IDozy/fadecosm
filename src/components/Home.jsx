import React from 'react';
import WhatsAppButton from './whatsappbutton/WhatsAppButton';
import Navbar from './navbar/Navbar';
import Carousel from './carousel/Carousel';
import Footer from "./footer/Footer";

const Home = () => {
  return (

    <div>
      <Navbar />
      <Carousel />
      <WhatsAppButton />
      <Footer/>
    </div>
  )
}

export default Home
