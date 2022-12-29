import React from 'react';

import HotAds from '../Components/Home/HotAds';
import NavPanel from '../Components/Home/NavPanel';
import New from '../Components/Home/New'
import OrderSushi from '../Components/Home/OrderSushi';
import products from '../products.json';

const Home = () => {
  
  return (
    <>
   
    <HotAds/>
    <NavPanel/>
    <New products = {products}/>
    <OrderSushi/>
    
    </>
  )
}

export default Home