  import React from 'react';
  import WhatsAppButton from './whatsappbutton/WhatsAppButton';
  import Navbar from './navbar/Navbar';
  import Carousel from './carousel/Carousel';

  const Home = () => {
    return (
    
      <div>
      <Navbar></Navbar>
      <Carousel/>
      <WhatsAppButton></WhatsAppButton>
      </div>
    )
  }

  export default Home
