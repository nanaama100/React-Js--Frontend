import React from 'react';
import './navbar3.css';

const Navbar3 = ({size, setShow}) => {
  return (
    <>
        <div className='BreakfastBackgroundImage'></div>
        <h1 id="BreakfastHead">The Lunch Section</h1>
        <h2 id="BreakfastPara">Enjoy a delicious and mouth watering meal.</h2>
        <nav className='navy'>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                Order Online
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
    
    </>
    
  )
}

export default Navbar3;