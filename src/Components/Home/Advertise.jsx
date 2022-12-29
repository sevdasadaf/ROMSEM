import React from 'react';

import prevSvg from '../assets/svg/prev.svg';
import nextSvg from '../assets/svg/next.svg';
import hotDeal from '../assets/image/hotdeal.png';
import plusSvg from '../assets/svg/plus.svg';

const Advertise = () => {
  return (
    <>
    <div className='advertise'>
      <div className='controls'>
         <p> <img src={prevSvg} alt='prev'/> Назад</p>
         <p>  Вперед <img src={nextSvg} alt='next'/></p>
      </div>
      <div className='hot-deals'>
        <div className='hot-deals-pic'>
          <img src={hotDeal} alt='prev'/>
        </div>
        <div className='hot-deals-info'>
            <div className='info-header'>
                <span>Филадельфия и лосось сет</span>
                <small>290 грамм</small>
            </div>
            <div className='info-amount'>
                <span>1150 COM - 10</span>
                <button><img src={plusSvg} alt='next'/></button>
            </div>
            <div className='info-consist'>
                <span>Состав</span>
                <small>Лосось, сыр "Филадельфия", огурец, авокадо</small>
            </div>

            <div className='info-button'>
                <button>Хочу!</button>
            </div>
        </div>
      </div>
    
    
    </div>
    </>
  )
}

export default Advertise