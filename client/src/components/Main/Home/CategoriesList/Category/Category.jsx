import React from 'react';
import { useParams } from 'react-router-dom';
import CardList from './CardList';

const Category = () => {
  const { category } = useParams();

  return (
    <section className='category'>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <CardList category={category} />
    </section>
  );
};

export default Category;