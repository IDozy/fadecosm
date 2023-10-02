import React from 'react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from "../../assets/imagen-1.jpg"
import image2 from "../../assets/imagen-2.jpg"
import image3 from "../../assets/imagen-3.jpg"
import image4 from "../../assets/imagen-4.jpg"
import image5 from "../../assets/imagen-5.jpg"

import "./ProductoSlider.css"


const ProductoSlider = () => {
  return (
    <div className='container'>
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
        pagination={{ el: '.swiper-pagination', enabled: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
          enabled: true
        }}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>

      </Swiper>



    </div>
  )
}

export default ProductoSlider
