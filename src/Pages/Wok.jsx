import React, { useEffect, useState } from 'react';

import wokSvg from '../assets/svg/wok.svg';
import OrderSushi from '../Components/Home/OrderSushi';
import { getWok } from '../server/Wok';
import style from '../Style/Cards.module.css';

const Wok = () => {

  const [woks, setWoks] = useState([]);

  const getAllWok = () => {
    getWok()
    .then(res => setWoks(res.data))
    .catch(err => console.log(err))
    .finally(() => {})
  }

  useEffect(() => {getAllWok()}, [])



  return (
    <>
    <div className={style.cards}>
      
      <div className={style.header}>
          <div className={style.set}>
           <img src={wokSvg} alt='wok'/>
           <h1>WOK</h1>
          </div>

          <div>Filter</div>
      </div>
     
     <div className={style.sec}>
    
     {
       woks.map((wok) => {
        return(
          <div className={style.card} key={wok.id}>
          <div className={style.pic}>
            <img src={wok.pic} alt='wok'/>
          </div>

          <div className={style.name}>
            <h4> {wok.name} </h4>
          </div>
       
          <div className={style.info}>
           <span>{wok.info}</span>
          </div>
          
          <div className={style.price}>
            <div className={style.padding}>
             <span>{wok.price}</span>
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

export default Wok