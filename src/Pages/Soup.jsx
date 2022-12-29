import React from 'react'
import { useEffect, useState } from 'react';
import { getSoup } from '../server/Soup';
import soupSvg from '../assets/svg/soup.svg';
import style from '../Style/Cards.module.css'
import OrderSushi from '../Components/Home/OrderSushi';

const Soup = () => {

  const[soup, setSoup] = useState([])

  const getAllSoup = () => {
    getSoup()
    .then(res => setSoup(res.data))
    .catch(err => console.log(err))
    .finally(() => {})
  }
  
  useEffect(() => {getAllSoup()}, [])

  return (
    <>
    <div className={style.cards}>
      
      <div className={style.header}>
          <div className={style.set}>
           <img src={soupSvg} alt='soup'/>
           <h1>Супы</h1>
          </div>

          <div>Filter</div>
      </div>
     
     <div className={style.sec}>
    
     {
       soup.map((product) => {
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

export default Soup