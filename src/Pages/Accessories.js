import React from 'react';
import products from './ProductData'; 

const Accessories = () => {
  
  const accessoriesProducts = products.filter(
    (product) => product.category === 'Accessories'
  );

  return (
    <div>
     
      <h2>Accessories Products</h2>
      <ul className='container'>
        {accessoriesProducts.map((product,id) => (
          <li key={id} className='product'>
            <img src={product.imageUrl} alt={product.name} className='productimg' />
            <h6 className='productid'>{product.id}</h6>
            <h5 className='productname'>{product.name}</h5>
            <p className='productprice'>
              $ : {product.offerPrice} 
              <span> <strike>$ : {product.originalPrice}</strike></span>
            </p>
            <b className='productcategory'>{product.category}</b>
            <p className='productdescr'>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accessories;
