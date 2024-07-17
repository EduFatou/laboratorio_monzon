import React, { useContext } from 'react';
import { ProductListContext } from '../../../../../../context/ProductListContext';
import Card from './Card';

const CardList = ({ category }) => {
  const { productList } = useContext(ProductListContext);

  const filteredProducts = productList.filter(product => product.category === category);

  return (
    <section className='card-list'>
      {filteredProducts.map(product => (
        <Card key={product.product_id} product={product} />
      ))}
    </section>
  );
};

export default CardList;
