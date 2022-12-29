import React, {useEffect, useState} from 'react'
import { getCorn } from '../server/Corn'
import cornSvg from '../assets/svg/corn.svg';
import style from '../Style/Cards.module.css'
import OrderSushi from '../Components/Home/OrderSushi';

const Corn = () => {

  const [corn, setCorn] = useState([])
 
  const getAllCorn = () => {
    getCorn()
    .then(res => setCorn(res.data))
    .catch(err => console.log(err))
    .finally(() => {})
  }

  useEffect(() => {getAllCorn()},[])
  return (
    <>
    <div className={style.cards}>
      
      <div className={style.header}>
          <div className={style.set}>
           <img src={cornSvg} alt='corn'/>
           <h1>Корн доги</h1>
          </div>

          <div>Filter</div>
      </div>
     
     <div className={style.sec}>
    
     {
       corn.map((product) => {
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

export default Corn