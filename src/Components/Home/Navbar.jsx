import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import clockSvg from '../../assets/svg/clock.svg';
import searchSvg from '../../assets/svg/search.svg';

const Navbar = () => {

  const searchIcon = useRef()
  const searchInput = useRef()

  const openSearch = (e) => {
    const clicked = e.target
    if(clicked.classList.contains('s-icon')) {
      searchInput.current.classList.toggle('s-input-active')
      searchIcon.current.classList.toggle('s-icon-active')
    }
  }

  return (
    <>
    <div className='navbar'>
        
        <div className='phone-section'>
          <div className='phone-section-top'>
          <h4>Наш телефон</h4>
          <span>+996 705 188 955</span>
          <span>+996 555 188 955</span>
          </div>
          
          <div className='clock-bottom'>
          <p><img src={clockSvg} alt='clock'/> работаем с 10:00 до 00:00</p>
          </div>
        </div>

        <div className='city-section'>
           <div className='city-left'>
             <span>Город:</span>
             <h4>Бишкек</h4>
           </div>

           <div className='city-right'>
             
             <div className='city-right-links'>
               <Link to='/review'>Отзывы</Link>
               <a href='#'>Доставка и оплата</a>
             </div>

             <div className='search-sec'>
              <input className='s-input-passive' ref={searchInput} placeholder='поиск' />
              <img src={searchSvg} alt='search'  ref={searchIcon} onClick={openSearch} className='s-icon' />
             </div>
        
           </div>
        </div>

    </div>   
    </>
    
  )
}

export default Navbar