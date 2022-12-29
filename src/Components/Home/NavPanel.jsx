import React from 'react';
import { Link } from 'react-router-dom';

const NavPanel = () => {
  return (
    <>
    <div className='nav-panel'>
     
        <div className='chicken-panel panels '>
      
        <Link to='/' alt='chicken'>Чикен</Link>
        </div>
        <div className='rice-panel panels'>
       
        <Link to='/' alt='rice-roll'>С угрем</Link>
        </div>
        <div className='corn-panel panels'>
        
        <Link to='corn' alt='corn'>Корн дог</Link>
        </div>
        <div className='pizza-panel panels'> 
       
        <Link to='pizza' alt='pizza'>Пицца</Link></div>
        <div className='aksia-panel panels'> 
        
        <Link to='/' alt='aksia'>Акции</Link>
        </div>
       
    </div>
    </>
  )
}

export default NavPanel