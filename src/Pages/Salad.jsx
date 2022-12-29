import React from 'react'
import { useEffect, useState } from 'react'
import { getSalad } from '../server/Salad'
import saladSvg from '../assets/svg/salat.svg';
import style from '../Style/Cards.module.css';
import OrderSushi from '../Components/Home/OrderSushi';

const Salad = () => {

  const [salad, setSalad] = useState([])

  const getAllSalad = () => {
    getSalad()
    .then(res => setSalad(res.data))
    .catch(err => console.log(err))
    .finally(() => {})
  }

  useEffect(() => {getAllSalad()}, [])

  return (
    <>
    <div className={style.cards}>
      
      <div className={style.header}>
          <div className={style.set}>
           <img src={saladSvg} alt='shushi-product'/>
           <h1>Салаты</h1>
          </div>

          <div>Filter</div>
      </div>
     
     <div className={style.sec}>
    
     {
       salad.map((product) => {
        return(
          <div className={style.card} key={product.id}>
          <div className={style.pic}>
            <img src={product.pic} alt='salad'/>
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

export default Salad