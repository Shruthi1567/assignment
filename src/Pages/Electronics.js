import React, { useState } from 'react';

const Electronics = () => {
  const [product] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Smartphone', category: 'Electronics' },
    { id: 3, name: 'Tablet', category: 'Electronics' },
    { id: 4, name: 'Headphones', category: 'Accessories' },
    { id: 5, name: 'Smartwatch', category: 'Electronics' },
    { id: 6, name: 'Shirt', category: 'Clothing' },
  ]);

  // Filter products where the category is "Electronics"
  const products = product.filter(
    (product) => product.category === 'Electronics'
  );

  return (
    <div>
      <h2>Electronics Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <img src={product.imageUrl} alt={product.name}/>
            <p>{product.category}</p></li>
        ))}
      </ul>
    </div>
  );
};

export default Electronics;

