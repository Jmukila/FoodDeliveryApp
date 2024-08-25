import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import Home from './pages/Home/Home.jsx'; // Assuming Home and Cart components exist
import Cart from './pages/Cart/Cart.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';

function App() {
  const[showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;