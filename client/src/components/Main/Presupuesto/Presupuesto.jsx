import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { ProductListContext } from '../../../context/ProductListContext';
import axios from 'axios';

const Presupuesto = () => {
  const [userData, setUserData] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
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

    try {
      const quoteResponse = await axios.post('http://localhost:3000/api/quotes', quoteData);
      const quote_id = quoteResponse.data.quote_id;

      const quoteProductsData = selectedProducts.map(product => ({
        quote_id: quote_id,
        product_id: product.product_id,
        quantity: product.quantity
      }));
      console.log(quoteProductsData);
      await Promise.all(quoteProductsData.map(async (quoteProduct) => {
        await axios.post('http://localhost:3000/api/quote_products', quoteProduct);
      }));

      alert('Presupuesto enviado');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Error al crear el presupuesto');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm={2}>Nombre:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={userData.name || ''} readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formEmail">
          <Form.Label column sm={2}>Email:</Form.Label>
          <Col sm={10}>
            <Form.Control type="email" value={userData.email || ''} readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPhone">
          <Form.Label column sm={2}>Teléfono:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={userData.phone || ''} readOnly />
          </Col>
        </Form.Group>

        <Form.Group controlId="formProducts">
          <Form.Label>Productos:</Form.Label>
          {selectedProducts.map((product, index) => (
            <Row key={index} className="mb-3">
              <Col>
                <Form.Control
                  as="select"
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
                </Form.Control>
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={(e) => handleProductChange(index, e)}
                  min="1"
                />
              </Col>
              <Col>
                <Button variant="danger" onClick={() => handleRemoveProduct(index)}>
                  Eliminar
                </Button>
              </Col>
            </Row>
          ))}
          <Button variant="primary" onClick={handleAddProduct}>
            Añadir Producto
          </Button>
        </Form.Group>

        <Form.Group controlId="formDetails">
          <Form.Label>Detalles:</Form.Label>
          <Form.Control
            as="textarea"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default Presupuesto;
