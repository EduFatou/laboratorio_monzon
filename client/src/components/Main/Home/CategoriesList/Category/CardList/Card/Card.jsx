import React from 'react';

const Card = ({ product }) => {
  return (
    <div className='card'>
      <h2>{product.product_name}</h2>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <img src={product.url_photo}/>
    </div>
  );
};

export default Card;
