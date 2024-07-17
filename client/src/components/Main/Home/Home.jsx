import React, { useEffect, useState, useContext } from 'react';
import CategoriesList from './CategoriesList';
import axios from 'axios';
import { ProductListContext } from '../../../context/ProductListContext';


const Home = () => {

  const [value, setValue] = useState(null);// Para guardar el dato a buscar
  const [info, setInfo] = useState([]);
  const { productList, updateProductList } = useContext(ProductListContext)

 console.log(productList)
  useEffect(() => {
    async function fetchData() {

      try {
        const res = await axios.get('http://localhost:3000/api/products');
        const json = res.data;
        
        setInfo(json);
        updateProductList(...productList, json)
      } catch (e) {
        setValue([]) // No pintes nada 
      }
    }
    fetchData();
  }, [value]); // componentDidUpdate. listener

  return <section className="home">
    <article>
      <CategoriesList />
    </article>
  </section>;
};

export default Home;