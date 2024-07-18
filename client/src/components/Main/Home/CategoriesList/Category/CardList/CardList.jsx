import React, { useContext } from 'react';
import { ProductListContext } from '../../../../../../context/ProductListContext';
import Card from './Card';

const CardList = ({ category }) => {
  const { productList } = useContext(ProductListContext);
  console.log(productList);
  const filteredProducts = productList.filter(product => product.category === category);
  console.log(`filtrando ${category}:`, filteredProducts);
  return (
    <section className='card-list'>
      {filteredProducts.map(product => (
        <Card key={product.product_id} product={product} />
      ))}
    </section>
  );
};

export default CardList;
