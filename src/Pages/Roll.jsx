import React, {useEffect, useState} from 'react'
import { getRoll } from '../server/Roll';

import rollSvg from '../assets/svg/roll.svg';
import style from '../Style/Cards.module.css'
import OrderSushi from '../Components/Home/OrderSushi';

const Roll = () => {
  
  const [rolls, setRolls] = useState([]);

  const getAllRolls = () => {
    getRoll()
    .then(res => setRolls(res.data))
    .catch(err => console.log(err))
    .finally( _ => {})
  }

  useEffect( _ => { getAllRolls()},[])
  
  return (
    <>
    <div className={style.cards}>
      
      <div className={style.header}>
          <div className={style.set}>
           <img src={rollSvg} alt='shushi-roll'/>
           <h1>Роллы</h1>
          </div>

          <div>Filter</div>
      </div>
     
     <div className={style.sec}>
    
     {
       rolls.map((roll) => {
        return(
          <div className={style.card} key={roll.id}>
          <div className={style.pic}>
            <img src={roll.pic} alt='sushi-roll'/>
          </div>

          <div className={style.name}>
            <h4> {roll.name} </h4>
          </div>
       
          <div className={style.info}>
           <span>{roll.info}</span>
          </div>
          
          <div className={style.price}>
            <div className={style.padding}>
             <span>{roll.price}</span>
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

export default Roll