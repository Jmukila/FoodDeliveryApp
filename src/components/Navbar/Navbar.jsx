import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("Home");
    const{getTotalCartAmount}=useContext(StoreContext);
    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt="Logo" className='navbar-logo' /></Link>

            <ul className="navbar-menu">
                <li>
                    <Link 
                        to="/" 
                        onClick={() => setMenu("Home")} 
                        className={menu === "Home" ? "active" : ""}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <a href="#explore-menu" 
                        onClick={() => setMenu("Menu")} 
                        className={menu === "Menu" ? "active" : ""}
                    >
                        Menu
                    </a>
                </li>
                <li>
                    <a href='#app-download'
                        onClick={() => setMenu("Mobile-app")} 
                        className={menu === "Mobile-app" ? "active" : ""}
                    >
                        Mobile App
                    </a>
                </li>
                <li>
                    <a href='#footer'
                        onClick={() => setMenu("Contact-us")} 
                        className={menu === "Contact-us" ? "active" : ""}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="Search Icon"/>
                <div className='navbar-search-icon'>
                    <Link to="/cart" ><img src={assets.basket_icon} alt="Basket Icon"/></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)} >Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;
