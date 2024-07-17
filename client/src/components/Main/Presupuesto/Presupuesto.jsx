import React, { useState, useEffect, useContext } from 'react';
import { ProductListContext } from '../../../context/ProductListContext';
import axios from 'axios';

const Presupuesto = () => {
  const [userData, setUserData] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([{ product_id: '', quantity: 1 }]);
  const [details, setDetails] = useState('');

  const { productList } = useContext(ProductListContext);

  useEffect(() => {
  
    const user_email = 'edu@gmail.com'; //logica user_id!!
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/users?email=${user_email}`);
        setUserData(res.data[0]);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleProductChange = (index, event) => {
    const { name, value } = event.target;
    const newSelectedProducts = [...selectedProducts];
    newSelectedProducts[index] = {
      ...newSelectedProducts[index],
      [name]: value
    };
    setSelectedProducts(newSelectedProducts);
  };

  const handleAddProduct = () => {
    setSelectedProducts([...selectedProducts, { product_id: '', quantity: 1 }]);
  };

  const handleRemoveProduct = (index) => {
    const newSelectedProducts = selectedProducts.filter((_, i) => i !== index);
    setSelectedProducts(newSelectedProducts);
  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!userData.user_id || !details || selectedProducts.length === 0) {
      alert('Por favor, completa el presupuesto antes de enviarlo.');
      return;
    }

    const quoteData = {
      user_id: userData.user_id,
      details: details
    };
console.log(quoteData)
    try {
      const quoteResponse = await axios.post('http://localhost:3000/api/quotes', quoteData);
      const quote_id = quoteResponse.data.quote_id;

      const quoteProductsData = selectedProducts.map(product => ({
        quote_id: quote_id,
        product_id: product.product_id,
        quantity: product.quantity
      }));
      console.log(quoteProductsData)
      await Promise.all(quoteProductsData.map(async (quoteProduct) => {
        await axios.post('http://localhost:3000/api/quote_products', quoteProduct);
      }));

      alert('Presupuesto creado con éxito!');
    } catch (error) {
      console.error('Error creating quote:', error.response ? error.response.data : error.message);
      alert('Error al crear el presupuesto.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label>Nombre:</label>
        <input type="text" value={userData.name || ''} readOnly />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={userData.email || ''} readOnly />
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="text" value={userData.phone || ''} readOnly />
      </div>
      <div>
        <label>Productos:</label>
        {selectedProducts.map((product, index) => (
          <div key={index}>
            <select
              name="product_id"
              value={product.product_id}
              onChange={(e) => handleProductChange(index, e)}
            >
              <option value="">Seleccionar producto</option>
              {productList.map((prod) => (
                <option key={prod.product_id} value={prod.product_id}>
                  {prod.product_name}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={(e) => handleProductChange(index, e)}
              min="1"
            />
            <button type="button" onClick={() => handleRemoveProduct(index)}>
              Eliminar
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddProduct}>
          Añadir Producto
        </button>
      </div>
      <div>
        <label>Detalles:</label>
        <textarea value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Presupuesto;
