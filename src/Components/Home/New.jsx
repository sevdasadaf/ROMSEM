import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import style from '../../Style/NewSec.module.css'




const New = ({products}) => {
  return (
    <div className={style.sec}>

       <div className={style.header}>
         <span  className={style.newlink} >Новинки</span>
         <span className={style.popular} >Популярное</span>
       </div>
       
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className={style.swiper}
      >
        {products.map((product) =>
        <SwiperSlide>
          <div className={style.slide}>
         
            <div className={style.pic} key={product.id}>
                <img src={product.image} alt=''/>
            </div>
            <div className={style.info}>
                <h4>{product.name}</h4>
                <p>{product.info}</p>
            </div>
            <div className={style.purchase}>
                <span>{product.price}</span>
                <button>Хочу!</button>
            </div>
          </div>
        
        </SwiperSlide>
        )}


       </Swiper> 
    
    
    </div>
  )   
      
  
}

export default New