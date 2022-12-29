import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../Style/MenuLinks.module.css'
import Logo from '../../assets/image/logo.png';
import pizzaSvg from '../../assets/svg/pizza.svg';
import setSvg from '../../assets/svg/set.svg';
import wokSvg from '../../assets/svg/wok.svg';
import rollSvg from '../../assets/svg/roll.svg';
import sushiSvg from '../../assets/svg/sushi.svg';
import saladSvg from '../../assets/svg/salat.svg';
import soupSvg from '../../assets/svg/soup.svg';
import cornSvg from '../../assets/svg/corn.svg';
import drinkSvg from '../../assets/svg/drink.svg';
import aksiaSvg from '../../assets/svg/aksia.svg';


const MenuLinks = () => {
    
  return (
    <>
    <div className={style.menu_links}>
    
     <div className={style.logo_section}>
        <Link to='/'><img src={Logo}/> Romsem </Link>
        
    </div>  

    <div className={style.link_sec}>
     
     
        <>
        
        
       <Link to='/pizza'><img src={pizzaSvg} />Пицца</Link>
       <Link to='/set' ><img src={setSvg} />Сеты</Link>
       <Link to='/wok' alt='wok'><img src={wokSvg} />WOK</Link>
       <Link to='/roll' alt='roll'><img src={rollSvg}/>Роллы</Link>
       <Link to='/sushi' alt='sushi'><img src={sushiSvg}/>Суши</Link>
       <Link to='/salad' alt='salad'><img src={saladSvg}/>Салаты</Link>
       <Link to='/soup' alt='soup'><img src={soupSvg}/>Супы</Link>
       <Link to='/corn' alt='corn'><img src={cornSvg}/>Корн доги</Link>
       <Link to='/drink' alt='drink'><img src={drinkSvg}/>Напитки</Link>
       <Link to='/aksia' alt='Акции'><img src={aksiaSvg}/>Акции  </Link> 
        </>
     
     
   
    
    </div>
    
    </div> 
    </>
  )
}

export default MenuLinks