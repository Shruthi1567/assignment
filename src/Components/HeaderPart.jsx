import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderPart.css';
function HeaderPart() {
  return (
    
    <div className='headerpart'>
        {/* <h4>HeaderPart</h4> */}
        <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-2.jpg" alt="logo"/>
        <Link to="/">Home</Link>
        <Link to="/Electronics">Electronics</Link>
        <Link to="/Accessories">Accessories</Link>
        <Link to="/Clothing">Clothing</Link>
        

    </div>
  )
}

export default HeaderPart;