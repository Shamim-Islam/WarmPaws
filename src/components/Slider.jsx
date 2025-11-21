import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import i1 from '../assets/1.jpg'
import i2 from '../assets/2.jpg'
import i3 from '../assets/3.png'
import i4 from '../assets/4.jpg'
import i5 from '../assets/5.jpg'
import i6 from '../assets/6.jpg'
import i7 from '../assets/7.jpg'
import i8 from '../assets/8.jpg'


const Slider = () => {
  return (
    <div className="z-(-1)">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={i1} alt="" className="w-full h-[750px] object-cover" /></SwiperSlide>
        <SwiperSlide><img src={i2} alt="" className="w-full h-[750px] object-cover"/></SwiperSlide>
        <SwiperSlide><img src={i3} alt="" className="w-full h-[750px] object-cover"/></SwiperSlide>
        <SwiperSlide><img src={i4} alt="" className="w-full h-[750px] object-cover"/></SwiperSlide>
        <SwiperSlide><img src={i5} alt="" className="w-full h-[750px] object-cover"/></SwiperSlide>
        <SwiperSlide><img src={i6} alt="" className="w-full h-[750px] object-cover"/></SwiperSlide>
        <SwiperSlide><img src={i7} alt="" className="w-full h-[750px] object-cover"/></SwiperSlide>
        <SwiperSlide><img src={i8} alt="" className="w-full h-[750px] object-cover"/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
