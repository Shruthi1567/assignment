import React from 'react';
import { Routes,Route,} from 'react-router-dom';
import Home from '../Pages/Home';
import Electronics from '../Pages/Electronics';
import Accessories from '../Pages/Accessories';
import Clothing from '../Pages/Clothing';



function Products() {
  return (
    <div>
   
      
       <Routes>

        <Route exact path="" element={<Home />}/>
        <Route exact path="/electronics" element={<Electronics />}/>
        <Route exact path="/accessories" element={<Accessories />}/>
        <Route exact path="/clothing" element={<Clothing />}/>
        
        </Routes>
     
       </div>
  )
}

export default Products;