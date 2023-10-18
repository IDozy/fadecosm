import React from 'react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from '../../images/Productos/prod1.jpg'
import image2 from '../../images/Productos/prod2.jpg'
import image3 from '../../images/Productos/prod3.jpg'
import image4 from '../../images/Productos/prod4.jpg'
import image5 from '../../images/Productos/Prefabricados/Bloc_grass_tipo_michi.jpg';
import image6 from '../../images/Productos/prod6.jpg'
import image7 from '../../images/Productos/prod7.jpg'

import "./ProductoSlider.css"



const ProductoSlider = () => {
  
  const images = [
    image1,image2,image3,image4,image5,image6,image7,image1,image2
  ];
  
  const swiperSlides = images.map((image, index) => (
    <SwiperSlide key={index}>
      <img src={image} alt={`Imagenes ${index + 1}`} />
    </SwiperSlide>
  ));

  return (
    
    <div className='container' data-aos="zoom-in" data-aos-duration="3000"  data-aos-delay="150" style={{ height: "100vh", marginTop:"3em" }}>
      <h1 className="heading">
        Nuestros Productos </h1>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}

        slidesPerView={'auto'}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5
        }}

        className='swiper_container'
        {...swiperSlides}
      >
        {swiperSlides}

      </Swiper>



    </div>
  )
}

export default ProductoSlider
