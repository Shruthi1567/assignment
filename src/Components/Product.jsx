import React from 'react';
import products from '../Pages/ProductData.js';
import './Product.css';

function Product() {
  return (
    <>
    <div className='container'>
      {
       products.map((product,index)=>{
        return(
        <div key={index} className='product'>
          
          <img src={product.imageUrl} alt={product.name} className='productimg' />
          <h6 className='productid'>{product.id}</h6>
          <h5 className='productname'>{product.name}</h5>
          <p className='productprice'>$ :{product.offerPrice}<span> <strike>$ :{product.originalPrice}</strike></span></p>
          <p className='productcategory'>{product.category}</p>
          <p className='productdescr'>{product.description}</p>
          {
            product.inStock ? <button className='present'>Add to Cart</button>:<button className='absent'>Out of Stock</button>
          }
        </div>
        );

       })
      }
    </div>
    </>
    
    
  )
}

export default Product;