import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ product }) => {
  return (
    <BootstrapCard className="mb-4">
      <BootstrapCard.Img variant="top" src={product.url_photo} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{product.product_name}</BootstrapCard.Title>
        <BootstrapCard.Text>{product.description}</BootstrapCard.Text>
        <BootstrapCard.Text>Precio: {product.price}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;