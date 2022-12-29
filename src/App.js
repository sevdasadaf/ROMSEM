import "swiper/css/bundle";
import './Style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuLinks from "./Components/Home/MenuLinks";


import OrderSushi from "./Components/Home/OrderSushi";
import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";
import Home from "./Pages/Home";
import Roll from "./Pages/Roll";
import Pizza from "./Pages/Pizza";
import Sets from "./Pages/Sets";
import Wok from "./Pages/Wok";
import Sushi from "./Pages/Sushi";
import Salad from "./Pages/Salad";
import Soup from "./Pages/Soup";
import Corn from "./Pages/Corn";
import Drink from "./Pages/Drink";
import Reviews from "./Pages/Reviews";




function App() {
  return (
    <>
    <div className="container">
   <BrowserRouter> 
     <Navbar/>
    <MenuLinks/> 
    <Routes>
      <Route path="/" element = { <Home/> } />
      <Route path="pizza" element = { <Pizza/> } />
      <Route path="set" element = { <Sets/>} />
      <Route path="wok" element = { <Wok/>} />
      <Route path="roll" element = { <Roll/> } />
      <Route path="sushi" element = { <Sushi/> } />
      <Route path="salad" element = { <Salad/> } />
      <Route path="soup" element = { <Soup/>} />
      <Route path="corn" element = { <Corn/>} />
      <Route path="drink" element = { <Drink/>} />
      <Route path="review" element = { <Reviews/>} /> 
  
    </Routes>
    
    <Footer/>
    {/* <PaginatedItems itemsPerPage={4} /> */}
    </BrowserRouter>
   
    </div>
    </>
  );
}

export default App;
