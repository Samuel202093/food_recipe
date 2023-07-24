import React from "react";
import img1 from "../assets/img/food_lady.avif";
import img5 from "../assets/img/chocolate_food.avif";
import img2 from "../assets/img/food_land.avif";
import img3 from "../assets/img/woman_cutting.avif";
import img4 from "../assets/img/food_landing.avif";
// import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
const HeroBanner = () => {
  return (
    <div className="flex justify-centery items-centery h-[80vh] w-[100%] lg:w-[80%]y mx-0 lg:mx-autoy mt-5y border-2y border-red-600y">
       
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        effect={"fade"}
       
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="flex justify-between h-[80vh] border-2y border-[green]y"
      >
        <SwiperSlide className="slide1">
          <span>2</span>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          
        </SwiperSlide>
        <SwiperSlide className="slide3">
          
        </SwiperSlide>
        <SwiperSlide className="slide4">
          
        </SwiperSlide>
      </Swiper>
  
    </div>
  );
};

export default HeroBanner;
