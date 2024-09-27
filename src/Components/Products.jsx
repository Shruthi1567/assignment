import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Electronics from '../Pages/Electronics';
import Accessories from '../Pages/Accessories';
import Clothing from '../Pages/Clothing';


function Products() {
  return (
    <div>
       <h1>Welcome to Flipkart</h1> 

       <Routes>
       
        <Route path="/" Element={<Home />}/>
        <Route path="/Electronics" Element={<Electronics />}/>
        <Route path="/" Element={<Accessories />}/>
        <Route path="/" Element={<Clothing />}/>
        
        </Routes>
       </div>
  )
}

export default Products;