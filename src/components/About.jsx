import React from 'react';
import Navbar from './navbar/Navbar';
import WhatsAppButton from './whatsappbutton/WhatsAppButton';
import CarouselAbout from './carouselAbout/CarouselAbout';

export const About = () => {
  return (
    <div>
    <Navbar></Navbar>
    <CarouselAbout />
    <WhatsAppButton></WhatsAppButton>
    </div>
  )
}
