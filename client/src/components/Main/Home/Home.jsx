import React, { useEffect, useState, useContext } from 'react';
import CategoriesList from './CategoriesList';
import axios from 'axios';
import { ProductListContext } from '../../../context/ProductListContext';

const Home = () => {
  const { updateProductList } = useContext(ProductListContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:3000/api/products');
        const json = res.data;
        console.log(json)
        updateProductList(json);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="home">
      <article>
        <CategoriesList />
      </article>
    </section>
  );
};

export default Home;
