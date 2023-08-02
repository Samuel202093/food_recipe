import React from "react";
import img1 from "../assets/img/9ja-soup.png";
import img5 from "../assets/img/9ja-soup2.png";
import img2 from "../assets/img/swipe-meal2.png";
import img3 from "../assets/img/9ja-soup3.png";
import { Swiper, SwiperSlide } from "swiper/react";
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
       
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[EffectFade, Autoplay]}
        className="flex justify-between h-[80vh] bg-[#F2F2F0]"
      >
        <SwiperSlide className="slide1">
          <div className='bg-[#F2F2F0] w-[50%] hidden md:flex justify-center items-center p-6'>
          <h1 className="">Perfect Fuel</h1>
          </div>

          <div className="imageContainer1 bg-[#F2F2F0] flex justify-center items-center w-[100%] md:w-[50%] border-2y border-blue-500y">
            <img src={img3} className='' width={700} height={400}/>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide2">
          
          <div className='bg-[#F2F2F0] w-[50%] hidden md:flex justify-center items-center p-6'>
          <h1>When the Ingredients are Fresh</h1>
          </div>

          <div className="imageContainer2 bg-[#F2F2F0] flex justify-center items-center w-[100%] md:w-[50%] border-2y border-blue-500y">
          <img src={img2} alt="" className='' width={700} height={400}/>
         </div>
        </SwiperSlide>

        <SwiperSlide className="slide3">
        <div className='bg-[#F2F2F0] w-[50%] hidden md:flex justify-center items-center p-6'>
          <h1>Let Food be thy Medicine and Medicine be thy Food</h1>
        </div>
        
        <div className="imageContainer3 bg-[#F2F2F0] flex justify-center items-center w-[100%] md:w-[50%] border-2y border-blue-500y">
          <img src={img1} className='' width={700} height={400}/>
          </div>
          
        </SwiperSlide>

        <SwiperSlide className="slide4">
        <div className='bg-[#F2F2F0] w-[50%] hidden md:flex justify-center items-center p-6'>
          <h1>Beyound the Boundaries of Taste</h1>
        </div>

        <div className="imageContainer4 bg-[#F2F2F0] flex justify-center items-center w-[100%] md:w-[50%] border-2y border-blue-500y">
          <img src={img5} className='' width={700} height={400}/>
         </div>

        </SwiperSlide>
      </Swiper>
  
    </div>
  );
};

export default HeroBanner;
