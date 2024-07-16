import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductListContext } from '../../../context/ProductListContext';

const Details = () => {

  const {productList} = useContext(ProductListContext)
  const productID = useParams();

  const [product] = productList.filter(item => item.product_id == productID.product_id);
  console.log(productID)

  return <section className='details'>
    <article className='card'>
    <div className='name'>
      <p>Name: {product.product_name}</p>
      </div>
      <img src={product.url_photo} alt={product.product_name} className='img-card' />
    </article>
    <article className='description'>
      <p>{product.description}</p>
    </article>
  </section>
};

export default Details;