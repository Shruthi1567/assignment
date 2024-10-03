import React, { useState } from 'react';
import products from './ProductData.js';

function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    console.log("Product clicked:", product); 
    setSelectedProduct(product);
  };

  return (
    <>
      
      <div>
        <ul className='container'>
          {products.map((product) => (
            <li key={product.id} className='product'>
              <div onClick={() => handleProductClick(product)}>
                <img src={product.imageUrl} alt={product.name} className="productimg" />
                <h6 className="productid">{product.id}</h6>
                <h5 className="productname">{product.name}</h5>
                <p className="productprice">
                  $ : {product.offerPrice}{" "}
                  <span>
                    <strike>$ : {product.originalPrice}</strike>
                  </span>
                </p>
                <b className="productcategory">{product.category}</b>
                <p className="productdescr">{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedProduct && (
        <div className="product-details">
          <h3>Selected Product Details</h3>
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="productimg" />
          <h5>{selectedProduct.name}</h5>
          <p>Price: ${selectedProduct.offerPrice}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Description: {selectedProduct.description}</p>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
