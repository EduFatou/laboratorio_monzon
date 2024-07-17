import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { ProductListContext } from '../../../../context/ProductListContext';

const CategoriesList = () => {

  const { productList } = useContext(ProductListContext);

  const categories = ['Fijas', 'Implantes', 'Férulas', 'Removibles'];

  return (
    <section className='categories'>
      <Carousel>
        {categories.map((category, index) => (
          <Carousel.Item key={index}>
            <Link to={`/category/${category}`} className="category-card">
              <img
                className="d-block w-100"
                src={`https://via.placeholder.com/800x400?text=${category}`}
                alt={category}
              />
              <Carousel.Caption>
                <h3>{category}</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CategoriesList;

