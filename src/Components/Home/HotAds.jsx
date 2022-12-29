import React, { useEffect } from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


//api
import { getAksia } from '../../server/Aksia';

const HotAds = () => {

  const [aksia, setAksia] = useState([])

  const getAllAksia = () => {
     getAksia()
     .then(res => setAksia(res.data))
     .catch(err => console.log(err))
     .finally(() => {})
  }
  
  useEffect(() => {getAllAksia()}, [])

  return (
    <div className='hot-ads'>
       <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        keyboard ={{
         enabled: true,
         onlyInViewport: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
   
      >
      {
        aksia.map((product) => {
          return (
           <SwiperSlide className='swiper' key={product.id}><img src={product.offers} alt='aksia'/></SwiperSlide> 
          )
        })
      }
        
       
      </Swiper>
    </div>
  )
}

export default HotAds