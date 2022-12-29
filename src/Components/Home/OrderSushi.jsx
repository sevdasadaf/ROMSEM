import React from 'react'
import { useState } from 'react';
import style from '../../Style/OrderSushi.module.css'
import Vector from '../../assets/svg/vector.svg'

const ReadMore = ({children}) => {
   
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)

  const ReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <>
    <div className={style.order_sushi}>
    <p>
      {isReadMore ? text.slice(0,250) : text }
      
      <button onClick={ReadMore}> 
       {isReadMore ? "Подробнее"  : "Менее"}
       {isReadMore ? <img src={Vector} alt='vector'/> : <img src={Vector} alt='vector' className={style.vec}/>}
      </button>
    </p>
   </div>
    
    </>
  )
}



const OrderSushi = () => {
  return (
    <>
    <div className={style.order_sushi}>
    <h2>Заказать суши в Бишкеке</h2>
      <p>
        <ReadMore>
        Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, 
        приготовленные по классическим и адаптированным к европейской аудитории рецептам,
         а также собственным наработкам наших поваров. Мы ценим время наших клиентов, 
         поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис. 
         В нашем меню более 20 видов суши: 
         Классические с сырым лососем, тунцом, окунем.
         Экзотические с тигровой креветкой, морским гребешком.
         Пикантные с копченым лососем, угрем.
         В меню также представлены гунканы: с начинкой из красной икры и тобико,
         а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. 
        Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.
        </ReadMore>
      </p>
    </div>
    </>
  )
}

export default OrderSushi