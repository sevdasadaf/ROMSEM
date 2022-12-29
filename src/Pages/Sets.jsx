import React, {useEffect, useState} from 'react';

import { getSets } from '../server/Sets';

import setSvg from '../assets/svg/set.svg';
import style from '../Style/Cards.module.css';
import OrderSushi from '../Components/Home/OrderSushi';

const Sets = () => {

  const [set, setSet] = useState([])

  const getAllSets = () => {
    getSets()
    .then(res => setSet(res.data))
    .catch(err => console.log(err))
    .finally(() => {})
  }

  useEffect(() => {getAllSets()}, [])
    
  return (
    <>
    <div className={style.cards}>
      
      <div className={style.header}>
          <div className={style.set}>
           <img src={setSvg} alt='shushi-product'/>
           <h1>Сеты</h1>
          </div>

          <div>Filter</div>
      </div>
     
     <div className={style.sec}>
    
     {
       set.map((product) => {
        return(
          <div className={style.card} key={product.id}>
          <div className={style.pic}>
            <img src={product.pic} alt='sushi-set'/>
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

export default Sets