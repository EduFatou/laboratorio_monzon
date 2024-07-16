import React, { useEffect, useState } from 'react';
import Categorias from './Categorias';
import axios from 'axios';


const Home = () => {

  const [message, setMessage] = useState({});
  const [products, setProducts] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get("/api/products");
        const products = res.data;
        console.log(res.data)

        // Guarda en el array de posts el resultado. Procesa los datos
        setProducts(products);
      } catch (e) {
        setProducts([]) // No pintes nada 
      }
    }

    fetchData();
  }, [message]); // componentDidUpdate

  return <section className="home">
    <article>
      <Categorias />
    </article>
  </section>;
};

export default Home;