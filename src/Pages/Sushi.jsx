import React from 'react'
import { useEffect, useState } from 'react';
import { getSushi } from '../server/Sushi';
import sushiSvg from '../assets/svg/sushi.svg';
import style from '../Style/Cards.module.css'
import OrderSushi from '../Components/Home/OrderSushi';

const Sushi = () => {
  
   const [sushi, setSushi] = useState([]);

   const getAllSushi = () => {
    getSushi()
    .then(res => setSushi(res.data))
    .catch(err => console.log(err))
    .finally(() => {})
   }

   useEffect(() => {getAllSushi()}, [])

  return (
    <>
    <div className={style.cards}>
      
      <div className={style.header}>
          <div className={style.set}>
           <img src={sushiSvg} alt='shushi-product'/>
           <h1>Суши</h1>
          </div>

          <div>Filter</div>
      </div>
     
     <div className={style.sec}>
    
     {
       sushi.map((product) => {
        return(
          <div className={style.card} key={product.id}>
          <div className={style.pic}>
            <img src={product.pic} alt='sushi'/>
          </div>

          <div className={style.name}>
            <h4> {product.name} </h4>
          </div>
       
          <div className={style.info}>
           <span>{product.info}</span>
          </div>
          
          <div className={style.price}>
            <div className={style.padding}>
             <span>{product.price}</span>
             <button>Хочу!</button>
            </div>
          </div>

          </div>
        )
       })
     }
         
       
    
     </div>          


    </div>
    <OrderSushi/>
    </>
  )
}

export default Sushi