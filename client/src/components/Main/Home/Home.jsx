import React, { useEffect, useState, useContext } from 'react';
import { ProductListContext } from '../../../context/ProductListContext';
import CategoriesList from './CategoriesList';
import axios from 'axios';


const Home = () => {
  const { productList, updateProductList } = useContext(ProductListContext);
  const [value, setValue] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:3000/api/products');
        const json = res.data;

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
