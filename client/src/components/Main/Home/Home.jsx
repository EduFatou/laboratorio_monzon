import React, { useEffect, useContext } from 'react';
import { ProductListContext } from '../../../context/ProductListContext';
import CategoriesList from './CategoriesList';
import Login from './Login/Login';
import Equipo from '../Equipo';
import axios from 'axios';


const Home = () => {
  const { updateProductList } = useContext(ProductListContext);


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
        <Login/>
      </article>
    </section>
  );
};

export default Home;
