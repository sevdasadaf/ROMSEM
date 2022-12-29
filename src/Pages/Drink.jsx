import React, {useState, useEffect} from 'react';
import { getDrink } from '../server/Drink';
import drinkSvg from '../assets/svg/drink.svg';
import style from '../Style/Cards.module.css';
import OrderSushi from '../Components/Home/OrderSushi';

const Drink = () => {

  const [drinks, setDrinks] = useState([])
 
  const getAllDrink = () => {
    getDrink()
    .then(res => setDrinks(res.data))
    .catch(err => console.log(err))
    .finally(() => {})
  }

  useEffect(()=> {getAllDrink()},[])
 
  return (
    <>
    <div className={style.cards}>
      
      <div className={style.header}>
          <div className={style.set}>
           <img src={drinkSvg} alt='shushi-product'/>
           <h1>Напитки</h1>
          </div>

          <div>Filter</div>
      </div>
     
     <div className={style.sec}>
    
     {
       drinks.map((product) => {
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

export default Drink