import React from 'react';

const Card = ({ product }) => {
  return (
    <div className='card'>
      <h2>{product.product_name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Card;
