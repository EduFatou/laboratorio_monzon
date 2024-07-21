import React, { useState, useEffect, useContext } from 'react';
import { ProductListContext } from '../../../context/ProductListContext';
import CategoriesList from './CategoriesList';
import Login from './Login/Login';
import axios from 'axios';
import { Hourglass } from 'react-loader-spinner';

const Home = () => {
  const { updateProductList } = useContext(ProductListContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get('/api/products'); //http://localhost:3000
        const json = res.data;
        updateProductList(json);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-container">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              colors={['#306cce', '#72a1ed']}
            />
          </div>
        </div>
      )}
      <section className="home">
        <article>
          <CategoriesList />
          <div className="login-section">
            <h3>Bienvenid@ a Laboratorio Dental Monzón, accede para enviar tu solicitud de presupuesto.</h3>
            <Login />
            <p>
              Laboratorio Dental Monzón, donde transformamos sonrisas utilizando las últimas tecnologías y el conocimiento experto de nuestro equipo. Destacamos por ofrecer precios competitivos y resultados excelentes, garantizando la satisfacción de nuestros clientes.
            </p>
          </div>
          <div className='contact-section'>
            <p>Conócenos en Sevilla, Calle Monzón, local bajo 6H.</p>
            <p>Teléfono: +34 600 123 456</p>
            <a href="mailto:laboratoriodentalmonzon@gmail.com">laboratoriodentalmonzon@gmail.com</a>
            <div className='map-container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.208251575949!2d-5.985801400000038!3d37.361248999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c2ae39984d3%3A0xef958880c6c9fa63!2sC.%20Monz%C3%B3n%2C%206%2C%2041012%20Sevilla!5e0!3m2!1ses!2ses!4v1721570125901!5m2!1ses!2ses" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;