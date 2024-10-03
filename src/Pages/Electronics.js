import React from 'react';
import products from './ProductData'; 

const Electronics = () => {
   const electronicsProducts = products.filter(
    (product) => product.category === 'Electronics'
  );
  return (
    <div>
    
      <h2>Electronics Products</h2>
      <ul className='container'>
        {electronicsProducts.map((product,id) => (
          <li key={id} className='product'>
            <img src={product.imageUrl} alt={product.name} className='productimg' />
            <h6 className='productid'>{product.id}</h6>
            <h5 className='productname'>{product.name}</h5>
            <p className='productprice'>
              $ : {product.offerPrice} 
              <span> <strike>$ : {product.originalPrice}</strike></span>
            </p>
            <p className='productcategory'><b>category</b>:{product.category}</p>
            <p className='productdescr'><b>description</b>:{product.description}</p>
            {
            product.inStock ? <button className='present'>Add to Cart</button>:<button className='absent'>Out of Stock</button>
          }
            
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default Electronics;
