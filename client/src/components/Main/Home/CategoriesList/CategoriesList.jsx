import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductListContext } from '../../../../context/ProductListContext';

const CategoriesList = () => {

  const { productList } = useContext(ProductListContext);

  const categories = ['fijas', 'implantes', 'ferulas', 'removibles'];

  return (
    <section className='categories'>
      {categories.map(category => (
        <Link to={`/category/${category}`} key={category} className="category-card">
          <div className="card-content">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          </div>
        </Link>
      ))}
  </section>
  );
};

export default CategoriesList;
