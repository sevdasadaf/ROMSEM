import React, {useEffect, useState} from 'react';
import { getPizza } from '../server/Pizza';

import pizzaSvg from '../assets/svg/pizza.svg';
import style from '../Style/Cards.module.css';
import OrderSushi from '../Components/Home/OrderSushi';

const Pizza = () => {
  
  const [pizzas, setPizzas] = useState([])
  
  const getAllPizza = () => {
    getPizza()
    .then(res => setPizzas(res.data))
    .catch(err => console.log(err))
    .finally(() => {})
  }

  useEffect(() => { getAllPizza()}, [] )


  return (
    <>
    <div className={style.cards}>
      
      <div className={style.header}>
          <div className={style.set}>
           <img src={pizzaSvg} alt='shushi-pizza'/>
           <h1>Пицца</h1>
          </div>

          <div>Filter</div>
      </div>
     
     <div className={style.sec}>
    
     {
       pizzas.map((pizza) => {
        return(
          <div className={style.card} key={pizza.id}>
          <div className={style.pic}>
            <img src={pizza.pic} alt='sushi-pizza'/>
          </div>

          <div className={style.name}>
            <h4> {pizza.name} </h4>
          </div>
       
          <div className={style.info}>
           <span>{pizza.info}</span>
          </div>
          
          <div className={style.price}>
            <div className={style.padding}>
             <span>{pizza.price}</span>
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

export default Pizza